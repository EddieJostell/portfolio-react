import * as React from 'react';
import { HelperContext, IContextState } from '../../../utils/HelperContext';

interface Props {}

const QuoteContent = (props: Props) => {
  const randomQuotes = React.useContext<IContextState>(HelperContext);
  // eslint-disable-next-line
  const [quotetInfo] = React.useState<IContextState>(randomQuotes);

  let quotes =
    quotetInfo.quoteItem[
      Math.floor(Math.random() * quotetInfo.quoteItem.length)
    ];

  console.log(quotes);

  return (
    <div className="fixed flex flex-col items-center max-w-xl mx-auto my-20 bottom-5 text-gray">
      <span className="text-xl">
        <i>{quotes.quote}</i>
      </span>
      <span>- {quotes.author}</span>
    </div>
  );
};

export default QuoteContent;
