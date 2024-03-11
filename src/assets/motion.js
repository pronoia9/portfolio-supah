export const containerMotion = {
  initial: 'hidden',
  animate: 'show',
  variants: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delay: 0, delayChildren: 0.5, staggerChildren: 2 },
    },
  },
};

export const sectionMotion = (transition) => ({
  variants: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { type: 'tween', duration: 2, ease: 'easeInOut', ...transition },
    },
  },
});

export const drawMotion = {
  variants: {
    hidden: { pathLength: 0, opacity: 0 },
    show: {
      pathLength: 1,
      opacity: 1,
      transition: {
        // pathLength: { delay: 0, type: 'spring', duration: 1.3, bounce: 0 },
        // opacity: { delay: 0, duration: 1.3 },
        delayChildren: 0.5,
        staggerChildren: 0.15,
      },
    },
  },
};

export const pathMotion = {
  variants: {
    hidden: { pathLength: 0 },
    show: {
      pathLength: 1,
      transition: {
        type: 'tween',
        duration: 1.3,
        ease: 'easeOut',
      },
    },
  },
};
