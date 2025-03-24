import { motion } from "framer-motion";

const GlassCard = ({ 
  children, 
  className = "", 
  hoverEffect = false,
  onClick = null
}) => (
  <motion.div
    className={`bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg ${className}`}
    whileHover={hoverEffect ? { scale: 1.02, y: -5 } : {}}
    transition={{ type: "spring", stiffness: 300 }}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

export default GlassCard;
