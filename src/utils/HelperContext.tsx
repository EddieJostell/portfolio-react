import React, { ReactNode, createContext } from 'react';
import {
  ProjectList,
  IPortfolioItem,
  QuoteInfo,
  IQuoteItem,
  IAboutMe,
  AboutMe,
  ContactInfo,
  IContactItem,
} from '../utils/data';
import { IRouteInfoItem, RouteInfo, IScrollItem, ScrollInfo } from './Route';
export interface IContextProps {
  state: IContextState;
  children?: ReactNode;
}

export interface IContextState {
  quoteItem: IQuoteItem[];
  portItem: IPortfolioItem[];
  routeItem: IRouteInfoItem[];
  aboutItem: IAboutMe[];
  contactItem: IContactItem[];
  scrollItem: IScrollItem[];
}

const initialHelperContext: IContextState = {
  quoteItem: QuoteInfo,
  portItem: ProjectList,
  routeItem: RouteInfo,
  aboutItem: AboutMe,
  contactItem: ContactInfo,
  scrollItem: ScrollInfo,
};

export const HelperContext = createContext<IContextState>(initialHelperContext);

export const ContextProvider = (props: IContextProps) => {
  const { state, children } = props;

  return (
    <HelperContext.Provider value={state}>{children}</HelperContext.Provider>
  );
};
