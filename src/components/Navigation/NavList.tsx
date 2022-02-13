import React, { Fragment } from 'react';
/* import { Link } from 'react-router-dom'; */
import { Link } from 'react-scroll';
import { INavLinkItem } from '../../utils/data';
import { isMobileMax } from '../../utils/userAgent';
import ContactSlim from '../Contact/ContactSlim';

export interface INavListProps {
  navListItems: INavLinkItem[];
  toggleNav: (visible: boolean) => void;
}

export const NavList = (props: INavListProps) => {
  const { toggleNav, navListItems } = props;

  const showContact = () => {
    alert('Contact Component here');
  };

  const mobileNavItems = () => {
    return navListItems.map((item: INavLinkItem) => (
      <li key={item.id} className="NavList-item">
        {item.scrollId === 'contact' ? (
          <span className="link" onClick={showContact}>
            {item.text}
          </span>
        ) : (
          <Link
            className="link"
            to={item.scrollId}
            spy={true}
            smooth={true}
            duration={600}
            onClick={() => toggleNav(false)}
          >
            {item.text}
          </Link>
        )}
      </li>
    ));
  };

  const desktopNavItems = () => {
    return navListItems.map((item: INavLinkItem) => (
      <li key={item.id} className="NavList-item">
        {item.scrollId === 'contact' ? (
          <span className="link" onClick={showContact}>
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
          <ul className="NavList-container">
            {mobileNavItems()}
            <div className="absolute bottom-10">
              <ContactSlim />
            </div>
          </ul>
        </div>
      );
    }
  };

  return <Fragment>{renderLinks()}</Fragment>;
};

export default NavList;

// Remove tailwind and write SASS
//font-sans text-2xl list-none cursor-pointer text-gray hover:text-white active:text-white visited:text-white
