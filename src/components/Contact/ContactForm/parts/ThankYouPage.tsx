import React, { useEffect, useRef } from 'react';

interface ThankYouPageProps {
  toggleContact: () => void;
}

export const ThankYouPage = (props: ThankYouPageProps) => {
  const { toggleContact } = props;
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Focus on heading for screen readers
    headingRef.current?.focus();
  }, []);

  return (
    <div className='Form-thanks' role='alert' aria-live='polite'>
      <div className='title'>Thanks</div>
      <div className='description'>
        <h1 ref={headingRef} tabIndex={-1}>
          Message has been sent!
        </h1>
        Thank you for reaching out! I will get back at you as soon as possible!
      </div>
      <button
        className='btn'
        onClick={toggleContact}
        aria-label='Close contact form and return to start'
      >
        Back to start
      </button>
    </div>
  );
};
