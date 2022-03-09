import React, { useState, useRef, MutableRefObject } from 'react';
import './ContactForm.scss';
import '../../Navigation/Navigation.scss';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface IContactFormProps {
  toggleContact: () => void;
  contactIsActive: boolean;
}

interface IFormState {
  nameInput: string;
  emailInput: string;
  messageInput: string;
}

export const ContactForm = (props: IContactFormProps) => {
  const { toggleContact } = props;

  const form = useRef<HTMLFormElement>(null);

  const [isVisible, setVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [InputValue, setInputValue] = useState<IFormState>({
    nameInput: '',
    emailInput: '',
    messageInput: '',
  });
  const [isValidated, setIsValidated] = useState<boolean | undefined>(
    undefined
  );

  const handleStuff = () => {
    setVisible(!isVisible);
    setTimeout(() => {
      toggleContact();
    }, 500);
  };

  const success = () => {
    alert('SUCCESS!!');
  };

  const fail = () => {
    alert('FAIL!!');
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (
      InputValue.nameInput !== '' &&
      InputValue.emailInput !== '' &&
      InputValue.messageInput !== ''
    ) {
      emailjs
        .sendForm(
          'service_k0r4epr',
          'template_2za46fj',
          form.current!,
          'Yq114L0OLt2Ou5HK_'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      toggleContact();
    }
  };

  const mockSend = (e: any) => {
    e.preventDefault();

    if (
      InputValue.nameInput !== '' &&
      InputValue.emailInput !== '' &&
      InputValue.messageInput !== ''
    ) {
      setIsLoading(true);
      setTimeout(() => {
        if (1 + 1 === 2) {
          success();
          toggleContact();
        } else {
          setIsLoading(false);
          fail();
        }
      }, 2000);
    } else {
      setIsLoading(false);
      fail();
    }
  };

  const handleValidation = () => {
    if (
      InputValue.nameInput !== '' &&
      InputValue.emailInput !== '' &&
      InputValue.messageInput !== ''
    ) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
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
            <form ref={form} className='content' onSubmit={mockSend}>
              <h2>Get in touch!</h2>
              <label htmlFor='name' className='form-label'>
                Name:{' '}
                {isValidated === false && InputValue.nameInput === '' && (
                  <span className='error-label'>
                    Oh, I think you might have forgotten to state your name?
                  </span>
                )}
              </label>
              <input
                type='text'
                className='fields name'
                name='name'
                value={InputValue.nameInput}
                onChange={(e) =>
                  setInputValue({ ...InputValue, nameInput: e.target.value })
                }
              />

              <label htmlFor='email' className='form-label'>
                E-mail:{' '}
                {isValidated === false && InputValue.emailInput === '' && (
                  <span className='error-label'>
                    Oh noes, if you don't type a email I will not be able to
                    answer you!
                  </span>
                )}
                {isValidated === false &&
                  InputValue.emailInput !== '' &&
                  !InputValue.emailInput.includes('@') && (
                    <span className='error-label'>
                      The email must have a @ sign!, please try again!
                    </span>
                  )}
              </label>
              <input
                type='text'
                className='fields email'
                name='email'
                value={InputValue.emailInput}
                onChange={(e) =>
                  setInputValue({ ...InputValue, emailInput: e.target.value })
                }
              />
              <label htmlFor='message' className='form-label'>
                Message:{' '}
                {isValidated === false && InputValue.messageInput === '' && (
                  <span className='error-label'>
                    Sorry, I can't read your mind...
                  </span>
                )}
              </label>

              <textarea
                className='fields message'
                name='message'
                rows={5}
                value={InputValue.messageInput}
                onChange={(e) =>
                  setInputValue({ ...InputValue, messageInput: e.target.value })
                }
              />

              <button
                disabled={isLoading}
                className={isLoading ? 'btn btn-disabled' : 'btn'}
                type='submit'
                value='Submit'
                onClick={handleValidation}
              >
                {isLoading ? 'Loading...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/*   <motion.div
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
          </motion.div> */
