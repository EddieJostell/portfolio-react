import { createContext, useContext } from 'react';
import {
  ProjectList,
  PortfolioItem,
  QuoteInfo,
  QuoteItem,
  AboutMeItem,
  AboutMe,
  SocialMediaLinks,
  SocialMediaLink,
  SkillsItem,
  SkillsInfo,
  NavigationLinks,
  NavLinkItem,
} from './data';
import { RouteInfoItem, RouteInfo } from './Route';

export interface SiteData {
  quoteItem: QuoteItem[];
  portItem: PortfolioItem[];
  routeItem: RouteInfoItem[];
  aboutItem: AboutMeItem[];
  socialItem: SocialMediaLink[];
  skillsItem: SkillsItem[];
  navLinkItem: NavLinkItem[];
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
