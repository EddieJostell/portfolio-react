import React from 'react';
import { Link } from 'react-router-dom';
import { INavLinkItem } from '../../utils/data';

interface INavListProps {
  navListItems: INavLinkItem[];
  toggleNav: (visible: boolean) => void;
}

const NavList = (props: INavListProps) => {
  const { toggleNav, navListItems } = props;

  const navItem = navListItems.map((item: INavLinkItem) => (
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

  return (
    <div className="absolute top-0 right-0 z-10 w-full min-h-screen bg-black opacity-90 ">
      <ul className="flex flex-col items-center justify-center pt-56 sm:pt-72 md:pt-80">
        {navItem}
      </ul>
    </div>
  );
};

export default NavList;
