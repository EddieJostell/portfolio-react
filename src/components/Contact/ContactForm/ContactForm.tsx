import React, { useRef, useReducer, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { serviceID } from './helpers/serviceID';
import { templateID } from './helpers/templateID';
import { userID } from './helpers/userID';
import { useForm } from 'react-hook-form';
import { ThankYouPage } from './parts/ThankYouPage';
import styled from '@emotion/styled';
import { contactFormRules } from './helpers/HookFormValidationRules';
import { ContactFormSubmitControl } from './parts/ContactFormSubmitControl';
import { FormLabel } from './parts/FormLabel';
import { FormField } from './parts/FormField';
import { MenuIconWrapper } from '../../Navigation/StyledNavigationElements';
import { X } from 'react-feather';
import { Header } from '../../Header/Header';

interface IContactFormProps {
  toggleContact: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormState {
  hasFailed: boolean;
  showThanks: boolean;
  isLoading: boolean;
}

type FormAction = { type: 'SUBMIT' } | { type: 'SUCCESS' } | { type: 'ERROR' };

const initialContactState: FormState = {
  hasFailed: false,
  showThanks: false,
  isLoading: false,
};

const StyledTopBar = styled('div')(({}) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '10px',
}));

const StyledForm = styled('form')(({}) => ({
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  textAlign: 'left',
  color: '#edf2f4',
  padding: '40px',
  marginTop: '40px',
  fontFamily: 'Goldman, Helvetica, Arial, sans-serif',
}));

const StyledFormContainer = styled('div')(({}) => ({
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  webkitTransform: 'translate(-50%, -50%)',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'row',
  boxShadow: '0 20px 80px 0 rgba(0, 0, 0, 0.55)',

  '@media screen and (min-width: 992px)': {
    width: '585px',
    height: '700px',
    overflow: 'hidden',
    flexDirection: 'column',
  },
}));

const StyledBigTitle = styled(Header)(({ theme }) => ({
  position: 'absolute',
  bottom: '30px',
  right: '-300px',
  fontSize: '190px',
  opacity: 0.07,
  fontFamily: 'Audiowide, Helvetica, Arial, sans-serif',
  zIndex: 0,
}));

const StyledA11yContent = styled('div')(({}) => ({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: 0,
}));

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SUBMIT':
      return { ...state, isLoading: true, hasFailed: false };
    case 'SUCCESS':
      return { ...state, isLoading: false, showThanks: true };
    case 'ERROR':
      return { ...state, isLoading: false, hasFailed: true };
    default:
      return state;
  }
}

export const ContactForm = (props: IContactFormProps) => {
  const { toggleContact } = props;

  const [state, dispatch] = useReducer(formReducer, initialContactState);
  const { hasFailed, showThanks, isLoading } = state;

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
      /* dispatch({ type: 'SUBMIT' });
      emailjs.sendForm(serviceID(), templateID(), form.current!, userID()).then(
        (result) => {
          console.log('SUCCESS!', result.status, result.text);
          dispatch({ type: 'SUCCESS' });
        },
        (error) => {
          console.log('FAILED...', error.text);
          dispatch({ type: 'ERROR' });
        },
      ); */

      dispatch({ type: 'SUBMIT' });
      setTimeout(() => {
        if (1 + 1 === 2) {
          dispatch({ type: 'SUCCESS' });
        } else {
          dispatch({ type: 'ERROR' });
        }
      }, 2000);
    }
  };

  const closeContactForm = () => {
    setTimeout(() => {
      toggleContact();
    }, 300);
  };

  return (
    <StyledFormContainer /* className='Form' */>
      {showThanks ? (
        <ThankYouPage toggleContact={toggleContact} />
      ) : (
        <StyledFormContainer
          className='Form-contact'
          role='dialog'
          aria-modal='true'
          aria-labelledby='contact-title'
        >
          <StyledBigTitle
            id='contact-title'
            size='h2'
            title='Contact'
            color='white'
          />
          <StyledTopBar>
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
          </StyledTopBar>

          <StyledForm
            ref={form}
            onSubmit={handleSubmit(onDataComplete)}
            aria-label='Contact form'
          >
            <Header size='h1' title='Get in touch!' />
            <FormLabel
              htmlFor='name'
              labelText='Name:'
              errorMessage={errors.name?.message}
            />
            <FormField
              id='name'
              disabled={hasFailed}
              type='text'
              hasError={!!errors.name}
              errorId='name-error'
              {...register('name', {
                ...contactFormRules.inputNameRules,
              })}
              ref={(e) => {
                register('name').ref(e);
                nameInputRef.current = e as HTMLInputElement | null;
              }}
            />
            <FormLabel
              htmlFor='email'
              labelText='E-mail:'
              errorMessage={errors.email?.message}
            />
            <FormField
              id='email'
              disabled={hasFailed}
              type='email'
              hasError={!!errors.email}
              errorId='email-error'
              {...register('email', { ...contactFormRules.inputEmailRules })}
            />
            <FormLabel
              htmlFor='message'
              labelText='Message:'
              errorMessage={errors.message?.message}
            />
            <FormField
              as='textarea'
              id='message'
              {...register('message', {
                ...contactFormRules.textAreaMessageRules,
              })}
              disabled={hasFailed}
              rows={5}
              hasError={!!errors.message}
              errorId='message-error'
            />
            <ContactFormSubmitControl
              hasFailed={hasFailed}
              isLoading={isLoading}
            >
              Something has gone wrong :/, please try to send the message again.
            </ContactFormSubmitControl>
            {/* Screen reader announcements */}
            <StyledA11yContent
              role='status'
              aria-live='polite'
              aria-atomic='true'
              /*  className='sr-only' */
            >
              {isLoading && 'Sending message...'}
              {hasFailed && 'Failed to send message. Please try again.'}
            </StyledA11yContent>
          </StyledForm>
        </StyledFormContainer>
      )}
    </StyledFormContainer>
  );
};
