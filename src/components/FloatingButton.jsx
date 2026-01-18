import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const FloatingButton = ({ children, onClick, className = '' }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const x = (clientX - centerX) * 0.5; // Stronger Magnetism
        const y = (clientY - centerY) * 0.5;

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={ref}
            className={`floating-btn ${className}`}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }} // Heavier feel
            style={{
                padding: '12px 30px',
                color: 'var(--bg-color)',
                background: 'var(--accent-primary)',
                borderRadius: '4px', // Engineering squared corners (slight radius)
                fontWeight: '600',
                fontSize: '1rem',
                letterSpacing: '1px',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 10,
                border: '1px solid rgba(255,255,255,0.2)'
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(56, 189, 248, 0.6)' }}
            whileTap={{ scale: 0.95 }}
        >
            <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>

            {/* Sheen Effect */}
            <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    zIndex: 1
                }}
            />
        </motion.button>
    );
};

export default FloatingButton;
