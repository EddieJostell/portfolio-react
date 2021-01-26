import React, { ReactNode, createContext } from 'react';
import { QuoteInfo, IQuoteItem } from './data';

//Trying to sort a proper Context...

/* export interface IContextProps {
  state: IContextState;
  children?: ReactNode;
}

export interface IContextState {
  quoteItem?: IQuoteItem | never[];
}

const HelperCtx: IContextState = { quoteItem: [] };

const HelperContext = React.createContext(HelperCtx);

const HelperProvider = (props: IContextProps) => {
  const { state, children } = props;

  return (
    <HelperContext.Provider value={state}>{children}</HelperContext.Provider>
  );
};

export { HelperContext, HelperProvider }; */

export interface IContextState {
  quoteItem?: IQuoteItem;
}

export const QuoteContext = createContext([] as IQuoteItem[]);

export const QuoteProvider = QuoteContext.Provider;

export default QuoteContext;
