import { AnimatePresence, motion } from 'framer-motion';
import React, { Fragment, useState } from 'react';
import { Link } from 'react-scroll';
import { INavLinkItem } from '../../utils/data';
import { isMobileMax } from '../../utils/userAgent';
import { ContactSlim } from '../Contact/ContactSlim';
import { Items, List } from './NavAnimations';

export interface INavListProps {
  navListItems: INavLinkItem[];
  toggleNav: (visible: boolean) => void;
  navIsOpen: boolean;
  toggleContact: () => void;
}

export const NavList = (props: INavListProps) => {
  const { toggleNav, navListItems, navIsOpen, toggleContact } = props;
  const [IsVisible, setIsVisible] = useState(false);

  const handleStuff = () => {
    setIsVisible(!IsVisible);
    toggleContact();
  };

  const mobileNavItems = () => {
    return navListItems.map((item: INavLinkItem) => (
      <div key={item.id} className='NavList-item'>
        {item.scrollId === 'contact' ? (
          <span className='link' onClick={handleStuff}>
            {item.text}
          </span>
        ) : (
          <Link
            className='link'
            to={item.scrollId}
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => toggleNav(!navIsOpen)}
          >
            {item.text}
          </Link>
        )}
      </div>
    ));
  };

  const desktopNavItems = () => {
    return navListItems.map((item: INavLinkItem) => (
      <div key={item.id} className='NavList-item'>
        {item.scrollId === 'contact' ? (
          <span className='link' onClick={toggleContact}>
            {item.text}
          </span>
        ) : (
          <Link
            className='link'
            to={item.scrollId}
            spy={true}
            smooth={true}
            duration={1000}
          >
            {item.text}
          </Link>
        )}
      </div>
    ));
  };

  const renderLinks = () => {
    if (isMobileMax) {
      return <div className='NavList-desktop'>{desktopNavItems()}</div>;
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
                {mobileNavItems()}
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

// Remove tailwind and write SASS
//font-sans text-2xl list-none cursor-pointer text-gray hover:text-white active:text-white visited:text-white
