import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';
import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
    // Shared state for coupled motion
    const [isHovering, setIsHovering] = React.useState(false);

    return (
        <SectionWrapper id="about">
            <div style={{ maxWidth: '800px', width: '100%' }}>
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    // Coupled Motion: Reacts to content hover
                    animate={isHovering ? { x: 10, color: 'var(--accent-primary)' } : { x: 0, color: 'var(--accent-primary)' }}
                    style={{ marginBottom: '2rem', color: 'var(--accent-primary)', display: 'inline-block' }}
                >
                    The Mindset
                </motion.h2>

                <GlassCard className="about-content">
                    <div
                        style={{ padding: '2.5rem' }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        onTouchStart={() => setIsHovering(true)} // Mobile touch support
                        onTouchEnd={() => setIsHovering(false)}
                    >
                        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', lineHeight: 1.8 }}>
                            Engineering is not just about building; it's about <strong>optimizating reality</strong>.
                        </p>
                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            At Government College of Engineering, Kannur, I don't just study mechanics—I deconstruct them. My approach combines rigorous thermodynamic analysis with modern manufacturing protocols (DfM) to create systems that are efficient, scalable, and elegant.
                        </p>
                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                            I seek challenges where precision matters.
                        </p>
                    </div>
                </GlassCard>
            </div>
        </SectionWrapper>
    );
};

export default About;
