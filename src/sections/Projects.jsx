import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Autonomous Robotic Arm",
        problem: "Simulating complex pick-and-place operations with high precision.",
        approach: "Designed 4-DOF mechanics in SolidWorks; implemented inverse kinematics in Arduino.",
        result: "Achieved 95% placement accuracy in simulation environment.",
        tools: ["SolidWorks", "Arduino", "Kinematics"]
    },
    {
        title: "Eco-HVAC System",
        problem: "Reducing energy consumption in large-scale cooling systems.",
        approach: "modeled thermodynamic cycles utilizing renewable thermal exchange.",
        result: "Theoretical efficiency increase of 15% over standard cycles.",
        tools: ["Thermodynamics", "AutoCAD", "Fluid Dynamics"]
    },
    {
        title: "Automated Sorting Conveyor",
        problem: "Inefficient manual sorting in small manufacturing units.",
        approach: "Prototyped a PLC-driven belt system with sensor-based object detection.",
        result: "Reduced sorting latency by 40% in prototype trials.",
        tools: ["PLC", "Mechatronics", "Automation"]
    }
];

const ProjectCard = ({ project }) => {
    const [isHovering, setIsHovering] = React.useState(false);

    return (
        <GlassCard className="project-card">
            <div
                style={{
                    padding: '2.5rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <motion.h3
                    animate={isHovering ? { x: 5, color: 'var(--text-primary)' } : { x: 0, color: 'var(--accent-primary)' }}
                    style={{ fontSize: '1.4rem', color: 'var(--accent-primary)' }}
                >
                    {project.title}
                </motion.h3>

                <div>
                    <h4 style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>Problem</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{project.problem}</p>
                </div>

                <div>
                    <h4 style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>Approach</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{project.approach}</p>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {project.tools.map((tool, i) => (
                            <span
                                key={i}
                                style={{
                                    fontSize: '0.75rem',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '4px',
                                    background: 'rgba(56, 189, 248, 0.05)',
                                    color: 'var(--accent-primary)',
                                    fontFamily: 'var(--font-mono)'
                                }}
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};

const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <div style={{ maxWidth: '1200px', width: '100%' }}>
                <h2 style={{ marginBottom: '3rem', color: 'var(--text-primary)' }}>Applied Engineering</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Projects;
