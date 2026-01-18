import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';
import { motion } from 'framer-motion';
import React from 'react';

const skillSystems = [
    {
        system: "Design & Analysis",
        description: "Modeling physical reality with digital precision.",
        skills: ["SolidWorks", "AutoCAD", "ANSYS", "GD&T", "Finite Element Analysis (FEA)"]
    },
    {
        system: "Thermodynamics & Fluid",
        description: "Managing energy transfer and fluid dynamics.",
        skills: ["CFD Simulations", "Heat Transfer", "HVAC Design", "Energy Systems", "Matlab"]
    },
    {
        system: "Manufacturing & Proto",
        description: "Translating designs into physical components.",
        skills: ["3D Printing", "CNC Machining", "DfM/DfA", "Material Selection", "Rapid Prototyping"]
    }
];

const SkillCard = ({ system }) => {
    const [isHovering, setIsHovering] = React.useState(false);

    return (
        <GlassCard className="skill-system-card">
            <div
                style={{ padding: '2rem', height: '100%' }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <motion.h3
                    animate={isHovering ? { x: 5 } : { x: 0 }}
                    style={{
                        fontSize: '1.2rem',
                        marginBottom: '0.5rem',
                        color: 'var(--accent-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <span style={{ width: '8px', height: '8px', background: 'var(--accent-primary)', borderRadius: '50%' }} />
                    {system.system}
                </motion.h3>
                <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-tertiary)',
                    marginBottom: '1.5rem',
                    minHeight: '40px'
                }}>
                    {system.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {system.skills.map((skill, i) => (
                        <span
                            key={i}
                            style={{
                                fontSize: '0.85rem',
                                padding: '0.3rem 0.8rem',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '4px',
                                color: 'var(--text-secondary)',
                                background: 'rgba(255,255,255,0.02)',
                                fontFamily: 'var(--font-mono)'
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </GlassCard>
    );
};

const Skills = () => {
    return (
        <SectionWrapper id="skills">
            <div style={{ maxWidth: '1000px', width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '4rem' }}
                >
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Engineering Capability</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '500px' }}>
                        My technical skillset is organized into core engineering systems, bridging the gap between theoretical analysis and practical manufacturing.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {skillSystems.map((system, index) => (
                        <SkillCard key={index} system={system} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Skills;
