import { motion } from 'framer-motion';
import React from 'react';
import { ContactSlim } from '../Contact/ContactSlim';
import { Container } from '../Container/Container';
import './Footer.scss';

export const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const topMotion = {
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

  return (
    <div className='Footer'>
      <Container>
        <div className='Footer-wrapper'>
          <motion.div
            initial='rest'
            animate='rest'
            className='Footer-wrapper-name'
            whileHover='hover'
            onClick={scrollTop}
          >
            E
            <motion.div className='scroll-to-top' variants={topMotion}>
              Top
            </motion.div>
          </motion.div>
          <ContactSlim icons={false} />
          <div className='name'>Edward 'Eddie' Jostell</div>
        </div>
      </Container>
    </div>
  );
};
