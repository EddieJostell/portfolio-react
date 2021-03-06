import * as React from 'react';

interface Props {
  quote: string;
  author: string;
}

const QuoteContent = (props: Props) => {
  return (
    <div className="relative flex flex-col items-center max-w-xl mx-auto my-20">
      <span className="text-2xl">
        <i>{props.quote}</i>
      </span>
      <span>- {props.author}</span>
    </div>
  );
};

export default QuoteContent;
