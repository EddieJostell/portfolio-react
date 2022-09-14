import React, { useState, useRef } from 'react';
import './ContactForm.scss';
import '../../Navigation/Navigation.scss';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { serviceID } from './helpers/serviceID';
import { templateID } from './helpers/templateID';
import { userID } from './helpers/userID';
import { useForm, useFormState } from 'react-hook-form';
import { ThankYouPage } from './parts/ThankYouPage';
import {
  animateContactChild,
  animateContactForm,
} from './helpers/ContactAnimations';
import classNames from 'classnames';
import {
  inputEmailRules,
  inputNameRules,
  textAreaMessageRules,
} from './helpers/HookFormValidationRules';
import { ContactFormSubmitButton } from './parts/ContactFormSubmitButton';

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

export const ContactForm = (props: IContactFormProps) => {
  const { toggleContact } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const form = useRef<HTMLFormElement>(null); //EmailJS useRef

  const [isVisible, setVisible] = useState(false);

  const [contactState, setContactState] = useState<IMailState>({
    showFail: undefined,
    showThanks: undefined,
    isVisible: undefined,
    isLoading: undefined,
  });

  const onDataComplete = (data: any, e: any) => {
    e.preventDefault();
    if (data) {
      setContactState({ ...contactState, isLoading: true });
      setTimeout(() => {
        if (1 + 1 === 2) {
          completeContactForm();
        } else {
          retryContactForm();
        }
      }, 2000);
      setContactState({ ...contactState, isLoading: false });
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
    setContactState({
      ...contactState,
      isLoading: true,
      //isVisible: !formState.isVisible,
    });
    setVisible(!isVisible);
    setTimeout(() => {
      setContactState({
        ...contactState,
        showThanks: !contactState.showThanks,
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
    setContactState({ ...contactState, isLoading: true });
    setTimeout(() => {
      setContactState({
        ...contactState,
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

  const showLabel = (
    htmlFor: string,
    labelText: string,
    errorMessage?: string
  ) => {
    return (
      <label htmlFor={htmlFor} className='form-label'>
        {labelText}
        {errorMessage && <span className='error-label'>{errorMessage}</span>}
      </label>
    );
  };

  const errorBtnClick = () => {
    setContactState({
      ...contactState,
      showFail: !contactState.showFail,
    });
  };

  const fieldRules = classNames('fields', {
    disabled: contactState.showFail,
  });

  return (
    <AnimatePresence>
      {!isVisible && (
        <motion.div key='form-parent' {...animateContactForm} className='Form'>
          <motion.div
            key='contact-child'
            {...animateContactChild}
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
              {showLabel('name', 'Name:', errors.name?.message)}
              <input
                disabled={contactState.showFail}
                type='text'
                className={fieldRules}
                {...register('name', {
                  ...inputNameRules,
                })}
              />
              {showLabel('email', 'E-mail:', errors.email?.message)}
              <input
                disabled={contactState.showFail}
                type='text'
                className={fieldRules}
                {...register('email', { ...inputEmailRules })}
              />
              {showLabel('message', 'Message:', errors.message?.message)}
              <textarea
                {...register('message', {
                  ...textAreaMessageRules,
                })}
                disabled={contactState.showFail}
                className={fieldRules}
                rows={5}
              />
              <ContactFormSubmitButton
                errorBtn={errorBtnClick}
                showFail={contactState.showFail}
                isLoading={contactState.isLoading}
              />
            </form>
          </motion.div>
        </motion.div>
      )}
      {contactState.showThanks && <ThankYouPage />}
    </AnimatePresence>
  );
};
