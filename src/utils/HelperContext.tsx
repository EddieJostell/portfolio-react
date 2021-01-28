import { ReactComponent } from '*.svg';
import React, { ReactNode, createContext } from 'react';
import { IQuoteItem, IPortfolioItem } from './data';
import { IRouteInfoItem } from './Route';

//Trying to sort a proper Context...

/* export interface IContextProps {
  state: IContextState;
  children?: ReactNode;
}

export interface IContextState {
  quoteItem: IQuoteItem;
  portItem: IPortfolioItem;
  routeItem: IRouteInfoItem;
  navIsOpen: boolean;
}

const initialHelperContext: IContextState = {
  quoteItem: { id: 0, quote: '', author: '' },
  portItem: { id: 0, title: '', tech: '', link: '', img: '', text: '' },
  routeItem: { id: 0, path: '', exact: true, component: ReactComponent },
  navIsOpen: false,
};

const HelperContext = createContext<IContextState>(initialHelperContext);

export const ContextProvider = (props: IContextProps) => {
  const { state, children } = props;

  return (
    <HelperContext.Provider value={state}>{children}</HelperContext.Provider>
  );
}; */

//export { HelperContext, HelperProvider };

export const QuoteContext = createContext([] as IQuoteItem[]);

export const ContextProvider = QuoteContext.Provider;

export default QuoteContext;
