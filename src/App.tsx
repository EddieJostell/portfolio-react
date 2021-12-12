import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import {
  ProjectList,
  QuoteInfo,
  NavigationLinks,
  AboutMe,
  ContactInfo,
} from './utils/data';
import { ContextProvider, IContextState } from './utils/HelperContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Container/Container';
import RouteLinks from './components/RouteLinks/RouteLinks';
import { RouteInfo } from '../src/utils/Route';
import ContactSlim from './components/Contact/ContactSlim';
import { isMobileMax } from './utils/userAgent';
import QuoteContent from './components/About/QuoteContent/QuoteContent';
interface IAppState {
  navIsOpen: boolean;
}

function App() {
  const [appState, setAppState] = useState<IAppState>({
    navIsOpen: false,
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
  };

  return (
    <ContextProvider state={HelperContextValue}>
      <div className="min-h-screen text-center bg-cool-black">
        <Router>
          <Navigation
            navIsOpen={appState.navIsOpen}
            toggleNav={toggleNav}
            name="EJ"
            navLinks={NavigationLinks}
          />
          <Container>
            <RouteLinks />
            {isMobileMax && <ContactSlim />}
            <QuoteContent />
          </Container>
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;

//
