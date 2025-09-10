import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { ContactSlim } from '../Contact/ContactSlim';
import { Container } from '../Container/Container';
import './Footer.scss';
import {
  FooterWrapperNameAnimation,
  ScrollTopAnimation,
} from './FooterAnimations';
import { scrollTop, useMediaQuery } from '../../utils/hooks';

export const Footer: FC<{}> = () => {
  const mobileMaxWidth = useMediaQuery('(max-width: 767px)');

  return (
    <div className='Footer'>
      <Container>
        <div className='Footer-wrapper'>
          <motion.div
            key='Footer-wrapper-name'
            {...FooterWrapperNameAnimation}
            className='Footer-wrapper-name'
            onClick={scrollTop}
          >
            E
            {!mobileMaxWidth && (
              <motion.div
                key='scroll-to-top'
                className='scroll-to-top'
                variants={ScrollTopAnimation}
              >
                Top
              </motion.div>
            )}
          </motion.div>
          {mobileMaxWidth ? (
            <ContactSlim icons={false} data-testid='mobile-contact' />
          ) : (
            <ContactSlim icons={true} data-testid='desktop-contact' />
          )}
          <div className='creator'>Built by Edward 'Eddie' Jostell</div>
        </div>
      </Container>
    </div>
  );
};
