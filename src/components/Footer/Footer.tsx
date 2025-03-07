import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { isMobileMax } from '../../utils/userAgent';
import { ContactSlim } from '../Contact/ContactSlim';
import { Container } from '../Container/Container';
import './Footer.scss';
import {
  FooterWrapperNameAnimation,
  ScrollTopAnimation,
} from './FooterAnimations';

export const Footer: FC<{}> = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='Footer'>
      <Container>
        <div className='Footer-wrapper'>
          {isMobileMax && (
            <motion.div
              key='Footer-wrapper-name'
              {...FooterWrapperNameAnimation}
              className='Footer-wrapper-name'
              onClick={scrollTop}
            >
              E
              <motion.div
                key='scroll-to-top'
                className='scroll-to-top'
                variants={ScrollTopAnimation}
              >
                Top
              </motion.div>
            </motion.div>
          )}
          {isMobileMax ? (
            <ContactSlim icons={false} />
          ) : (
            <ContactSlim icons={true} />
          )}
          <div className='creator'>Built by Edward 'Eddie' Jostell</div>
        </div>
      </Container>
    </div>
  );
};
