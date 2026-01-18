import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hoverEffect = true }) => {
    return (
        <motion.div
            className={`glass-card ${className}`}
            whileHover={hoverEffect ? {
                y: -4, // Subtle lift
                scale: 1.01, // Micro-scale
                borderColor: "rgba(56, 189, 248, 0.4)", // Sharpen border
                boxShadow: "0 10px 30px -10px rgba(56, 189, 248, 0.2)" // Controlled glow
            } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
