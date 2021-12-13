import * as React from 'react';
import { useEffect, useState } from 'react';
import { HelperContext, IContextState } from '../../../utils/HelperContext';
import './QuoteContent.scss';

interface Props {}

interface IQuoteState {
  quote: string;
  author: string;
}

const QuoteContent = (props: Props) => {
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
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='animation fixed flex flex-col items-center max-w-xl mx-auto my-20 bottom-5 text-gray'>
      <span className='text-xl'>
        <i>{quote.quote}</i>
      </span>
      <span>- {quote.author}</span>
    </div>
  );
};

export default QuoteContent;
