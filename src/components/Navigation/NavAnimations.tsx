//Navigation.tsx
export const NavNameAnimation = {
  initial: { x: -300, opacity: 0, scale: 0 },
  animate: { x: 0, opacity: 1, scale: 1 },
  transition: { duration: 1.5, delay: 0.1 },
};

export const NavLinksAnimation = {
  initial: { x: 1000, opacity: 0, scale: 0 },
  animate: { x: 0, opacity: 1, scale: 1 },
  transition: { duration: 1.5, delay: 0.1 },
};

//Navlist.tsx

export const List = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
      delay: 0.45,
      duration: 0.5,
    },
  },

  hidden: {
    opacity: 0,
    x: -300,
    transition: {
      when: 'afterChildren',
      delay: 0.6,
      duration: 1,
    },
  },
};

export const Items = {
  visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.3 } },
  hidden: { opacity: 0, x: -300, transition: { duration: 0.3 } },
};
