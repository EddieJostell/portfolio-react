import * as React from 'react';
import { useEffect, useState } from 'react';
import { HelperContext, IContextState } from '../../utils/HelperContext';
import { AnimatePresence, motion } from 'framer-motion';
import './QuoteContent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

interface Props {}

interface IQuoteState {
  quote: string;
  author: string;
}

export const QuoteContent = (props: Props) => {
  const Quotes = React.useContext<IContextState>(HelperContext);
  const [quoteIndex, setQuoteIndex] = useState<number>(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % Quotes.quoteItem.length);
    }, 20000);
    return () => clearTimeout(timeoutId);
  }, [quoteIndex]);

  return (
    <AnimatePresence>
      <motion.h1
        key={quoteIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 20 }}
      >
        <div className='QuoteContent'>
          <span className='quote'>
            <FontAwesomeIcon icon={faQuoteLeft} color='white' size='sm' />
            {Quotes.quoteItem[quoteIndex].quote}
            <FontAwesomeIcon icon={faQuoteRight} color='white' size='sm' />
          </span>
          <span className='author'>
            - {Quotes.quoteItem[quoteIndex].author}
          </span>
        </div>
      </motion.h1>
    </AnimatePresence>
  );
};
