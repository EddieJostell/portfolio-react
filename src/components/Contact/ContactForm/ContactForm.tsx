import React, { useState } from 'react';
import './ContactForm.scss';
import '../../Navigation/Navigation.scss';
import { AnimatePresence, motion } from 'framer-motion';

interface IContactFormProps {
  toggleContact: () => void;
  contactIsActive: boolean;
}

export const ContactForm = (props: IContactFormProps) => {
  const { toggleContact } = props;

  const [isVisible, setVisible] = useState(false);

  const handleStuff = () => {
    setVisible(!isVisible);
    setTimeout(() => {
      toggleContact();
    }, 500);
  };

  const contactHamburger = () => {
    return (
      <div onClick={handleStuff} className={'icon nav-icon-5 open'}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  };

  return (
    <AnimatePresence>
      {!isVisible && (
        <motion.div
          key='form-parent'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.3 } }}
          className='Form'
        >
          {/*   <motion.div
            key='about-child'
            initial={{ y: 600, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 1, delay: 0.2 },
            }}
            exit={{ y: 1000, transition: { duration: 1 } }}
            className='Form-about'
          >
            <div className='title'>About</div>
            <div className='description'>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </div>
          </motion.div> */}
          <motion.div
            key='contact-child'
            initial={{ y: -600, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 1, delay: 0.2 },
            }}
            exit={{ y: -1000, transition: { duration: 1 } }}
            className='Form-contact'
          >
            <div className='title'>Contact</div>
            {contactHamburger()}
            <form className='content'>
              <h2>Get in touch!</h2>
              <label htmlFor='fname'>Name:</label>
              <input
                type='text'
                className='fields fname'
                name='fname'
                required
              />
              <label htmlFor='email'>E-mail:</label>
              <input
                type='text'
                className='fields email'
                name='email'
                required
              />
              <label htmlFor='message'>Message:</label>
              <textarea
                className='fields message'
                name='message'
                required
                rows={5}
              />
              <div>
                <input className='btn' type='submit' value='Send Message' />
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
