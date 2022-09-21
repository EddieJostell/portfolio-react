import React, { useEffect, useState } from 'react';
import { INavLinkItem } from '../../utils/data';
import { NavList } from './NavList';
import { isMobileMax } from '../../utils/userAgent';
import './Navigation.scss';
//import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavLinksAnimation, NavNameAnimation } from './NavAnimations';
import useScrollListener from '../../utils/useScrollListener';

interface INavProps {
  name: string;
  navIsOpen: boolean;
  toggleNav: (visible: boolean) => void;
  status?: string;
  navLinks: INavLinkItem[];
  toggleContact: () => void;
}

const defaultProps: Partial<INavProps> = {
  status: '12315',
};

export const Navigation = (props: INavProps): JSX.Element => {
  const { name, navIsOpen, toggleNav, navLinks, toggleContact } = props;

  const [navClassList, setNavClassList] = useState<string[]>([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList: string[] = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push('Navigation-hidden');

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  const hamburgerMenu = () => {
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
    <div
      className={`Navigation ${navClassList.join('')}`}
      data-testid='navigation'
    >
      <div className='Container'>
        <div className='Navigation-wrapper'>
          {!navIsOpen ? (
            <motion.div key='navigation-name' {...NavNameAnimation}>
              <div className='Navigation-name'>{name}</div>
            </motion.div>
          ) : (
            <div />
          )}
          <motion.div key='navigation-links' {...NavLinksAnimation}>
            <div className='Links'>
              {isMobileMax ? (
                <NavList
                  toggleNav={toggleNav}
                  navListItems={navLinks}
                  navIsOpen={navIsOpen}
                  toggleContact={toggleContact}
                />
              ) : (
                hamburgerMenu()
              )}
            </div>
          </motion.div>
        </div>
      </div>
      {!isMobileMax
        ? navIsOpen && (
            <NavList
              toggleNav={toggleNav}
              navListItems={navLinks}
              navIsOpen={navIsOpen}
              toggleContact={toggleContact}
            />
          )
        : ''}
    </div>
  );
};

Navigation.defaultProps = defaultProps;
