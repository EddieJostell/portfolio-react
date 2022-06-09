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
  const randomQuotes = React.useContext<IContextState>(HelperContext);
  // eslint-disable-next-line

  let quotes =
    randomQuotes.quoteItem[
      Math.floor(Math.random() * randomQuotes.quoteItem.length)
    ];
  const [quote, setQuote] = useState<IQuoteState>({
    quote: quotes.quote,
    author: quotes.author,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      let randomizedQuotes =
        randomQuotes.quoteItem[
          Math.floor(Math.random() * randomQuotes.quoteItem.length)
        ];
      setQuote({
        quote: randomizedQuotes.quote,
        author: randomizedQuotes.author,
      });
    }, 6000);

    return () => clearInterval(interval);
  });

  return (
    <AnimatePresence>
      <motion.div
        key='quotes'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 3,
          delay: 6,
          ease: 'easeInOut',
        }}
        exit={{ opacity: 0, transition: { duration: 3, delay: 6 } }}
      >
        <div className='QuoteContent'>
          <span className='quote'>
            <FontAwesomeIcon icon={faQuoteLeft} color='white' size='sm' />
            &nbsp;{quote.quote}&nbsp;
            <FontAwesomeIcon icon={faQuoteRight} color='white' size='sm' />
          </span>
          <span>- {quote.author}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
