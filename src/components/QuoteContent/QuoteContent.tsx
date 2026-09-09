import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useQuotes } from '../../utils/siteData';
import { motion } from 'framer-motion';
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

const shuffleIndices = (length: number, previousLastIndex?: number) => {
  const indices = Array.from({ length }, (_, index) => index);

  for (let index = length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [indices[index], indices[randomIndex]] = [
      indices[randomIndex],
      indices[index],
    ];
  }

  if (length > 1 && indices[0] === previousLastIndex) {
    [indices[0], indices[1]] = [indices[1], indices[0]];
  }

  return indices;
};

const quoteMotionProps: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: [0, 1, 1, 0] },
  transition: { duration: 20, times: [0, 0.1, 0.9, 1] },
};

export const QuoteContent: React.FC = () => {
  const quotes = useQuotes();
  const [quoteQueue, setQuoteQueue] = useState(() => ({
    indices: shuffleIndices(quotes.length),
    position: 0,
  }));
  const quoteCountRef = useRef(quotes.length);

  const quoteIndex =
    quotes.length > 0
      ? Math.min(
          quoteQueue.indices[quoteQueue.position] ?? 0,
          quotes.length - 1,
        )
      : undefined;

  useEffect(() => {
    if (quoteCountRef.current !== quotes.length) {
      quoteCountRef.current = quotes.length;
      setQuoteQueue({
        indices: shuffleIndices(quotes.length),
        position: 0,
      });
    }
  }, [quotes.length]);

  const handleAnimationComplete = useCallback(() => {
    setQuoteQueue((currentQueue) => {
      if (currentQueue.position < currentQueue.indices.length - 1) {
        return {
          ...currentQueue,
          position: currentQueue.position + 1,
        };
      }

      return {
        indices: shuffleIndices(
          quotes.length,
          currentQueue.indices[currentQueue.position],
        ),
        position: 0,
      };
    });
  }, [quotes.length]);

  if (quoteIndex === undefined || quotes.length === 0) {
    return null;
  }

  return (
    <StyledMotionSpan
      key={quoteIndex}
      {...(quotes.length > 1
        ? quoteMotionProps
        : { initial: { opacity: 1 }, animate: { opacity: 1 } })}
      onAnimationComplete={
        quotes.length > 1 ? handleAnimationComplete : undefined
      }
    >
      <StyledQuoteContent>
        <StyledQuote>
          <FontAwesomeIcon icon={faQuoteLeft} color='white' size='sm' />
          {quotes[quoteIndex].quote}
          <FontAwesomeIcon icon={faQuoteRight} color='white' size='sm' />
        </StyledQuote>
        <StyledAuthor>- {quotes[quoteIndex].author}</StyledAuthor>
      </StyledQuoteContent>
    </StyledMotionSpan>
  );
};
