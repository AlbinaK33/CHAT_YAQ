import { AnimatePresence, motion, useAnimation } from "framer-motion";

export const animationPComponent = (key1: string, text: string | undefined, language: string) => {
  
    return (
      <AnimatePresence mode="popLayout">
        <motion.p
          key={language + key1}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.2, ease: "linear" },
          }}
          exit={{ opacity: 0}}
        >
          {text}
        </motion.p>
      </AnimatePresence>
    );
  };