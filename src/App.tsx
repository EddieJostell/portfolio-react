import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import {
  IQuoteItem,
  ProjectList,
  QuoteInfo,
  NavigationLinks,
} from './utils/data';
import { QuoteProvider } from './utils/HelperContext';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from './components/Container/Container';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

export interface IPropertyState {
  quoteItem: IQuoteItem[];
}

function App() {
  const [appState, setAppState] = useState({
    navIsOpen: false,
    quoteList: QuoteInfo,
    projectList: ProjectList,
  });

  const toggleNav = (visible: boolean) => {
    setAppState({ ...appState, navIsOpen: visible });
  };

  return (
    <QuoteProvider value={appState.quoteList}>
      <div className="min-h-screen text-center bg-gray-700">
        <Router>
          <Navigation
            navIsOpen={appState.navIsOpen}
            toggleNav={toggleNav}
            name="Edward 'Eddie' Jostell"
            navLinks={NavigationLinks}
          />
          <Container>
            {/*  <h1 className="text-6xl text-orange">HELLO WORLD</h1> */}
            <Route exact path="/" render={() => <About />} />
            {/*  <Route
            exact
              path="/Portfolio"
              render={() => <Portfolio data={appState.projectList} />}
            /> */}
            <Route exact path="/Contact" render={() => <Contact />} />
          </Container>
        </Router>
      </div>
    </QuoteProvider>
  );
}

export default App;
