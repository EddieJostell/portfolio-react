import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { IQuoteItem, ProjectList, QuoteInfo } from './utils/data';
import { QuoteProvider } from './utils/HelperContext';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
    <div className="min-h-screen text-center">
      <QuoteProvider value={appState.quoteList}>
        <Router>
          <Navigation
            navIsOpen={appState.navIsOpen}
            toggleNav={toggleNav}
            name="Edward 'Eddie' Jostell"
          />

          {/*  <Route exact path="/" component={About} /> */}
          {/* <Route path="/About" render={() => <About />} /> */}
          {/*  <Route
              path="/Portfolio"
              render={() => <Portfolio data={appState.projectList} />}
            />
            <Route path="/Contact" render={() => <Contact />} /> */}
        </Router>
      </QuoteProvider>
    </div>
  );
}

export default App;

{
  /*     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
}
