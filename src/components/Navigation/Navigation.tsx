import React from 'react';
import iconX from '../../Icons/x.svg';
import iconMenu from '../../Icons/menu.svg';
import TopMenu from './TopMenu';
import NavList from './NavList';
import { INavLinkItem } from '../../utils/data';

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
    <>
      <TopMenu
        name={name}
        navIsOpen={navIsOpen}
        toggleNav={toggleNav}
        iconX={iconX}
        iconMenu={iconMenu}
      />
      {navIsOpen && <NavList toggleNav={toggleNav} navListItems={navLinks} />}
    </>
  );
};

export default Navigation;

Navigation.defaultProps = defaultProps;

//border-red-500 border-opacity-100
