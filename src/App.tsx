import React, { useState } from 'react';
import './App.scss';
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
import { RouteInfo } from '../src/utils/Route';
import ContactSlim from './components/Contact/ContactSlim';
import { isMobileMax } from './utils/userAgent';
import Portfolio from './components/Portfolio/Portfolio';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Experiments from './components/Experiments/Experiments';
import Contact from './components/Contact/Contact';
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

  /*   const clickMe = () => {
    const element = document.getElementById('test');

    const topPos = element!.getBoundingClientRect();

    let rectTop = topPos.top + window.scrollY;

    window.scrollTo({
      top: rectTop,
      behavior: 'smooth',
    });
  }; */

  return (
    <ContextProvider state={HelperContextValue}>
      <div className="App" data-testid="application">
        <Router>
          <Navigation
            navIsOpen={appState.navIsOpen}
            toggleNav={toggleNav}
            name="E"
            navLinks={NavigationLinks}
            data-testid="navigation"
          />
          <Container>
            {/* <RouteLinks /> */}
            <Home />
            <Portfolio />
            <Skills />
            <Experiments />
            <Contact />
            {isMobileMax && <ContactSlim />}
          </Container>
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;

//
