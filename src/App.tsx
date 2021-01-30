import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import {
  IQuoteItem,
  ProjectList,
  QuoteInfo,
  NavigationLinks,
  IPortfolioItem,
} from './utils/data';
import { ContextProvider, IContextState } from './utils/HelperContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import RouteLinks from './components/RouteLinks/RouteLinks';
import { IRouteInfoItem, RouteInfo } from '../src/utils/Route';

export interface IPropertyState {
  quoteItem: IQuoteItem[];
  routeInfo: IRouteInfoItem[];
  portItem: IPortfolioItem[];
}

function App() {
  const [appState, setAppState] = useState({
    navIsOpen: false,
    /* quoteItem: QuoteInfo,
    portItem: ProjectList,
    routeInfo: RouteInfo */
  });

  const toggleNav = (visible: boolean) => {
    setAppState({ ...appState, navIsOpen: visible });
  };

  const HelperContextValue: IContextState = {
    quoteItem: QuoteInfo,
    portItem: ProjectList,
    routeItem: RouteInfo,
  };

  return (
    <ContextProvider state={HelperContextValue}>
      <div className="min-h-screen text-center bg-gray-700">
        <Router>
          <Navigation
            navIsOpen={appState.navIsOpen}
            toggleNav={toggleNav}
            name="Edward 'Eddie' Jostell"
            navLinks={NavigationLinks}
          />
          <Container>
            {/* <RouteLinks /> */}
            <Route exact path="/" render={() => <About />} />
            <Route exact path="/Portfolio" render={() => <Portfolio />} />
            <Route exact path="/Contact" render={() => <Contact />} />
          </Container>
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
