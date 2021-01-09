import * as React from 'react';
import './QuoteContent.scss';

interface Props {
  quote: string;
  author: string;
}

const QuoteContent = (props: Props) => {
  return (
    <div className="QuoteContent">
      {/* <h2>Quote</h2> */}
      <span>
        <i>{props.quote}</i>
      </span>
      <span>- {props.author}</span>
    </div>
  );
};

export default QuoteContent;
