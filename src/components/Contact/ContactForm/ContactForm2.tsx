import React, { useState, useRef } from 'react';
import './ContactForm.scss';
import '../../Navigation/Navigation.scss';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { serviceID } from './helpers/serviceID';
import { templateID } from './helpers/templateID';
import { userID } from './helpers/userID';
import { useForm } from 'react-hook-form';
import { ThankYouPage } from './parts/ThankYouPage';

interface IContactFormProps {
  toggleContact: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface IMailState {
  showFail: boolean | undefined;
  showThanks: boolean | undefined;
  isVisible: boolean | undefined;
  isLoading: boolean | undefined;
}

export const ContactForm2 = (props: IContactFormProps) => {
  const { toggleContact } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
    /* defaultValues: {
      name: 'Eduardo',
      email: 'eddo@gmail.com',
      message: 'this is a test message',
    }, */
    reValidateMode: 'onChange',
  });

  const form = useRef<HTMLFormElement>(null); //EmailJS useRef

  const [isVisible, setVisible] = useState(false);

  const [formState, setFormState] = useState<IMailState>({
    showFail: undefined,
    showThanks: undefined,
    isVisible: undefined,
    isLoading: undefined,
  });

  const onDataComplete = (data: any, e: any) => {
    e.preventDefault();
    if (data) {
      setFormState({ ...formState, isLoading: true });
      setTimeout(() => {
        if (1 + 1 === 2) {
          completeContactForm();
        } else {
          retryContactForm();
        }
      }, 2000);
      setFormState({ ...formState, isLoading: false });
      //e.target.reset();
    }

    // REAL EMAIL JS CODE
    /*  if (data) {
      setFormState({ ...formState, isLoading: true });
      emailjs.sendForm(serviceID(), templateID(), form.current!, userID()).then(
        (result) => {
          console.log('SUCCESS!', result.status, result.text);
          completeContactForm();
        },
        (error) => {
          console.log('FAILED...', error.text);
          retryContactForm();
        }
      );
      e.target.reset();
    } */
  };

  const completeContactForm = () => {
    setFormState({
      ...formState,
      isLoading: true,
      //isVisible: !formState.isVisible,
    });
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
    //setFormState({ ...formState, isVisible: !formState.isVisible });
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

  const contactHamburger = () => {
    return (
      <div onClick={closeContactForm} className={'icon nav-icon-5 open'}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  };

  const showLabel = (htmlFor: string, labelText: string) => {
    if (labelText === 'Message:') {
      return (
        <label htmlFor={htmlFor} className='form-label'>
          {labelText}
          <span className='error-label'>{errors.message?.message}</span>
        </label>
      );
    }
    if (labelText === 'E-mail:') {
      return (
        <label htmlFor={htmlFor} className='form-label'>
          {labelText}
          <span className='error-label'>{errors.email?.message}</span>
        </label>
      );
    }
    if (labelText === 'Name:') {
      return (
        <label htmlFor={htmlFor} className='form-label'>
          {labelText}
          <span className='error-label'>{errors.name?.message}</span>
        </label>
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
            <form
              ref={form}
              className='content'
              onSubmit={handleSubmit(onDataComplete)}
            >
              <h1>Get in touch!</h1>
              {showLabel('name', 'Name:')}
              <input
                disabled={formState.showFail}
                type='text'
                className={
                  !formState.showFail
                    ? 'fields name'
                    : // eslint-disable-next-line no-useless-concat
                      'fields name ' + 'disabled'
                }
                {...register('name', {
                  required:
                    'Oh, I think you might have forgotten to state your name?',
                })}
              />
              {showLabel('email', 'E-mail:')}
              <input
                disabled={formState.showFail}
                type='text'
                className={
                  !formState.showFail
                    ? 'fields email'
                    : // eslint-disable-next-line no-useless-concat
                      'fields email ' + 'disabled'
                }
                {...register('email', {
                  required:
                    "Oh noes, if you don't type a email I will not be able to answer you!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message:
                      'The email address you have provided seems to be invalid, please try again!',
                  },
                })}
              />
              {showLabel('message', 'Message:')}
              <textarea
                {...register('message', {
                  required: 'Oh noes, you forgot to type a message!',
                  minLength: { value: 5, message: 'Min length is 5' },
                })}
                disabled={formState.showFail}
                className={
                  !formState.showFail
                    ? 'fields message'
                    : // eslint-disable-next-line no-useless-concat
                      'fields message ' + 'disabled'
                }
                rows={5}
              />

              {!formState.showFail ? (
                <button
                  disabled={formState.isLoading}
                  className={formState.isLoading ? 'btn btn-disabled' : 'btn'}
                  type='submit'
                  value='Submit'
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
      {formState.showThanks && <ThankYouPage />}
    </AnimatePresence>
  );
};
