import React, { useRef, useReducer, useEffect } from 'react';
import './ContactForm.scss';
import emailjs from '@emailjs/browser';
import { serviceID } from './helpers/serviceID';
import { templateID } from './helpers/templateID';
import { userID } from './helpers/userID';
import { useForm } from 'react-hook-form';
import { ThankYouPage } from './parts/ThankYouPage';

import classNames from 'classnames';
import { contactFormRules } from './helpers/HookFormValidationRules';
import { ContactFormSubmitButton } from './parts/ContactFormSubmitButton';
import { FormLabel } from './parts/FormLabel';
import { MenuIconWrapper } from '../../Navigation/StyledNavigationElements';
import { X } from 'react-feather';

interface IContactFormProps {
  toggleContact: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialContactState = {
  showFail: false,
  showThanks: false,
  isLoading: false,
};

function formReducer(state: any, action: any) {
  switch (action.type) {
    case 'SUBMIT':
      return { ...state, isLoading: true, showFail: false };
    case 'SUCCESS':
      return { ...state, isLoading: false, showThanks: true };
    case 'ERROR':
      return { ...state, showFail: true };
    default:
      throw new Error();
  }
}

export const ContactForm = (props: IContactFormProps) => {
  const { toggleContact } = props;

  const [state, dispatch] = useReducer(formReducer, initialContactState);
  const { showFail, showThanks, isLoading } = state;

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const form = useRef<HTMLFormElement>(null); //EmailJS useRef
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  const onDataComplete = (data: any, e: any) => {
    // REAL EMAIL JS CODE
    if (data) {
      dispatch({ type: 'SUBMIT' });
      emailjs.sendForm(serviceID(), templateID(), form.current!, userID()).then(
        (result) => {
          console.log('SUCCESS!', result.status, result.text);
          dispatch({ type: 'SUCCESS' });
        },
        (error) => {
          console.log('FAILED...', error.text);
          dispatch({ type: 'ERROR' });
        },
      );

      /*  setTimeout(() => {
        if (1 + 1 === 3) {
          dispatch({ type: "SUCCESS" });
        } else {
          dispatch({ type: "ERROR" });
        }
      }, 2000); */
    }
  };

  const closeContactForm = () => {
    setTimeout(() => {
      toggleContact();
    }, 300);
  };

  const fieldRules = classNames('fields', {
    disabled: showFail,
  });

  return (
    <div className='Form'>
      {!showThanks ? (
        <div className='Form-contact'>
          <div className='title'>Contact</div>
          <MenuIconWrapper
            onClick={closeContactForm}
            aria-label='Close contact form'
            role='button'
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                closeContactForm();
              }
            }}
          >
            <X size={42} aria-hidden='true' />
          </MenuIconWrapper>

          <form
            ref={form}
            className='content'
            onSubmit={handleSubmit(onDataComplete)}
            aria-label='Contact form'
          >
            <h1>Get in touch!</h1>
            <FormLabel
              htmlFor='name'
              labelText='Name:'
              errorMessage={errors.name?.message}
            />
            <input
              id='name'
              disabled={showFail}
              type='text'
              className={fieldRules}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
              {...register('name', {
                ...contactFormRules.inputNameRules,
              })}
              ref={(e) => {
                register('name').ref(e);
                nameInputRef.current = e;
              }}
            />
            <FormLabel
              htmlFor='email'
              labelText='E-mail:'
              errorMessage={errors.email?.message}
            />
            <input
              id='email'
              disabled={showFail}
              type='email'
              className={fieldRules}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              {...register('email', { ...contactFormRules.inputEmailRules })}
            />
            <FormLabel
              htmlFor='message'
              labelText='Message:'
              errorMessage={errors.message?.message}
            />
            <textarea
              id='message'
              {...register('message', {
                ...contactFormRules.textAreaMessageRules,
              })}
              disabled={showFail}
              className={fieldRules}
              rows={5}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            <ContactFormSubmitButton showFail={showFail} isLoading={isLoading}>
              Something has gone wrong :/, please try to send the message again.
            </ContactFormSubmitButton>
            {/* Screen reader announcements */}
            <div
              role='status'
              aria-live='polite'
              aria-atomic='true'
              className='sr-only'
            >
              {isLoading && 'Sending message...'}
              {showFail && 'Failed to send message. Please try again.'}
            </div>
          </form>
        </div>
      ) : (
        <ThankYouPage toggleContact={toggleContact} />
      )}
    </div>
  );
};
