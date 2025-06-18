import './App.scss';
import { useState, useCallback, Fragment } from 'react';
import { ContextProvider, initialHelperContext } from './utils/HelperContext';
import { ContactSlim } from './components/Contact/ContactSlim';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { ContactForm } from './components/Contact/ContactForm/ContactForm';
import { useMediaQuery } from './utils/hooks';
import { TopNavigation } from './components/Navigation/TopNavigation/TopNavigation';

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
      <div className='Name-wrapper'>
        <div className='loader-letter'>E</div>
      </div>
    );
  };

  const minComputerWidth = useMediaQuery('(min-width: 992px)');

  return (
    <ContextProvider state={initialHelperContext}>
      <header>
        {!appState.contactIsActive && (
          <TopNavigation
            navIsOpen={appState.navIsOpen}
            toggleNav={toggleNav}
            name='E'
            toggleContact={toggleContact}
          />
        )}
      </header>
      <div className='App' data-testid='application'>
        {appState.isLoading ? (
          displayLoader()
        ) : (
          <Fragment>
            {!appState.contactIsActive ? (
              [
                <Home key='1' />,
                <About key='2' />,
                <Portfolio key='3' />,
                minComputerWidth && <ContactSlim icons={true} key='4' />,
                <Footer key='5' />,
              ]
            ) : (
              <ContactForm key='6' toggleContact={toggleContact} />
            )}
          </Fragment>
        )}
      </div>
    </ContextProvider>
  );
}

export default App;
