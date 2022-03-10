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

interface IVisibleState {
  showForm: boolean;
  showThanks: boolean;
}

export const ContactForm = (props: IContactFormProps) => {
  const { toggleContact } = props;

  const form = useRef<HTMLFormElement>(null);

  const [isVisible, setVisible] = useState(false);

  const [showThanks, setShowThanks] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [InputValue, setInputValue] = useState<IFormState>({
    nameInput: '',
    emailInput: '',
    messageInput: '',
  });
  const [isValidated, setIsValidated] = useState<boolean | undefined>(
    undefined
  );

  const completeContactForm = () => {
    setVisible(!isVisible);
    setTimeout(() => {
      setShowThanks(true);
    }, 2000);
    setTimeout(() => {
      toggleContact();
    }, 6000);
  };

  const closeContactForm = () => {
    setVisible(!isVisible);
    setTimeout(() => {
      toggleContact();
    }, 2000);
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
      InputValue.messageInput !== '' &&
      InputValue.emailInput.includes('@')
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
      completeContactForm();
    }
  };

  const mockSend = (e: any) => {
    e.preventDefault();

    if (
      InputValue.nameInput !== '' &&
      InputValue.emailInput !== '' &&
      InputValue.messageInput !== '' &&
      InputValue.emailInput.includes('@')
    ) {
      setIsLoading(true);
      setTimeout(() => {
        if (1 + 1 === 2) {
          success();
          completeContactForm();
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
      InputValue.messageInput !== '' &&
      InputValue.emailInput.includes('@')
    ) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  };

  const contactHamburger = () => {
    return (
      <div onClick={closeContactForm} className={'icon nav-icon-5 open'}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  };

  const showLabel = (
    htmlFor: string,
    inputValue: string,
    labelText: string,
    errorLabelText: string,
    errorLabelText2?: string
  ) => {
    if (
      isValidated === false &&
      inputValue !== '' &&
      !inputValue.includes('@')
    ) {
      return (
        <label htmlFor={htmlFor} className='form-label'>
          {labelText}
          <span className='error-label'>{errorLabelText2}</span>
        </label>
      );
    } else {
      return (
        <label htmlFor={htmlFor} className='form-label'>
          {labelText}
          {isValidated === false && inputValue === '' && (
            <span className='error-label'>{errorLabelText}</span>
          )}
        </label>
      );
    }
  };

  const showInput = (
    className: string,
    name: string,
    value: string,
    changeEvent: (e: any) => void
  ) => {
    if (name === 'message') {
      return (
        <textarea
          className={className}
          name={name}
          rows={5}
          value={value}
          onChange={changeEvent}
        />
      );
    } else {
      return (
        <input
          type='text'
          className={className}
          name={name}
          value={value}
          onChange={changeEvent}
        />
      );
    }
  };

  return (
    <AnimatePresence>
      {!isVisible && (
        <motion.div
          key='form-parent'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.5 } }}
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
            exit={{ x: -1000, transition: { duration: 1 } }}
            className='Form-contact'
          >
            <div className='title'>Contact</div>
            {contactHamburger()}
            <form ref={form} className='content' onSubmit={mockSend}>
              <h2>Get in touch!</h2>
              {showLabel(
                'name',
                InputValue.nameInput,
                'Name:',
                'Oh, I think you might have forgotten to state your name?'
              )}
              {showInput('fields name', 'name', InputValue.nameInput, (e) =>
                setInputValue({ ...InputValue, nameInput: e.target.value })
              )}
              {showLabel(
                'email',
                InputValue.emailInput,
                'E-mail:',
                "Oh noes, if you don't type a email I will not be able to answer you!",
                ' The email must have a @ sign!, please try again!'
              )}
              {showInput('fields email', 'email', InputValue.emailInput, (e) =>
                setInputValue({ ...InputValue, emailInput: e.target.value })
              )}
              {showLabel(
                'message',
                InputValue.messageInput,
                'Message:',
                "Sorry, I can't read your mind..."
              )}
              {showInput(
                'fields message',
                'message',
                InputValue.messageInput,
                (e) =>
                  setInputValue({
                    ...InputValue,
                    messageInput: e.target.value,
                  })
              )}
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
      {showThanks && (
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
      )}
    </AnimatePresence>
  );
};
