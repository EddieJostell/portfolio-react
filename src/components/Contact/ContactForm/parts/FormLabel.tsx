import React from 'react';
import styled from '@emotion/styled';

const StyledLabel = styled('label')(({}) => ({
  marginBottom: '5px',
  fontSize: '18px',
  position: 'relative',
}));

const StyledErrorSpan = styled('span')(({}) => ({
  color: '#d90429',
  fontSize: '14px',
  marginLeft: '10px',
}));

interface FormLabelProps {
  htmlFor: string;
  labelText: string;
  errorMessage?: string;
}

export const FormLabel: React.FC<FormLabelProps> = ({
  htmlFor,
  labelText,
  errorMessage,
}) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
      {labelText}
      {errorMessage && (
        <StyledErrorSpan
          id={`${htmlFor}-error`}
          role='alert'
          aria-live='polite'
          aria-atomic='true'
        >
          {errorMessage}
        </StyledErrorSpan>
      )}
    </StyledLabel>
  );
};
