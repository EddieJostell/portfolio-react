import { createContext, useContext } from 'react';
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
} from './data';
import { IRouteInfoItem, RouteInfo } from './Route';

export interface SiteData {
  quoteItem: IQuoteItem[];
  portItem: IPortfolioItem[];
  routeItem: IRouteInfoItem[];
  aboutItem: IAboutMe[];
  socialItem: ISocialMediaLink[];
  skillsItem: ISkillsItem[];
  navLinkItem: INavLinkItem[];
}

export const initialSiteData: SiteData = {
  quoteItem: QuoteInfo,
  portItem: ProjectList,
  routeItem: RouteInfo,
  aboutItem: AboutMe,
  socialItem: SocialMediaLinks,
  skillsItem: SkillsInfo,
  navLinkItem: NavigationLinks,
};

export const SiteDataContext = createContext<SiteData>(initialSiteData);

export const useSiteData = () => useContext(SiteDataContext);
export const useQuotes = () => useSiteData().quoteItem;
export const usePortfolio = () => useSiteData().portItem;
export const useRoutes = () => useSiteData().routeItem;
export const useAbout = () => useSiteData().aboutItem;
export const useSocialLinks = () => useSiteData().socialItem;
export const useSkills = () => useSiteData().skillsItem;
export const useNavLinks = () => useSiteData().navLinkItem;
