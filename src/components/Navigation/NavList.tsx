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
      <li key={item.id} className="NavList-item">
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
      </li>
    ));
  };

  const renderLinks = () => {
    if (isMobileMax) {
      return <ul className="NavList-desktop">{desktopNavItems()}</ul>;
    } else {
      return (
        <div className="NavList-mobile ">
          <div className="NavList-container">
            {mobileNavItems()}
            <div className="NavList-contactLinks">
              <ContactSlim />
            </div>
          </div>
        </div>
      );
    }
  };

  return <Fragment>{renderLinks()}</Fragment>;
};

// Remove tailwind and write SASS
//font-sans text-2xl list-none cursor-pointer text-gray hover:text-white active:text-white visited:text-white
