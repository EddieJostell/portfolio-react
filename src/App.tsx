import './App.scss';
import React, { useState } from 'react';
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

  const toggleContact = () => {
    console.log('toggleContact Executed!');
    setAppState({ ...appState, contactIsActive: !appState.contactIsActive });
  };

  return (
    <ContextProvider state={HelperContextValue}>
      <div className="App" data-testid="application">
        <Router>
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
          <Container>
            {/* <RouteLinks /> */}
            {!appState.contactIsActive ? (
              [
                <Home />,
                <Portfolio />,
                <Skills />,
                <Experiments />,
                isMobileMax && <ContactSlim />,
                <Footer />,
              ]
            ) : (
              <ContactForm
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

//
