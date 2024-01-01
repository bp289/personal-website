import { motion } from "framer-motion";

export const TransitionSide = ({ children, delay, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ x: 40, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          delay,
          duration: 0.5,
        },
      }}>
      {children}
    </motion.div>
  );
};

export const TransitionUp = ({ children, delay, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 40, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay,
          duration: 0.5,
        },
      }}>
      {children}
    </motion.div>
  );
};

export const TransitionDown = ({ children, delay, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ y: -40, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay,
        },
      }}>
      {children}
    </motion.div>
  );
};
