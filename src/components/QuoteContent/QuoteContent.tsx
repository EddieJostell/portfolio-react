import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
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

const shuffleIds = (ids: number[], previousLastId?: number) => {
  const shuffledIds = [...ids];

  for (let index = shuffledIds.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledIds[index], shuffledIds[randomIndex]] = [
      shuffledIds[randomIndex],
      shuffledIds[index],
    ];
  }

  if (shuffledIds.length > 1 && shuffledIds[0] === previousLastId) {
    [shuffledIds[0], shuffledIds[1]] = [shuffledIds[1], shuffledIds[0]];
  }

  return shuffledIds;
};

const quoteMotionProps: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: [0, 1, 1, 0] },
  transition: { duration: 20, times: [0, 0.1, 0.9, 1] },
};

export const QuoteContent: React.FC = () => {
  const quotes = useQuotes();
  const [quoteQueue, setQuoteQueue] = useState(() => ({
    ids: shuffleIds(quotes.map(({ id }) => id)),
    position: 0,
  }));

  const activeId = quoteQueue.ids[quoteQueue.position];
  const currentQuote = quotes.find(({ id }) => id === activeId) ?? quotes[0];

  useEffect(() => {
    const quoteIds = quotes.map(({ id }) => id);

    // Reconcile asynchronous provider updates with the current randomized queue.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setQuoteQueue((currentQueue) => {
      const hasSameIds =
        currentQueue.ids.length === quoteIds.length &&
        currentQueue.ids.every((id) => quoteIds.includes(id));

      if (hasSameIds) {
        return currentQueue;
      }

      const previousLastId = quoteIds.includes(
        currentQueue.ids[currentQueue.position],
      )
        ? currentQueue.ids[currentQueue.position]
        : undefined;

      return {
        ids: shuffleIds(quoteIds, previousLastId),
        position: 0,
      };
    });
  }, [quotes]);

  const handleAnimationComplete = useCallback(() => {
    setQuoteQueue((currentQueue) => {
      if (currentQueue.position < currentQueue.ids.length - 1) {
        return {
          ...currentQueue,
          position: currentQueue.position + 1,
        };
      }

      const quoteIds = quotes.map(({ id }) => id);

      return {
        ids: shuffleIds(quoteIds, currentQueue.ids[currentQueue.position]),
        position: 0,
      };
    });
  }, [quotes]);

  if (!currentQuote) {
    return null;
  }

  return (
    <StyledMotionSpan
      key={currentQuote.id}
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
          {currentQuote.quote}
          <FontAwesomeIcon icon={faQuoteRight} color='white' size='sm' />
        </StyledQuote>
        <StyledAuthor>- {currentQuote.author}</StyledAuthor>
      </StyledQuoteContent>
    </StyledMotionSpan>
  );
};
