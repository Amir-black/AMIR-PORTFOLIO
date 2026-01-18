import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';
import Magnetic from '../components/Magnetic';
import FloatingButton from '../components/FloatingButton';
import { motion } from 'framer-motion';
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
    return (
        <SectionWrapper id="contact">
            <div style={{ textAlign: 'center', maxWidth: '600px' }}>
                <h2 style={{ marginBottom: '2rem', color: 'var(--text-primary)' }}>Let's Connect</h2>
                <p style={{ marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                    I'm always open to discussing mechanical design, engineering challenges, or creative collaborations.
                </p>

                <div style={{ marginBottom: '3rem' }}>
                    <a
                        href="mailto:amrrrrblacked@gmail.com"
                        style={{
                            fontSize: '1.1rem',
                            fontWeight: '400',
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontFamily: 'var(--font-mono)',
                            letterSpacing: '1px',
                            display: 'inline-block',
                            position: 'relative',
                            padding: '0.5rem 1rem',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '4px',
                            background: 'rgba(255,255,255,0.02)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.color = 'var(--accent-primary)';
                            e.target.style.borderColor = 'var(--accent-primary)';
                            e.target.style.background = 'rgba(56, 189, 248, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = 'var(--text-secondary)';
                            e.target.style.borderColor = 'var(--glass-border)';
                            e.target.style.background = 'rgba(255,255,255,0.02)';
                        }}
                    >
                        amrrrrblacked@gmail.com
                    </a>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        Open for Opportunities
                    </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
                    <Magnetic strength={0.3}>
                        <a href="https://www.instagram.com/amir.blacked?igsh=MW1qNTd3ZDB6cm00Mg==" target="_blank" rel="noopener noreferrer">
                            <motion.div
                                whileHover={{ scale: 1.1, color: '#E1306C' }}
                                whileTap={{ scale: 0.95 }}
                                style={{ fontSize: '2rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                            >
                                <FaInstagram />
                            </motion.div>
                        </a>
                    </Magnetic>

                    <Magnetic strength={0.3}>
                        <a href="https://x.com/Amireeeii" target="_blank" rel="noopener noreferrer">
                            <motion.div
                                whileHover={{ scale: 1.1, color: 'var(--accent-primary)' }}
                                whileTap={{ scale: 0.95 }}
                                style={{ fontSize: '2rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                            >
                                <FaXTwitter />
                            </motion.div>
                        </a>
                    </Magnetic>
                </div>

                <GlassCard className="contact-footer" hoverEffect={false}>
                    <div style={{ padding: '1rem', marginTop: '4rem', opacity: 0.6 }}>
                        <p>© {new Date().getFullYear()} Amir VK. All rights reserved.</p>
                    </div>
                </GlassCard>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
