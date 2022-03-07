import { AnimatePresence, motion } from 'framer-motion';
import React, { Fragment } from 'react';
/* import { Link } from 'react-router-dom'; */
import { Link } from 'react-scroll';
import { INavLinkItem } from '../../utils/data';
import { isMobileMax } from '../../utils/userAgent';
import { ContactSlim } from '../Contact/ContactSlim';

export interface INavListProps {
  navListItems: INavLinkItem[];
  toggleNav: (visible: boolean) => void;
  navIsOpen: boolean;
  toggleContact: () => void;
}

export const NavList = (props: INavListProps) => {
  const { toggleNav, navListItems, navIsOpen, toggleContact } = props;

  const list = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
        delay: 0.35,
        duration: 0.3,
      },
    },

    hidden: {
      opacity: 0,
      x: -300,
      transition: {
        when: 'afterChildren',
        delay: 0.3,
        duration: 0.3,
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.3 } },
    hidden: { opacity: 0, x: -300, transition: { delay: 0.3, duration: 0.3 } },
  };

  const mobileNavItems = () => {
    return navListItems.map((item: INavLinkItem) => (
      <div key={item.id} className="NavList-item">
        {item.scrollId === 'contact' ? (
          <span className="link" onClick={toggleContact}>
            {item.text}
          </span>
        ) : (
          <Link
            className="link"
            to={item.scrollId}
            spy={true}
            smooth={true}
            duration={800}
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
      <div key={item.id} className="NavList-item">
        {item.scrollId === 'contact' ? (
          <span className="link" onClick={toggleContact}>
            {item.text}
          </span>
        ) : (
          <Link
            className="link"
            to={item.scrollId}
            spy={true}
            smooth={true}
            duration={600}
          >
            {item.text}
          </Link>
        )}
      </div>
    ));
  };

  const renderLinks = () => {
    if (isMobileMax) {
      return <div className="NavList-desktop">{desktopNavItems()}</div>;
    } else {
      return (
        <AnimatePresence>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            key="nav-mobile"
            className="NavList-mobile "
          >
            <motion.div
              key="items"
              variants={item}
              className="NavList-container"
            >
              {mobileNavItems()}
              <div className="NavList-contactLinks">
                {/* <ContactSlim /> */}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      );
    }
  };

  return <Fragment>{renderLinks()}</Fragment>;
};

// Remove tailwind and write SASS
//font-sans text-2xl list-none cursor-pointer text-gray hover:text-white active:text-white visited:text-white
