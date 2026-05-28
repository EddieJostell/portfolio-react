import React, { forwardRef } from 'react';
import styled, { CSSObject } from '@emotion/styled';

const fieldStyles: CSSObject = {
  marginBottom: '30px',
  background: 'transparent',
  border: 'none',
  borderBottom: '2px solid #edf2f4',
  padding: '8px 5px',
  zIndex: 1,
  caretColor: '#edf2f4',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  color: '#edf2f4',
  fontFamily: 'inherit',

  '&:focus': {
    border: 'none',
    borderBottom: '2px solid #edf2f4',
    outline: 'none',
  },

  '&:disabled': {
    pointerEvents: 'none',
  },
};

const StyledInput = styled('input')(fieldStyles);
const StyledTextarea = styled('textarea')(fieldStyles);

type CommonProps = {
  id: string;
  hasError?: boolean;
  errorId?: string;
};

type InputFieldProps = CommonProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> & {
    as?: 'input';
  };

type TextareaFieldProps = CommonProps &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> & {
    as: 'textarea';
  };

export type FormFieldProps = InputFieldProps | TextareaFieldProps;

export const FormField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormFieldProps
>((props, ref) => {
  const { as = 'input', hasError, errorId, id, ...rest } = props;

  const ariaProps = {
    'aria-invalid': hasError ? ('true' as const) : ('false' as const),
    'aria-describedby': hasError ? errorId : undefined,
  };

  if (as === 'textarea') {
    return (
      <StyledTextarea
        id={id}
        ref={ref as React.Ref<HTMLTextAreaElement>}
        {...ariaProps}
        {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }

  return (
    <StyledInput
      id={id}
      ref={ref as React.Ref<HTMLInputElement>}
      {...ariaProps}
      {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
    />
  );
});

FormField.displayName = 'FormField';
