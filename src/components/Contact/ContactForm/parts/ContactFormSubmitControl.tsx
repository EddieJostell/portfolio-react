import { Fragment, ReactNode } from 'react';
import styled, { CSSObject } from '@emotion/styled';

const buttonBase: CSSObject = {
  padding: '12px 20px',
  background: '#d90429',
  border: 'none',
  color: '#edf2f4',
  cursor: 'pointer',
  zIndex: 2,
  fontSize: '0.875em',
  letterSpacing: '2px',
  width: '50%',

  '@media screen and (min-width: 768px)': {
    width: '35%',
  },
};

const StyledButton = styled('button')<{ isLoading?: boolean }>(
  ({ isLoading }) => ({
    ...buttonBase,
    ...(isLoading && {
      opacity: 0.9,
      background: '#8d99ae',
      cursor: 'not-allowed',
    }),
  }),
);

const StyledErrorButton = styled('button')({
  ...buttonBase,
  background: '#ef233c',
});

const StyledErrorMessage = styled('div')({
  zIndex: 2,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',

  '& > div': {
    margin: '10px 0',
    color: '#ef233c',
    fontSize: '16px',
  },
});

interface ContactFormSubmitControlProps {
  hasFailed: boolean | undefined;
  isLoading: boolean | undefined;
  children: ReactNode;
}

export const ContactFormSubmitControl = (
  props: ContactFormSubmitControlProps,
) => {
  const { hasFailed, isLoading, children } = props;

  const btn = hasFailed ? (
    <StyledErrorMessage role='alert' aria-live='assertive'>
      <div>{children}</div>
      <StyledErrorButton type='submit' aria-label='Try sending message again'>
        {'Try again'}
      </StyledErrorButton>
    </StyledErrorMessage>
  ) : (
    <StyledButton
      disabled={isLoading}
      isLoading={isLoading}
      type='submit'
      value='Submit'
      aria-live='polite'
      aria-busy={isLoading}
    >
      {isLoading ? 'Sending...' : 'Send Message'}
    </StyledButton>
  );

  return <Fragment>{btn}</Fragment>;
};
