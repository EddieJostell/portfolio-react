import * as React from 'react';
import { useEffect, useState } from 'react';
import { useQuotes } from '../../utils/siteData';
import { AnimatePresence, motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

const StyledMotionSpan = styled(motion.span)(() => ({
  fontFamily: 'Goldman, Helvetica, sans-serif',
}));

const StyledQuoteContent = styled.div({
  width: '100%',
  position: 'absolute',
  bottom: '1.25rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '36rem',
  margin: '0 auto',
  marginTop: '80px',
  marginBottom: '80px',
  color: '#edf2f4',
});

const StyledQuote = styled.span({
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
});

const StyledAuthor = styled.span({
  fontStyle: 'italic',
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
});

const quoteMotionProps: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: [0, 1, 0] },
  exit: { opacity: 0 },
  transition: { duration: 20 },
};

export const QuoteContent: React.FC = () => {
  const quotes = useQuotes();
  const [quoteIndex, setQuoteIndex] = useState<number>(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 20000);
    return () => clearTimeout(timeoutId);
  }, [quoteIndex, quotes.length]);

  return (
    <AnimatePresence>
      <StyledMotionSpan key={quoteIndex} {...quoteMotionProps}>
        <StyledQuoteContent>
          <StyledQuote>
            <FontAwesomeIcon icon={faQuoteLeft} color='white' size='sm' />
            {quotes[quoteIndex].quote}
            <FontAwesomeIcon icon={faQuoteRight} color='white' size='sm' />
          </StyledQuote>
          <StyledAuthor>- {quotes[quoteIndex].author}</StyledAuthor>
        </StyledQuoteContent>
      </StyledMotionSpan>
    </AnimatePresence>
  );
};
