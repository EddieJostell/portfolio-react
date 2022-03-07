import './App.scss';
import React, { useState, useCallback } from 'react';
import {
  ProjectList,
  QuoteInfo,
  NavigationLinks,
  AboutMe,
  ContactInfo,
} from './utils/data';
import { Navigation } from './components/Navigation/Navigation';
import { ContextProvider, IContextState } from './utils/HelperContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from './components/Container/Container';
import { RouteInfo } from '../src/utils/Route';
import { ContactSlim } from './components/Contact/ContactSlim';
import { isMobileMax } from './utils/userAgent';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Home } from './components/Home/Home';
import { Skills } from './components/Skills/Skills';
import { Experiments } from './components/Experiments/Experiments';
import { Footer } from './components/Footer/Footer';
import { ContactForm } from './components/Contact/ContactForm/ContactForm';
import { About } from './components/About/About';

interface IAppState {
  navIsOpen: boolean;
  contactIsActive: boolean;
}

function App() {
  const [appState, setAppState] = useState<IAppState>({
    navIsOpen: false,
    contactIsActive: false,
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

  const toggleContact = useCallback(() => {
    setAppState({
      ...appState,
      contactIsActive: !appState.contactIsActive,
      navIsOpen: false,
    });
  }, [appState.contactIsActive]);

  /* const toggleContact = () => {
    setAppState({
      ...appState,
      contactIsActive: !appState.contactIsActive,
      navIsOpen: false,
    });
  }; */

  return (
    <ContextProvider state={HelperContextValue}>
      <div className='App' data-testid='application'>
        <Router>
          {!appState.contactIsActive && (
            <Navigation
              navIsOpen={appState.navIsOpen}
              toggleNav={toggleNav}
              name='E'
              navLinks={NavigationLinks}
              toggleContact={toggleContact}
              data-testid='navigation'
            />
          )}
          <Container>
            {!appState.contactIsActive ? (
              [
                <Home key='1' />,
                <About key='2' />,
                <Portfolio key='3' />,
                <Skills key='4' />,
                isMobileMax && <ContactSlim key='5' />,
                <Footer key='6' />,
              ]
            ) : (
              <ContactForm
                key='7'
                toggleContact={toggleContact}
                contactIsActive={appState.contactIsActive}
              />
            )}
          </Container>
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
