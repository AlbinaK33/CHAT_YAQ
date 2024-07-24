import { AnimatePresence, motion } from "framer-motion";

export const animationbuttonComponent = (
    key1: string,
    id: string,
    onClick: (event: React.MouseEvent<HTMLElement>) => void,
    text: string | undefined, language: string
  ) => {
    return (
      <AnimatePresence mode="popLayout">
        <motion.button
          key={language + key1}
          id={id}
          initial={{ opacity: 0 }}
          onClick={onClick}
          animate={{
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          exit={{
            opacity: 0,
          }}
        >
          {text}
        </motion.button>
      </AnimatePresence>
    );
  };
  