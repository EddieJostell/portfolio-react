import { easeIn, easeOut } from 'framer-motion';

export const parentMotionProps = {
  initial: 'rest',
  animate: 'rest',
  whileHover: 'hover',
  variants: {
    rest: {},
    hover: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
};

export const childMotionProps = {
  variants: {
    rest: {
      opacity: 0,
      x: -12,
      transition: { duration: 0.2, ease: easeIn },
    },
    hover: {
      opacity: 1,
      x: 8,
      transition: { duration: 0.3, ease: easeOut },
    },
  },
};
