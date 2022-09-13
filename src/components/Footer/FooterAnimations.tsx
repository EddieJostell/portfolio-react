export const FooterWrapperNameAnimation = {
  initial: 'rest',
  animate: 'rest',
  whileHover: 'hover',
};

export const ScrollTopAnimation = {
  rest: { x: -15, opacity: 0, ease: 'easeOut', duration: 0.2, type: 'tween' },
  hover: {
    x: 8,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
    },
  },
};
