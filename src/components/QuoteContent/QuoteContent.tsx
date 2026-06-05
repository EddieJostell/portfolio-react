import * as React from 'react';
import { useEffect, useState } from 'react';
import { useQuotes } from '../../utils/siteData';
import { AnimatePresence, motion } from 'framer-motion';
import './QuoteContent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

const StyledMotionSpan = styled(motion.span)(() => ({
  fontFamily: 'Goldman, Helvetica, sans-serif',
}));

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
      <StyledMotionSpan
        key={quoteIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 20 }}
      >
        <div className='QuoteContent'>
          <span className='quote'>
            <FontAwesomeIcon icon={faQuoteLeft} color='white' size='sm' />
            {quotes[quoteIndex].quote}
            <FontAwesomeIcon icon={faQuoteRight} color='white' size='sm' />
          </span>
          <span className='author'>- {quotes[quoteIndex].author}</span>
        </div>
      </StyledMotionSpan>
    </AnimatePresence>
  );
};
