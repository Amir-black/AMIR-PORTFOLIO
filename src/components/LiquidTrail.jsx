import { useEffect, useRef } from 'react';

const LiquidTrail = () => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const mouse = useRef({ x: 0, y: 0 });
    const isActive = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        const handleMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
            isActive.current = true;

            // Maximum Density for Smoothness
            for (let i = 0; i < 4; i++) {
                particles.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    size: Math.random() * 20 + 15, // Consistent large base
                    vx: (Math.random() - 0.5) * 0.5, // Reduced scatter for smooth linear flow
                    vy: (Math.random() - 0.5) * 0.5,
                    life: 1
                });
            }
        };

        // Touch support
        const handleTouchMove = (e) => {
            const touch = e.touches[0];
            handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);

        const animate = () => {
            // Clear but keep trail slightly? No, full clear for gooey effect
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Filter dead particles
            particles.current = particles.current.filter(p => p.life > 0.05);

            // Update and Draw
            particles.current.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.life *= 0.94; // Faster decay (Short trail)
                p.size *= 0.94; // Faster shrink

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                // High alpha for fusion filter to work, visuals controlled by canvas opacity
                ctx.fillStyle = `rgba(255, 255, 255, ${p.life})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            {/* The Canvas Layer */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: -1,
                    filter: "url(#liquid-filter)",
                    opacity: 0.15 // Transparent water look
                }}
            />

            {/* The SVG Filter Definition (Invisible) */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <filter id="liquid-filter">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                        />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>
        </>
    );
};

export default LiquidTrail;
