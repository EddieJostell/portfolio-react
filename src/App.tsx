import './App.scss';
import { useState, useCallback, FC, useRef } from 'react';
import { ContextProvider, initialHelperContext } from './utils/HelperContext';
import { Portfolio } from './components/Portfolio/Portfolio';
// import { Commits } from './components/Commits/Commits';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { ContactForm } from './components/Contact/ContactForm/ContactForm';
import { TopNavigation } from './components/Navigation/TopNavigation/TopNavigation';
import { scrollTop } from './utils/hooks';

interface IAppState {
  navIsOpen: boolean;
  contactIsActive: boolean;
  isLoading: boolean;
}

const App: FC = () => {
  const [appState, setAppState] = useState<IAppState>({
    navIsOpen: false,
    contactIsActive: false,
    isLoading: false,
  });
  const topNavIconRef = useRef<HTMLButtonElement>(null);

  const toggleNav = (visible: boolean) => {
    setAppState({ ...appState, navIsOpen: visible });
  };

  const toggleContact = useCallback(() => {
    setAppState({
      ...appState,
      contactIsActive: !appState.contactIsActive,
      navIsOpen: false,
    });
  }, [appState]);

  /*  useEffect(() => {
    setTimeout(() => {
      setAppState({ ...appState, isLoading: appState.isLoading });
    }, 2000);
    setAppState({ ...appState, isLoading: !appState.isLoading });
  }, []); */

  const handleScrollToTop = () => {
    console.log('scroll to top and focus');
    scrollTop();
    topNavIconRef.current?.focus();
  };

  const renderContent = () => {
    if (appState.isLoading) {
      return (
        <div className='Name-wrapper'>
          <div className='loader-letter'>E</div>
        </div>
      );
    }

    if (appState.contactIsActive) {
      return <ContactForm toggleContact={toggleContact} />;
    }

    return (
      <>
        <Home />
        <About />
        <Portfolio />
        {/* <Commits /> */}
        <Footer handleScrollToTop={handleScrollToTop} />
      </>
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
          topNavIconRef={topNavIconRef}
        />
      )}

      <div className='App' data-testid='application'>
        {renderContent()}
      </div>
    </ContextProvider>
  );
};

export default App;
