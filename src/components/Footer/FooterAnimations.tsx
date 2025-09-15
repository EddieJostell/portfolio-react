import { easeIn, easeOut } from 'framer-motion';

export const parentMotionProps = {
  variants: {
    rest: {},
    hover: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  initial: 'rest',
  whileHover: 'hover',
  animate: 'rest',
};

export const childMotionProps = {
  variants: {
    hidden: {
      opacity: 0,
      x: -15,
      transition: { duration: 0.2, ease: easeOut },
    },
    hover: {
      opacity: 1,
      x: 8,
      transition: { duration: 0.4, ease: easeIn },
    },
  },
  initial: 'hidden',
  animate: 'hidden',
};
