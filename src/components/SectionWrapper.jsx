import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = '' }) => {
    return (
        <motion.section
            id={id}
            className={className}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
                padding: '40px 20px', // Further reduced padding
                minHeight: '70vh',   // Compact height for better flow
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
            }}
        >
            {children}
        </motion.section>
    );
};

export default SectionWrapper;
