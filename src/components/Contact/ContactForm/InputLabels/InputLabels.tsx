import React from 'react';

export interface InputLabelItem {
  id: number;
  input: InputItem;
  label: LabelItem;
}

interface InputItem {
  type: string;
  name: string;
  className: string;
  value: string;
  //onChange: () => void;
}
interface LabelItem {
  labelText: string;
  errorLabelText: string;
  errorLabelText2?: string;
  htmlFor: string;
  labelClassName: string;
  errorLabelClassName: string;
}

export const InputLabelInfo: InputLabelItem[] = [
  {
    id: 1,
    input: { type: 'text', name: 'name', className: 'fields name', value: '' },
    label: {
      labelText: 'Name:',
      errorLabelText:
        'Oh, I think you might have forgotten to state your name?',
      htmlFor: 'name',
      labelClassName: 'form-label',
      errorLabelClassName: 'error-label',
    },
  },
  {
    id: 2,
    input: {
      type: 'text',
      name: 'email',
      className: 'fields email',
      value: '',
    },
    label: {
      labelText: 'Email:',
      errorLabelText:
        "Oh noes, if you don't type a email I will not be able to answer you!",
      errorLabelText2: 'The email must have a @ sign!, please try again!',
      htmlFor: 'email',
      labelClassName: 'form-label',
      errorLabelClassName: 'error-label',
    },
  },
  {
    id: 3,
    input: { type: 'text', name: 'message', className: '', value: '' },
    label: {
      labelText: 'Message:',
      errorLabelText: " Sorry, I can't read your mind...",
      htmlFor: 'message',
      labelClassName: 'form-label',
      errorLabelClassName: 'error-label',
    },
  },
];
