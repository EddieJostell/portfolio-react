import emailjs from '@emailjs/browser';
import type React from 'react';
import { serviceID } from './serviceID';
import { templateID } from './templateID';
import { userID } from './userID';

type FormAction = { type: 'SUBMIT' } | { type: 'SUCCESS' } | { type: 'ERROR' };

export const sendEmailProd = (
  formEl: HTMLFormElement,
  dispatch: React.Dispatch<FormAction>,
) => {
  dispatch({ type: 'SUBMIT' });
  emailjs.sendForm(serviceID(), templateID(), formEl, userID()).then(
    (result) => {
      console.log('SUCCESS!', result.status, result.text);
      dispatch({ type: 'SUCCESS' });
    },
    (error) => {
      console.log('FAILED...', error.text);
      dispatch({ type: 'ERROR' });
    },
  );
};
