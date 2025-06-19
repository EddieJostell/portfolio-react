import React, { ReactNode, createContext } from 'react';
import {
  ProjectList,
  IPortfolioItem,
  QuoteInfo,
  IQuoteItem,
  IAboutMe,
  AboutMe,
  SocialMediaLinks,
  ISocialMediaLink,
  ISkillsItem,
  SkillsInfo,
  NavigationLinks,
  INavLinkItem,
} from '../utils/data';
import { IRouteInfoItem, RouteInfo } from './Route';
export interface IContextProps {
  state: IContextState;
  children?: ReactNode;
}

export interface IContextState {
  quoteItem: IQuoteItem[];
  portItem: IPortfolioItem[];
  routeItem: IRouteInfoItem[];
  aboutItem: IAboutMe[];
  socialItem: ISocialMediaLink[];
  skillsItem: ISkillsItem[];
  navLinkItem: INavLinkItem[];
}

export const initialHelperContext: IContextState = {
  quoteItem: QuoteInfo,
  portItem: ProjectList,
  routeItem: RouteInfo,
  aboutItem: AboutMe,
  socialItem: SocialMediaLinks,
  skillsItem: SkillsInfo,
  navLinkItem: NavigationLinks,
};

export const HelperContext = createContext<IContextState>(initialHelperContext);

export const ContextProvider = (props: IContextProps) => {
  const { state, children } = props;

  return (
    <HelperContext.Provider value={state}>{children}</HelperContext.Provider>
  );
};
