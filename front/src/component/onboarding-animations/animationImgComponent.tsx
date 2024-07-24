import { AnimatePresence, motion, useTransform  } from "framer-motion";

export const animationImgComponent = (
    className: string,
    style: object,
    src: string | undefined,
    alt: string,
    language: string,
  ) => {
    return (
      <AnimatePresence mode="wait">
        <motion.img
          key={language + className}
          style={style}
          src={src}
          alt={alt}
          className={className}
          initial={{ x:0 }}
          animate={{
            x: 30, 
          }}
          transition={{type: "inertia", duration: 2}}
          exit={{ x:0 }}
        />
      </AnimatePresence>
    );
  }
