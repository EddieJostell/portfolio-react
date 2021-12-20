import React from 'react';
import iconX from '../../Icons/x.svg';
import iconMenu from '../../Icons/menu.svg';
import { INavLinkItem } from '../../utils/data';
import { NavList } from './NavList';
import { isMobileMax } from '../../utils/userAgent';
import './Navigation.scss';

interface INavProps {
  name: string;
  navIsOpen: boolean;
  toggleNav: (visible: boolean) => void;
  status?: string;
  navLinks: INavLinkItem[];
}

const defaultProps: Partial<INavProps> = {
  status: '12315',
};

const Navigation = (props: INavProps) => {
  const { name, navIsOpen, toggleNav, navLinks } = props;

  return (
    <div className="Navigation" data-testid="navigation">
      <div className="container px-5 mx-auto">
        <div className="Navigation-wrapper">
          <div className="z-20 text-base sm:text-3xl Navigation-name">
            {!navIsOpen && <span>{name}</span>}
          </div>
          <div className="Links">
            {isMobileMax ? (
              <NavList toggleNav={toggleNav} navListItems={navLinks} />
            ) : navIsOpen ? (
              <div onClick={() => toggleNav(false)}>
                <img
                  alt="close"
                  className="w-6 h-6 cursor-pointer cross sm:w-8 sm:h-8"
                  src={iconX}
                />
              </div>
            ) : (
              <div onClick={() => toggleNav(true)}>
                <img
                  alt="menu"
                  className="w-6 h-6 cursor-pointer menu sm:w-8 sm:h-8"
                  src={iconMenu}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {!isMobileMax
        ? navIsOpen && <NavList toggleNav={toggleNav} navListItems={navLinks} />
        : ''}
    </div>
  );
};

export default Navigation;

Navigation.defaultProps = defaultProps;

//border-red-500 border-opacity-100

//Change the navbar to house the links at the top for desktop
//then have them hidden with hamburger for phone size.

{
  /* <div aria-label="Mobile Menu" className="Links-menu">
  <span className="menu-trigger">
    <i className="menu-trigger-bar top"></i>
    <i className="menu-trigger-bar middle"></i>
    <i className="menu-trigger-bar bottom"></i>
  </span>
</div>;
 */
}

//Menu bars from Riccardo Z
