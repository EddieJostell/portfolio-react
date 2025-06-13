import React from 'react';
import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { scrollTop } from '../../utils/hooks';
import { NavNameAnimation, NavLinksAnimation, List } from './NavAnimations';
import {
  StyledTopNavigation,
  StyledIconContainer,
  StyledIcon,
  StyledNavigationContainer,
  StyledNavMenu,
  HamburgerMenuIcon,
  HamburgerMenuIcon2,
} from './StyledNavigationElements';
import styled from '@emotion/styled';
import { ContactSlim } from '../Contact/ContactSlim';

interface MobileNavigationProps {
  name: string;
  navIsOpen: boolean;
  toggleNav: (visible: boolean) => void;
  status?: string;

  navItems: React.ReactNode | React.ReactNode[];
}

const MobileLinksContainer = styled(motion.div)(({}) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: '10',
  width: '100%',
  height: '100vh',
  backgroundColor: '#000',
  opacity: '0.9',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '14rem',
  border: '1px solid #edf2f4',
}));

const MobileNavList = styled('ul')(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  zIndex: 12,
}));

const ContactLinksContainer = styled('div')(({}) => ({
  position: 'absolute',
  bottom: '0',
}));

export const MobileNavigation: FC<MobileNavigationProps> = ({
  name,
  navIsOpen,
  navItems,
  toggleNav,
}) => {
  return (
    <StyledTopNavigation>
      <StyledIconContainer>
        <motion.div key='navigation-name' {...NavNameAnimation}>
          <StyledIcon
            aria-label='CreatorLogo press to scroll to top of the page'
            onClick={scrollTop}
          >
            {name}
          </StyledIcon>
        </motion.div>
      </StyledIconContainer>
      <StyledNavigationContainer>
        <StyledNavMenu key='navigation-links' {...NavLinksAnimation}>
          <HamburgerMenuIcon
            isOpen={navIsOpen}
            onClick={() => toggleNav(!navIsOpen)}
          />
        </StyledNavMenu>
      </StyledNavigationContainer>
      <AnimatePresence>
        {navIsOpen && (
          <MobileLinksContainer
            initial='hidden'
            animate='visible'
            variants={List}
          >
            <HamburgerMenuIcon2
              isOpen={true}
              onClick={() => toggleNav(!navIsOpen)}
            />
            <MobileNavList>{navItems}</MobileNavList>
            {/*  <ContactLinksContainer>
            <ContactSlim icons={true} />
            </ContactLinksContainer> */}
          </MobileLinksContainer>
        )}

        {navIsOpen && (
          <MobileLinksContainer
            initial='hidden'
            animate='visible'
            variants={List}
          >
            <MobileNavList>{navItems}</MobileNavList>
            {/*  <ContactLinksContainer>
              <ContactSlim icons={true} />
              </ContactLinksContainer> */}
          </MobileLinksContainer>
        )}
      </AnimatePresence>
    </StyledTopNavigation>
  );
};

//Put a hamburger cross icon in the top right corner of the mobile link nav
//that is seperate from the hamburger menu icon
