import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import {
  IQuoteItem,
  ProjectList,
  QuoteInfo,
  NavigationLinks,
  IPortfolioItem,
  INavLinkItem,
} from './utils/data';
import { ContextProvider, IContextState } from './utils/HelperContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from './components/Container/Container';
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
            <RouteLinks />
          </Container>
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
