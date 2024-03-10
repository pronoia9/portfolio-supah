export const containerMotion = {
  initial: 'hidden',
  animate: 'show',
  variants: {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.75,
      },
    },
  },
};

export const sectionMotion = {
  variants: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  transition: { type: 'tween', duration: 2, ease: 'easeInOut' },
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
