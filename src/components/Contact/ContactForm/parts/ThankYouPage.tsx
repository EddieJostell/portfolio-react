import { motion } from 'framer-motion';
import React from 'react';

export const ThankYouPage = () => {
  return (
    <motion.div
      key='form-parent'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.2 } }}
      className='Form'
    >
      <motion.div
        key='thanks-child'
        initial={{ y: 1000, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, delay: 0.2 },
        }}
        exit={{ y: 1000, transition: { duration: 1 } }}
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
