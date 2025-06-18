import React from 'react';
import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLinksAnimation, List } from './NavAnimations';
import { Menu, X } from 'react-feather';
import {
  StyledNavigationContainer,
  StyledNavMenu,
  MenuIconWrapper,
} from './StyledNavigationElements';
import styled from '@emotion/styled';
import { ContactSlim } from '../Contact/ContactSlim';

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

export const MobileMenuIconWrapper = styled('button')(({}) => ({
  color: '#edf2f4',
  transition: 'opacity 0.35s ease 0.65s',
  textDecoration: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  paddingBlock: '0',
  paddingInline: '0',
  borderWidth: '0',
  borderStyle: 'none',
  borderColor: 'none',
  borderImage: 'none',
  position: 'absolute',
  top: '0.5rem',
  right: '0.5rem',
}));

const ContactLinksContainer = styled('div')(({}) => ({
  position: 'absolute',
  bottom: '0',
}));

interface MobileNavigationProps {
  navIsOpen: boolean;
  toggleNav: (visible: boolean) => void;
  status?: string;

  navItems: React.ReactNode | React.ReactNode[];
}

export const MobileNavigation: FC<MobileNavigationProps> = ({
  navIsOpen,
  navItems,
  toggleNav,
}) => {
  return (
    <>
      <StyledNavigationContainer>
        <StyledNavMenu key='navigation-links' {...NavLinksAnimation}>
          <MenuIconWrapper onClick={() => toggleNav(!navIsOpen)}>
            <Menu size={52} />
          </MenuIconWrapper>
        </StyledNavMenu>
      </StyledNavigationContainer>
      <AnimatePresence>
        {navIsOpen && (
          <MobileLinksContainer
            initial='hidden'
            animate='visible'
            variants={List}
          >
            <MobileMenuIconWrapper onClick={() => toggleNav(!navIsOpen)}>
              <X aria-label='Close menu' size={42} />
            </MobileMenuIconWrapper>

            <MobileNavList>{navItems}</MobileNavList>
            {/*  <ContactLinksContainer>
            <ContactSlim icons={true} />
            </ContactLinksContainer> */}
          </MobileLinksContainer>
        )}
      </AnimatePresence>
    </>
  );
};

//Put a hamburger cross icon in the top right corner of the mobile link nav
//that is seperate from the hamburger menu icon
