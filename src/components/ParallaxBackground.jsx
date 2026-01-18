import { motion, useMotionValue, useSpring, useAnimationFrame } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';
import { ENGINEERING_PATHS } from '../constants/shapes';
import LiquidTrail from './LiquidTrail';

const FloatingMagneticDoodle = ({ path, initialX, initialY, size, rotation, driftSpeed, isMobile }) => {
    const ref = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Floating State
    const timeRef = useRef(Math.random() * 100);
    const [floatPos, setFloatPos] = useState({ x: 0, y: 0 });

    // Physics for Magnetism
    const springConfig = { damping: 30, stiffness: 200 };
    const dx = useSpring(mouseX, springConfig);
    const dy = useSpring(mouseY, springConfig);

    useAnimationFrame((t) => {
        if (isMobile) return;

        // Slow continuous drift
        const time = (t / 1000) * driftSpeed + timeRef.current;
        setFloatPos({
            x: Math.sin(time) * 30, // 30px drift range
            y: Math.cos(time * 0.8) * 30
        });
    });

    useEffect(() => {
        if (isMobile) return;

        const handleMouseMove = (e) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

            // Interaction radius: 250px
            if (dist < 250) {
                // Magnetic pull: max 15px
                const pullStrength = 15 * (1 - dist / 250);
                const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

                mouseX.set(Math.cos(angle) * pullStrength);
                mouseY.set(Math.sin(angle) * pullStrength);
            } else {
                mouseX.set(0);
                mouseY.set(0);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isMobile]);

    return (
        <motion.g
            ref={ref}
            style={{
                x: dx,
                y: dy,
                translateX: floatPos.x,
                translateY: floatPos.y,
                transformOrigin: 'center'
            }}
        >
            <path
                d={path}
                fill="none"
                stroke="var(--text-tertiary)"
                strokeWidth="3.0"
                opacity="0.2"
                transform={`translate(${initialX}, ${initialY}) scale(${size / 100}) rotate(${rotation})`}
            />
        </motion.g>
    );
};

const ParallaxBackground = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.matchMedia("(hover: none)").matches || window.innerWidth < 768);
        const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });

        checkMobile();
        handleResize();
        window.addEventListener('resize', () => { checkMobile(); handleResize(); });
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Deterministic generation of doodles based on screen size
    const doodles = useMemo(() => {
        if (dimensions.width === 0) return [];

        const count = isMobile ? 8 : 18;
        const availablePaths = Object.values(ENGINEERING_PATHS);
        const items = [];

        for (let i = 0; i < count; i++) {
            items.push({
                path: availablePaths[Math.floor(Math.random() * availablePaths.length)],
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                size: 40 + Math.random() * 80, // Size 40-120
                rotation: Math.random() * 360,
                driftSpeed: 0.2 + Math.random() * 0.5,
                key: i
            });
        }
        return items;
    }, [dimensions, isMobile]);

    if (dimensions.width === 0) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                overflow: 'hidden',
                background: 'radial-gradient(circle at 60% 40%, #0a0e14 0%, #05080a 100%)',
                pointerEvents: 'none'
            }}
        >
            {/* Background Grid - Static Foundation */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `
                    linear-gradient(rgba(148, 163, 184, 0.07) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(148, 163, 184, 0.07) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
                opacity: 0.8
            }} />

            {/* Liquid Cooling Layer */}
            <LiquidTrail />

            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                {doodles.map((doodle) => (
                    <FloatingMagneticDoodle
                        key={doodle.key}
                        path={doodle.path}
                        initialX={doodle.x}
                        initialY={doodle.y}
                        size={doodle.size}
                        rotation={doodle.rotation}
                        driftSpeed={doodle.driftSpeed}
                        isMobile={isMobile}
                    />
                ))}
            </svg>

            {/* Vignette */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, transparent 30%, var(--bg-color) 100%)',
                opacity: 0.8
            }} />
        </div>
    );
};

export default ParallaxBackground;
