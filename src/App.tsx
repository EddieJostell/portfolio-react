import "./App.scss";
import { useState, useCallback, Fragment } from "react";
import {
  ProjectList,
  QuoteInfo,
  NavigationLinks,
  AboutMe,
  ContactInfo,
  SkillsInfo,
} from "./utils/data";
import { Navigation } from "./components/Navigation/Navigation";
import { ContextProvider, IContextState } from "./utils/HelperContext";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { RouteInfo } from "../src/utils/Route";
import { ContactSlim } from "./components/Contact/ContactSlim";
import { isComputerMin } from "./utils/userAgent";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { About } from "./components/About/About";
import { ContactForm } from "./components/Contact/ContactForm/ContactForm";
import RouteLinks from "./components/RouteLinks/RouteLinks";

interface IAppState {
  navIsOpen: boolean;
  contactIsActive: boolean;
  isLoading: boolean;
}

function App() {
  const [appState, setAppState] = useState<IAppState>({
    navIsOpen: false,
    contactIsActive: false,
    isLoading: false,
  });

  const toggleNav = (visible: boolean) => {
    setAppState({ ...appState, navIsOpen: visible });
  };

  const HelperContextValue: IContextState = {
    quoteItem: QuoteInfo,
    portItem: ProjectList,
    routeItem: RouteInfo,
    aboutItem: AboutMe,
    contactItem: ContactInfo,
    skillsItem: SkillsInfo,
  };

  const toggleContact = useCallback(() => {
    setAppState({
      ...appState,
      contactIsActive: !appState.contactIsActive,
      navIsOpen: false,
    });
  }, [appState.contactIsActive]);

  /*  useEffect(() => {
    setTimeout(() => {
      setAppState({ ...appState, isLoading: appState.isLoading });
    }, 2000);
    setAppState({ ...appState, isLoading: !appState.isLoading });
  }, []); */

  const displayLoader = () => {
    return (
      <div className="Name-wrapper">
        <div className="loader-letter">E</div>
      </div>
    );
  };

  return (
    <ContextProvider state={HelperContextValue}>
      <div className="App" data-testid="application">
        {appState.isLoading ? (
          displayLoader()
        ) : (
          <Fragment>
            {!appState.contactIsActive && (
              <Navigation
                navIsOpen={appState.navIsOpen}
                toggleNav={toggleNav}
                name="E"
                navLinks={NavigationLinks}
                toggleContact={toggleContact}
                data-testid="navigation"
              />
            )}

            {!appState.contactIsActive ? (
              [
                <Home key="1" />,
                <About key="2" />,
                <Portfolio key="3" />,
                isComputerMin && <ContactSlim icons={true} key="4" />,
                <Footer key="5" />,
              ]
            ) : (
              <ContactForm key="6" toggleContact={toggleContact} />
            )}
          </Fragment>
        )}
        {/* <Router>
          <Routes>{RouteLinks()}</Routes>
        </Router> */}
      </div>
    </ContextProvider>
  );
}

export default App;
