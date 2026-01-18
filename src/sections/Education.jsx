import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <SectionWrapper id="education">
            <div style={{ maxWidth: '800px', width: '100%' }}>
                <h2 style={{ marginBottom: '3rem', color: 'var(--accent-primary)', textAlign: 'center' }}>The Foundation</h2>

                <div className="education-timeline" style={{ borderLeft: '2px solid var(--glass-border)', paddingLeft: '2rem', marginLeft: '1rem' }}>
                    {/* Timeline Node */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            left: '-9px',
                            top: '0',
                            width: '16px',
                            height: '16px',
                            background: 'var(--accent-primary)',
                            borderRadius: '50%',
                            boxShadow: '0 0 10px var(--accent-primary)'
                        }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                    />

                    <GlassCard className="edu-card">
                        <div style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>B.Tech Mechanical Engineering</h3>
                            <p style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontWeight: 500 }}>
                                2025 - 2029 | Government College of Engineering, Kannur
                            </p>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Currently pursuing. Focused on core mechanical principles, design methodologies, and advanced manufacturing systems.
                            </p>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Education;
