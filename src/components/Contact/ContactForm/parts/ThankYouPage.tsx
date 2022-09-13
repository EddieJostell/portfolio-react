import { motion } from 'framer-motion';
import React from 'react';
import {
  animateThankYouChild,
  animateThankYouForm,
} from '../helpers/ContactAnimations';

export const ThankYouPage = () => {
  return (
    <motion.div key='form-parent' {...animateThankYouForm} className='Form'>
      <motion.div
        key='thanks-child'
        {...animateThankYouChild}
        className='Form-thanks'
      >
        <div className='title'>Thanks</div>
        <div className='description'>
          <h1>Message has been sent!</h1>
          Thank you for reaching out! I will get back at you as soon as
          possible!
        </div>
      </motion.div>
    </motion.div>
  );
};
