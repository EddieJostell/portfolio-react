import './App.scss';
import { useState, useCallback, Fragment, FC } from 'react';
import { ContextProvider, initialHelperContext } from './utils/HelperContext';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { ContactForm } from './components/Contact/ContactForm/ContactForm';
import { TopNavigation } from './components/Navigation/TopNavigation/TopNavigation';

interface IAppState {
  navIsOpen: boolean;
  contactIsActive: boolean;
  isLoading: boolean;
}

const App: FC<IAppState> = ({}) => {
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

  return (
    <ContextProvider state={initialHelperContext}>
      {!appState.contactIsActive && (
        <TopNavigation
          navIsOpen={appState.navIsOpen}
          toggleNav={toggleNav}
          name='E'
          toggleContact={toggleContact}
        />
      )}

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
                <Footer key='4' />,
              ]
            ) : (
              <ContactForm key='6' toggleContact={toggleContact} />
            )}
          </Fragment>
        )}
      </div>
    </ContextProvider>
  );
};

export default App;
