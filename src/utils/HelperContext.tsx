import React, { ReactNode, createContext } from 'react';
import {
  ProjectList,
  IPortfolioItem,
  QuoteInfo,
  IQuoteItem,
} from '../utils/data';
import { IRouteInfoItem, RouteInfo } from './Route';

//Trying to sort a proper Context...

export interface IContextProps {
  state: IContextState;
  children?: ReactNode;
}

export interface IContextState {
  quoteItem: IQuoteItem[];
  portItem: IPortfolioItem[];
  routeItem: IRouteInfoItem[];
}

const initialHelperContext: IContextState = {
  quoteItem: QuoteInfo,
  portItem: ProjectList,
  routeItem: RouteInfo,
};

export const HelperContext = createContext<IContextState>(initialHelperContext);

export const ContextProvider = (props: IContextProps) => {
  const { state, children } = props;

  return (
    <HelperContext.Provider value={state}>{children}</HelperContext.Provider>
  );
};

//export { HelperContext, HelperProvider };

/* export const QuoteContext = createContext([] as IQuoteItem[]);

export const ContextProvider = QuoteContext.Provider;

export default QuoteContext;
 */
