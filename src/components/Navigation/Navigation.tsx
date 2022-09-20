import React, { useEffect, useState } from 'react';
import { INavLinkItem } from '../../utils/data';
import { NavList } from './NavList';
import { isMobileMax } from '../../utils/userAgent';
import './Navigation.scss';
//import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavLinksAnimation, NavNameAnimation } from './NavAnimations';

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
  const [toggleScrollBtn, setToggleScrollBtn] = useState(false);

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

  const menuIsScrolling = () => {
    if (window.scrollY > 50) {
      setToggleScrollBtn(true);
    } else if (window.scrollY <= 50) {
      setToggleScrollBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', menuIsScrolling);

    return () => {
      window.removeEventListener('scroll', menuIsScrolling);
    };
  }, []);

  return (
    <div
      className={`${
        toggleScrollBtn ? 'Navigation Navigation-sticky' : 'Navigation'
      }`}
      data-testid='navigation'
    >
      <div className='Container'>
        <div className='Navigation-wrapper'>
          {!navIsOpen ? (
            <motion.div key='navigation-name' {...NavNameAnimation}>
              <a
                className='Navigation-name'
                href='https://www.youtube.com/watch?v=1bG8WcFk17Y'
                target='_blank'
                rel='noreferrer'
              >
                {name}
              </a>
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
