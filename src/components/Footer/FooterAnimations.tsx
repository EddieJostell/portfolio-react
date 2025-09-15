import { animate, easeIn, easeOut } from 'framer-motion';

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
  initial: 'rest',
  variants: {
    rest: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  },
};
