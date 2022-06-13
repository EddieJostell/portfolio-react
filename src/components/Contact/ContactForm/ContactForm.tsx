import React, { useState, useRef } from 'react';
import './ContactForm.scss';
import '../../Navigation/Navigation.scss';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { serviceID } from './helpers/serviceID';
import { templateID } from './helpers/templateID';
import { userID } from './helpers/userID';

interface IContactFormProps {
  toggleContact: () => void;
}

interface IFormState {
  nameInput: string;
  emailInput: string;
  messageInput: string;
}

interface IMailState {
  showFail: boolean | undefined;
  showThanks: boolean | undefined;

  isVisible: boolean | undefined;
  isLoading: boolean | undefined;
}

export const ContactForm = (props: IContactFormProps) => {
  const { toggleContact } = props;

  const form = useRef<HTMLFormElement>(null);

  const [isVisible, setVisible] = useState(false);

  const [formState, setFormState] = useState<IMailState>({
    showFail: undefined,
    showThanks: undefined,
    isVisible: undefined,
    isLoading: undefined,
  });

  const [InputValue, setInputValue] = useState<IFormState>({
    nameInput: '',
    emailInput: '',
    messageInput: '',
  });
  const [isValidated, setIsValidated] = useState<boolean | undefined>(
    undefined
  );

  const completeContactForm = () => {
    setFormState({ ...formState, isLoading: true });
    setVisible(!isVisible);
    setTimeout(() => {
      setFormState({
        ...formState,
        showThanks: !formState.showThanks,
      });
    }, 1000);
    setTimeout(() => {
      toggleContact();
    }, 5000);
  };

  const closeContactForm = () => {
    setVisible(!isVisible);
    setTimeout(() => {
      toggleContact();
    }, 2000);
  };

  const retryContactForm = () => {
    setFormState({ ...formState, isLoading: true });
    setTimeout(() => {
      setFormState({
        ...formState,
        showFail: true,
        isLoading: false,
      });
    }, 2000);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (
      InputValue.nameInput !== '' &&
      InputValue.emailInput !== '' &&
      InputValue.messageInput !== '' &&
      InputValue.emailInput.includes('@')
    ) {
      setFormState({ ...formState, isLoading: true });
      emailjs.sendForm(serviceID(), templateID(), form.current!, userID()).then(
        (result) => {
          console.log(result.text);
          completeContactForm();
        },
        (error) => {
          console.log(error.text);
          retryContactForm();
        }
      );
      e.target.reset();
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
      setFormState({ ...formState, isLoading: true });
      setTimeout(() => {
        if (1 + 1 === 2) {
          completeContactForm();
        } else {
          retryContactForm();
        }
      }, 2000);
    } else {
      setFormState({ ...formState, isLoading: false });
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
          disabled={formState.showFail}
          className={!formState.showFail ? className : className + 'disabled'}
          name={name}
          rows={5}
          value={value}
          onChange={changeEvent}
        />
      );
    } else {
      return (
        <input
          disabled={formState.showFail}
          type='text'
          className={!formState.showFail ? className : className + 'disabled'}
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
              <h1>Get in touch!</h1>
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
                'Oh noes, you forgot to type a message!.'
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
              {!formState.showFail ? (
                <button
                  disabled={formState.isLoading}
                  className={formState.isLoading ? 'btn btn-disabled' : 'btn'}
                  type='submit'
                  value='Submit'
                  onClick={handleValidation}
                >
                  {formState.isLoading ? 'Sending...' : 'Send Message'}
                </button>
              ) : (
                <div className='error-msg'>
                  <div>
                    Something has gone wrong :/, please try to send the message
                    again.
                  </div>
                  <button
                    className={'btn btn-error'}
                    onClick={() =>
                      setFormState({
                        ...formState,
                        showFail: !formState.showFail,
                      })
                    }
                  >
                    {'Try again'}
                  </button>
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
      {formState.showThanks && (
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
