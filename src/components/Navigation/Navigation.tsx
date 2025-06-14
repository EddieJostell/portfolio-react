import React, { FC, useEffect, useState } from 'react';
import { INavLinkItem } from '../../utils/data';
import { NavList } from './NavList';
import './Navigation.scss';
//import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavLinksAnimation, NavNameAnimation } from './NavAnimations';
import useScrollListener from '../../utils/useScrollListener';
import { Link } from 'react-scroll';
import { useMediaQuery } from '../../utils/hooks';

interface INavProps {
  name: string;
  navIsOpen: boolean;
  toggleNav: (visible: boolean) => void;
  status?: string;
  navLinks: INavLinkItem[];
  toggleContact: () => void;
}

export const Navigation: FC<INavProps> = ({
  name,
  navIsOpen,
  navLinks,
  toggleContact,
  toggleNav,
}) => {
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

  const mobileMaxWidth = useMediaQuery('(min-width: 767px)');

  return (
    <div
      className={`Navigation ${navClassList.join('')}`}
      data-testid='navigation'
    >
      <div className='Container'>
        <div className='Navigation-wrapper'>
          {!navIsOpen ? (
            <motion.div key='navigation-name' {...NavNameAnimation}>
              <Link
                className='Navigation-name'
                to={'home'}
                offset={-80}
                spy={true}
                smooth={true}
                duration={1000}
              >
                {name}
              </Link>
              {/*  <div className='Navigation-name'>{name}</div> */}
            </motion.div>
          ) : (
            <div />
          )}
          <motion.div key='navigation-links' {...NavLinksAnimation}>
            <div className='Links'>
              {mobileMaxWidth ? (
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
      {!mobileMaxWidth
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
