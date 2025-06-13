import { AnimatePresence, motion } from 'framer-motion';
import { Fragment, use, useState } from 'react';
import { Link } from 'react-scroll';
import { INavLinkItem } from '../../utils/data';
import { ContactSlim } from '../Contact/ContactSlim';
import { Items, List } from './NavAnimations';
import PDF from '../../documents/CV_Eddie_Jostell.pdf';
import { useMediaQuery } from '../../utils/hooks';

export interface INavListProps {
  navListItems: INavLinkItem[];
  toggleNav: (visible: boolean) => void;
  navIsOpen: boolean;
  toggleContact: () => void;
}

export const NavList = (props: INavListProps) => {
  const { toggleNav, navListItems, navIsOpen, toggleContact } = props;
  const [IsVisible, setIsVisible] = useState(false);
  const mobileMaxWidth = useMediaQuery('(min-width: 767px)');
  const mobileMinWidth = useMediaQuery('(max-width: 768px)');

  const handleStuff = () => {
    if (mobileMinWidth) {
      setIsVisible(!IsVisible);
    }
    toggleContact();
  };

  const toggleMobileNav = () => {
    mobileMinWidth && toggleNav(!navIsOpen);
  };

  const showResumeOnClick = () => {
    window.open(PDF);
  };

  const NavItems = navListItems.map((item: INavLinkItem) => {
    switch (item.type) {
      case 'button':
        return (
          <div key={item.id} className='NavList-item'>
            <span className='link' onClick={handleStuff}>
              {item.text}
            </span>
          </div>
        );
      case 'external':
        return (
          <div key={item.id} className='NavList-item'>
            <a
              href={'https://www.google.com'}
              className='resume'
              onClick={showResumeOnClick}
              target='_blank'
              rel='noopener noreferrer'
            >
              {item.text}
            </a>
          </div>
        );
      default:
        return (
          <div key={item.id} className='NavList-item'>
            <Link
              className='link'
              offset={item.scrollId === 'portfolio' ? -30 : -90}
              to={item.scrollId}
              spy={true}
              smooth={true}
              duration={1000}
              onClick={toggleMobileNav}
            >
              {item.text}
            </Link>
          </div>
        );
    }
  });

  const renderLinks = () => {
    if (mobileMaxWidth) {
      return <div className='NavList-desktop'>{NavItems}</div>;
    } else {
      return (
        <AnimatePresence>
          {!IsVisible && (
            <motion.div
              initial='hidden'
              animate='visible'
              variants={List}
              key='nav-mobile'
              className='NavList-mobile '
            >
              <motion.div
                key='items'
                initial='hidden'
                animate='visible'
                variants={Items}
                className='NavList-container'
              >
                {NavItems}
                <div className='NavList-contactLinks'>
                  <ContactSlim icons={true} />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      );
    }
  };

  return <Fragment>{renderLinks()}</Fragment>;
};

//font-sans text-2xl list-none cursor-pointer text-gray hover:text-white active:text-white visited:text-white
