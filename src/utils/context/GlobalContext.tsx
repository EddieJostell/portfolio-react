import {
  createContext,
  PropsWithChildren,
  Reducer,
  useContext,
  useReducer,
} from 'react';
import {
  IPortfolioItem,
  IQuoteItem,
  IAboutMe,
  ISocialMediaLink,
  ISkillsItem,
  INavLinkItem,
} from '../../utils/data';

export interface MenuData {
  links: INavLinkItem[];
}

export interface PortfolioData {
  portItem: IPortfolioItem[];
}

export interface QuoteData {
  quoteItem: IQuoteItem[];
}

export interface AboutData {
  aboutItem: IAboutMe[];
}

export interface SocialMediaLinks {
  socialItem: ISocialMediaLink[];
}

export interface ContactFormState {
  formStates: {
    showFail?: boolean;
    showThanks?: boolean;
    isLoading?: boolean;
  };
  contactIsActive?: boolean;
  toggleContact?: () => void;
}
export interface SkillsData {
  skillsItem: ISkillsItem[];
}

export interface DesktopMenuState {
  data: MenuData;

  navIsOpen?: boolean;
}

export interface MobileMenuState {
  navIsOpen?: boolean;

  data: MenuData;

  toggleMobileNav?: (visible: boolean) => void;
}
export interface GlobalState {
  mobile: MobileMenuState;
  desktop: DesktopMenuState;
  portfolio: PortfolioData;
  quote: QuoteData;
  about: AboutData;
  contact: SocialMediaLinks;
  skills: SkillsData;
  contactForm?: ContactFormState;
}
interface IMenuContext {
  state: GlobalState;
  // dispatch: React.Dispatch<Action>;
}

const GlobalContext = createContext<IMenuContext | null>(null);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext used outside of GlobalProvider');
  }

  return context;
};

interface GlobalProviderProps {
  reducer: Reducer<GlobalState, any>;
  initialState: GlobalState;
}
export const GlobalProvider = ({
  initialState,
  reducer,
  children,
}: PropsWithChildren<GlobalProviderProps>) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
