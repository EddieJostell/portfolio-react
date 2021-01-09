/* import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Container from './components/Container/Container';
import About from './components/About/About';
import Home from './components/Home/Home';
import './App.scss';
import Portfolio from './components/Portfolio/Portfolio';
//import Route from "./utils/Route";
import Contact from './components/Contact/Contact';
import { QuoteProvider } from './utils/HelperContext';
import { ProjectList, IQuoteItem, QuoteInfo } from './utils/data';

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
      <Router>
        <div className="App">
          <Navigation
            navIsOpen={appState.navIsOpen}
            toggleNav={toggleNav}
            name="Edward 'Eddie' Jostell"
          />
          <Container>
            <Route exact path="/" component={About} />
            {/* <Route path="/About" render={() => <About />} /> */}
            <Route
              path="/Portfolio"
              render={() => <Portfolio data={appState.projectList} />}
            />
            <Route path="/Contact" render={() => <Contact />} />
          </Container>
        </div>
      </Router>
    </QuoteProvider>
  );

  // HelperProvider for the proper useContext...
  /*   return (
    <HelperProvider state={appState.quoteList}>
      <Router>
        <div className="App">
          <Navigation
            navIsOpen={appState.navIsOpen}
            toggleNav={toggleNav}
            name="Edward 'Eddie' Jostell"
          />
          <Container>
            <Route exact path="/" component={Home} />
            <Route path="/About" render={() => <About />} />
            <Route
              path="/Portfolio"
              render={() => <Portfolio data={appState.projectList} />}
            />
            <Route path="/Contact" render={() => <Contact />} />
          </Container>
        </div>
      </Router>
    </HelperProvider>
  ); */
}

export default App;

//https://coolors.co/000000-000a1c-13211a-44001d-ffffff
//https://coolors.co/44355b-31263e-221e22-ff4b3e-eca72c

//https://coolors.co/f26326-000000-ffffff-4a5664-fc0000
//https://coolors.co/a30002-000000-eaeaea-466365-274060

//Använd för att lista ut components
/*    array.map(() => {
        <Route />
      }) */
