import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Header } from '../../../Header/Header';
interface ThankYouPageProps {
  toggleContact: () => void;
}

const StyledThanksContainer = styled('div')(({}) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
  backgroundColor: '#ffffff',
}));

const StyledTitle = styled('div')(({}) => ({
  position: 'absolute',
  bottom: '30px',
  right: '-200px',
  color: '#000',
  fontSize: '190px',
  opacity: 0.5,
  fontFamily: 'Audiowide, Helvetica, Arial, sans-serif',
  zIndex: 0,
}));

const StyledDescription = styled('div')(({}) => ({
  zIndex: 1,
  textAlign: 'left',
  padding: '40px',
  marginTop: '40px',
  fontFamily: 'Goldman, Helvetica, Arial, sans-serif',
}));

export const ThankYouPage = (props: ThankYouPageProps) => {
  const { toggleContact } = props;
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Focus on heading for screen readers
    headingRef.current?.focus();
  }, []);

  return (
    <StyledThanksContainer role='alert' aria-live='polite'>
      <StyledTitle>Thanks</StyledTitle>
      <StyledDescription>
        <Header
          size='h1'
          color='black'
          title='Message has been sent!'
          ref={headingRef}
          tabIndex={-1}
        />
        Thank you for reaching out! I will get back at you as soon as possible!
      </StyledDescription>
      <button
        className='btn'
        onClick={toggleContact}
        aria-label='Close contact form and return to start'
      >
        Back to start
      </button>
    </StyledThanksContainer>
  );
};
