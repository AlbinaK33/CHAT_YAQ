import { AnimatePresence, motion } from "framer-motion";

export const animationAncherComponent = (
    key1: string,
    link: string,
    text: string | undefined,
    language: string
  ) => {
    return (
      <AnimatePresence mode="popLayout">
        <motion.a
          key={language + key1}
          initial={{ opacity: 0, width: "130px" }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: "linear" },
            width: "130px",
          }}
          exit={{ opacity: 0, width: "130px" }}
          href={link}
        >
          {text}
        </motion.a>
      </AnimatePresence>
    );
  };