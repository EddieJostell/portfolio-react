import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { INavLinkItem } from '../../utils/data';
import { isMobileMax } from '../../utils/userAgent';

export interface INavListProps {
  navListItems: INavLinkItem[];
  toggleNav: (visible: boolean) => void;
}

export const NavList = (props: INavListProps) => {
  const { toggleNav, navListItems } = props;

  const mobileNavItems = () => {
    return navListItems.map((item: INavLinkItem) => (
      <li key={item.id} className="m-4 list-none cursor-pointer">
        <Link
          className="font-sans text-5xl text-white list-none cursor-pointer sm:text-5xl hover:text-orange hover:text-6xl active:text-white visited:text-white"
          to={item.path}
          onClick={() => toggleNav(false)}
        >
          {item.text}
        </Link>
      </li>
    ));
  };

  const desktopNavItems = () => {
    return navListItems.map((item: INavLinkItem) => (
      <li key={item.id} className="m-4 list-none cursor-pointer">
        <Link
          className="font-sans text-2xl text-white list-none cursor-pointer sm:text-5xl hover:text-orange hover:text-6xl active:text-white visited:text-white"
          to={item.path}
          onClick={() => toggleNav(false)}
        >
          {item.text}
        </Link>
      </li>
    ));
  };

  const renderLinks = () => {
    if (isMobileMax) {
      return (
        <ul className="flex flex-row items-center justify-center pt-56 sm:pt-72 md:pt-80">
          {desktopNavItems()}
        </ul>
      );
    } else {
      return (
        <div className="absolute top-0 right-0 z-10 w-full min-h-screen bg-black opacity-90 ">
          <ul className="flex flex-col items-center justify-center pt-56 sm:pt-72 md:pt-80">
            {mobileNavItems()}
          </ul>
        </div>
      );
    }
  };

  return <Fragment>{renderLinks()}</Fragment>;
};

export default NavList;
