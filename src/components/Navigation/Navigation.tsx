import React from 'react';
import { INavLinkItem } from '../../utils/data';
import { NavList } from './NavList';
import { isMobileMax } from '../../utils/userAgent';
import './Navigation.scss';
import { Link } from 'react-router-dom';

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

  const menu = () => {
    return (
      <div
        onClick={() => toggleNav(!navIsOpen)}
        className={navIsOpen ? 'icon nav-icon-5 open' : 'icon nav-icon-5'}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  };

  return (
    <div className="Navigation" data-testid="navigation">
      <div className="container mx-auto md:px-5">
        <div className="Navigation-wrapper">
          {!navIsOpen ? (
            <Link className="Navigation-name" to="/">
              {name}
            </Link>
          ) : (
            <div />
          )}

          <div className="Links">
            {isMobileMax ? (
              <NavList toggleNav={toggleNav} navListItems={navLinks} />
            ) : (
              menu()
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
