export const animateContactForm = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.5 } },
};

export const animateContactChild = {
  initial: { y: -600, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 0.2 },
  },
  exit: { x: -1000, transition: { duration: 1 } },
};

export const animateThankYouForm = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
};

export const animateThankYouChild = {
  initial: { y: 1000, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 0.2 },
  },
  exit: { y: 1000, transition: { duration: 1 } },
};
