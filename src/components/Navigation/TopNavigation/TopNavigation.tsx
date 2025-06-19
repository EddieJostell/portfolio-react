import React, { FC, useContext, useEffect, useState } from 'react';
import { INavLinkItem } from '../../../utils/data';
import styled from '@emotion/styled';
import { scrollTop, useHidescroll, useMediaQuery } from '../../../utils/hooks';
import { Container } from '../../Container/Container';
import { DesktopNavigation } from '../DesktopNavigation/DesktopNavigation';
import { HelperContext, IContextState } from '../../../utils/HelperContext';
import PDF from '../../../documents/CV_Eddie_Jostell.pdf';
import { MobileNavigation } from '../MobileNavigation/MobileNavigation';
import {
  StyledNavMenuLink,
  ContactLink,
  NavigationButton,
  NavigationLink,
  StyledIcon,
  StyledIconContainer,
  StyledTopNavigation,
} from '../StyledNavigationElements';
import { NavNameAnimation } from '../NavAnimations';
import { motion } from 'framer-motion';

interface INavProps {
  name: string;
  navIsOpen: boolean;
  toggleNav: (visible: boolean) => void;
  status?: string;
  toggleContact: () => void;
}

const StyledNavigation = styled('header')(({}) => ({
  padding: '0 1rem',
  position: 'fixed',
  top: 0,
  left: '0',
  right: '0',
  height: '5rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  zIndex: '50',
  color: '#edf2f4',
  backgroundColor: '#1c1d24',
  backgroundImage: `linear-gradient(
    to right bottom,
    #151617,
    #131415,
    #111213,
    #0f1011,
    #0d0e0e,
    #0d0e0e,
    #0c0d0e,
    #0c0d0e,
    #0f0f10,
    #111112,
    #131314,
    #151516
  )`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundAttachment: 'fixed',
  transition: 'transform 300ms ease',
}));

export const TopNavigation: FC<INavProps> = ({
  name,
  navIsOpen,
  toggleContact,
  toggleNav,
}) => {
  const contextObject = useContext<IContextState>(HelperContext);
  const mobileMinWidth = useMediaQuery('(max-width: 768px)');

  const showResumeOnClick = () => {
    window.open(PDF);
  };

  const handleKeyDown = (e: React.KeyboardEvent<Element>) => {
    if (e.code === 'Space') {
      e.preventDefault();
    }
  };

  const toggleMobileNav = () => {
    mobileMinWidth && toggleNav(!navIsOpen);
  };

  const navItems = contextObject.navLinkItem.map((item: INavLinkItem) => {
    switch (item.type) {
      case 'button':
        return (
          <StyledNavMenuLink key={item.id}>
            <ContactLink
              aria-label={item.ariaLabel}
              onKeyDown={handleKeyDown}
              onClick={toggleContact}
            >
              {item.text}
            </ContactLink>
          </StyledNavMenuLink>
        );
      case 'external':
        return (
          <StyledNavMenuLink key={item.id}>
            <NavigationButton
              aria-label={item.ariaLabel}
              type='button'
              tabIndex={0}
              onClick={showResumeOnClick}
            >
              {item.text}
            </NavigationButton>
          </StyledNavMenuLink>
        );

      default:
        return (
          <StyledNavMenuLink key={item.id}>
            <NavigationLink
              aria-label={item.ariaLabel}
              offset={-60}
              to={item.scrollId}
              spy={true}
              smooth={true}
              duration={1000}
              href='#'
              onClick={toggleMobileNav}
              onKeyDown={handleKeyDown}
            >
              {item.text}
            </NavigationLink>
          </StyledNavMenuLink>
        );
    }
  });

  return (
    <StyledNavigation data-testid='navigation'>
      <Container>
        <StyledTopNavigation>
          <StyledIconContainer>
            <motion.div key='navigation-name' {...NavNameAnimation}>
              <StyledIcon
                type='button'
                aria-label='CreatorLogo press to scroll to top of the page'
                onClick={scrollTop}
              >
                {name}
              </StyledIcon>
            </motion.div>
          </StyledIconContainer>
          {mobileMinWidth ? (
            <MobileNavigation
              navIsOpen={navIsOpen}
              toggleNav={toggleNav}
              navItems={navItems}
            />
          ) : (
            <DesktopNavigation navItems={navItems} />
          )}
        </StyledTopNavigation>
      </Container>
    </StyledNavigation>
  );
};
