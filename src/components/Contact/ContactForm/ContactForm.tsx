import React from 'react';
import './ContactForm.scss';
import '../../Navigation/Navigation.scss';
import { AnimatePresence, motion } from 'framer-motion';

interface IContactFormProps {
  toggleContact: () => void;
  contactIsActive: boolean;
}

export const ContactForm = (props: IContactFormProps) => {
  const { toggleContact } = props;

  const contactHamburger = () => {
    return (
      <div onClick={toggleContact} className={'icon nav-icon-5 open'}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  };

  return (
    <div className='Form'>
      <motion.div
        initial={{ y: -600, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='Form-about'
      >
        <div className='title'>About</div>
        <div className='description'>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 600, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='Form-contact'
      >
        <div className='title'>Contact</div>
        {contactHamburger()}
        <form className='content'>
          <h2>Get in touch!</h2>
          <label htmlFor='fname'>Name:</label>
          <input type='text' className='fields fname' name='fname' required />
          <label htmlFor='email'>E-mail:</label>
          <input type='text' className='fields email' name='email' required />
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
    </div>
  );
};

/* const FormVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 1,
        delay: 0.5,
      },
    },
  },
  out: {
    opacity: 0,
    transition: {
      opacity: {
        delay: 1,
        duration: 2,
      },
    },
  },
};

const AboutVariants = {
  initial: {
    y: -600,
    opacity: 0,
  },
  in: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
  out: {
    y: 600,
    opacity: 0,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

const ContactVariants = {
  initial: { y: 600, opacity: 0 },
  in: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
  out: {
    y: -600,
    opacity: 0,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
}; */

{
  /* <AnimatePresence>
<motion.div
  initial='initial'
  animate='in'
  exit='out'
  variants={FormVariants}
  className='Form'
>
  <motion.div
    initial='initial'
    animate='in'
    exit='out'
    variants={AboutVariants}
    className='Form-about'
  >
    <div className='title'>About</div>
    <div className='description'>
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo.
    </div>
  </motion.div>
  <motion.div
    initial='initial'
    animate='in'
    exit='out'
    variants={ContactVariants}
    className='Form-contact'
  >
    <div className='title'>Contact</div>
    {contactHamburger()}
    <form className='content'>
      <h2>Get in touch!</h2>
      <label htmlFor='fname'>Name:</label>
      <input type='text' className='fields fname' name='fname' required />
      <label htmlFor='email'>E-mail:</label>
      <input type='text' className='fields email' name='email' required />
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
</AnimatePresence> */
}
