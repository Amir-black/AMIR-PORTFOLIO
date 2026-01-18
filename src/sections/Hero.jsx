import SectionWrapper from '../components/SectionWrapper';
import FloatingButton from '../components/FloatingButton';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <SectionWrapper id="hero">
            <div style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        color: 'var(--accent-secondary)', // Subtle slate
                        letterSpacing: '5px',
                        textTransform: 'uppercase',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        marginBottom: '1rem'
                    }}
                >
                    Mechanical Engineering Portfolio
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 50 }}
                    style={{
                        fontSize: 'clamp(3rem, 7vw, 6rem)',
                        marginBottom: '1.5rem',
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1
                    }}
                >
                    AMIR VK
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    style={{
                        maxWidth: '600px',
                        margin: '0 auto 3rem auto',
                        color: 'var(--text-secondary)',
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        lineHeight: 1.6
                    }}
                >
                    <p>
                        Designing precision systems. Bridging the gap between
                        <span style={{ color: 'var(--accent-primary)' }}> digital thermodynamics</span> and
                        <span style={{ color: 'var(--accent-primary)' }}> physical manufacturing</span>.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <FloatingButton onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                        Explore My Work
                    </FloatingButton>
                </motion.div>
            </div>

            {/* Decorative Background Elements */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />
        </SectionWrapper>
    );
};

export default Hero;
