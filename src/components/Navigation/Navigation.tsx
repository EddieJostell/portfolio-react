import React from 'react';
import { INavLinkItem } from '../../utils/data';
import { NavList } from './NavList';
import { isMobileMax } from '../../utils/userAgent';
import './Navigation.scss';
//import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

export const Navigation = (props: INavProps) => {
  const { name, navIsOpen, toggleNav, navLinks, toggleContact } = props;

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
    <div className='Navigation' data-testid='navigation'>
      <div className='Container'>
        <div className='Navigation-wrapper'>
          {!navIsOpen ? (
            <motion.div
              initial={{ x: -300, opacity: 0, scale: 0 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.1 }}
            >
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
          <motion.div
            initial={{ x: 1000, opacity: 0, scale: 0 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.1 }}
          >
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
