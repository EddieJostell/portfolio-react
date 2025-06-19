import React, { useEffect, useRef } from 'react';
import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { List } from '../NavAnimations';
import { Menu, X } from 'react-feather';
import {
  StyledNavigationContainer,
  StyledNavMenu,
  MenuIconWrapper,
} from '../StyledNavigationElements';
import styled from '@emotion/styled';
import { ContactSlim } from '../../Contact/ContactSlim';

const MobileLinksContainer = styled(motion.div)(({}) => ({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  minHeight: '100%',
  zIndex: '10',
  backgroundColor: '#000',
  opacity: '0.9',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: '14rem',
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

const MobileMenuTopContainer = styled('div')(({}) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

const MobileMenuIconWrapper = styled('button')(({}) => ({
  color: '#edf2f4',
  transition: 'opacity 0.35s ease 0.65s',
  textDecoration: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  margin: '1rem 1rem 0 0',
  paddingBlock: '0',
  paddingInline: '0',
  borderWidth: '0',
  borderStyle: 'none',
  borderColor: 'none',
  borderImage: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  // Remove default outline
  '&:focus': {
    outline: 'none',
  },

  // Apply custom outline only for keyboard navigation
  '&:focus-visible': {
    outline: '1px solid white',
    outlineOffset: '1px',
    /*   boxShadow: '0 0 0 4px rgba(52, 152, 219, 0.5)', */
  },
}));

const ContactLinksContainer = styled('div')(({}) => ({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '1rem',
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
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (navIsOpen && closeButtonRef.current) {
      document.body.classList.add('no-scroll');

      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 10);
    }

    // Only add keyboard listener when navigation is open
    if (!navIsOpen) return;

    // Handle escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleNav(false);
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.body.style.paddingRight = '';
      document.body.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [navIsOpen, toggleNav]);

  return (
    <>
      <StyledNavigationContainer data-testid='mobile-navigation'>
        {!navIsOpen && (
          <StyledNavMenu>
            <MenuIconWrapper
              onClick={() => toggleNav(!navIsOpen)}
              aria-label='Open menu'
              aria-expanded={false}
            >
              <Menu size={52} />
            </MenuIconWrapper>
          </StyledNavMenu>
        )}
      </StyledNavigationContainer>
      <AnimatePresence>
        {navIsOpen && (
          <MobileLinksContainer
            aria-label='Mobile Navigation'
            data-testid='mobile-links-container'
            initial='hidden'
            animate='visible'
            variants={List}
          >
            <MobileMenuTopContainer>
              <MobileMenuIconWrapper
                onClick={() => toggleNav(!navIsOpen)}
                aria-label='Close menu'
                aria-expanded={true}
                ref={closeButtonRef}
              >
                <X size={52} />
              </MobileMenuIconWrapper>
            </MobileMenuTopContainer>

            <MobileNavList>{navItems}</MobileNavList>
            <ContactLinksContainer>
              <ContactSlim icons={true} />
            </ContactLinksContainer>
          </MobileLinksContainer>
        )}
      </AnimatePresence>
    </>
  );
};

//Swap the skeleton of the MobileLinksContainer with the html dialog element
