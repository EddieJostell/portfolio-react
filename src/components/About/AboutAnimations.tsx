export const TitleAnimation = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
  variants: {
    visible: {
      opacity: 0.07,
    },
    hidden: { opacity: 0 },
  },
  transition: {
    duration: 5,
    delay: 0.3,
  },
};

export const BoxContainerAnimation = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
  variants: {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { y: 200, opacity: 0 },
  },
  transition: {
    duration: 2,
    delay: 0.1,
  },
};

export const PhotoLayerAnimation = {
  whileHover: {
    opacity: 0.3,
    backgroundColor: '#d90429',
    transition: { duration: 0, delay: 0 },
  },
};
