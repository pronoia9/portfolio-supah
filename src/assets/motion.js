import { easeIn } from 'framer-motion';

export const containerMotion = {
  initial: 'hidden',
  variants: {
    hidden: {},
    show: {
      transition: {
        delay: 0.5,
        // delayChildren: 3, // needed for intro
        staggerChildren: 2,
      },
    },
  },
  animate: 'show',
};

export const sectionMotion = {
  variants: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  transition: { type: 'tween', duration: 2, ease: 'easeInOut' },
};

export const introMotion = {
  variants: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
};

export const svgMotion = {
  initial: 'hidden',
  animate: 'visible',
};

export const drawMotion = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 1 + i * 0.5, type: 'spring', duration: 1.5, bounce: 0 },
      opacity: { dela: 1 + i * 0.5, duration: 0.01 },
    },
  }),
};
