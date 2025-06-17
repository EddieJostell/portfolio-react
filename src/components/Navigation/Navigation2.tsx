import React, { FC, useContext, useEffect, useState } from 'react';
import { INavLinkItem } from '../../utils/data';
import { NavList } from './NavList';
import './Navigation.scss';
import styled from '@emotion/styled';
import { scrollTop, useMediaQuery } from '../../utils/hooks';
import { Container } from '../Container/Container';
import { DesktopNavigation } from './DesktopNavigation';
import useScrollListener from '../../utils/useScrollListener';
import { HelperContext, IContextState } from '../../utils/HelperContext';
import PDF from '../../documents/CV_Eddie_Jostell.pdf';
import { MobileNavigation } from './MobileNavigation';
import {
  StyledNavMenuLink,
  ContactLink,
  NavigationButton,
  NavigationLink,
  StyledIcon,
  StyledIconContainer,
  StyledTopNavigation,
} from './StyledNavigationElements';
import { NavNameAnimation } from './NavAnimations';
import { motion } from 'framer-motion';

interface INavProps {
  name: string;
  navIsOpen: boolean;
  toggleNav: (visible: boolean) => void;
  status?: string;
  toggleContact: () => void;
}

const StyledNavigation = styled('div')(({}) => ({
  position: 'sticky',
  top: 0,
  width: '100%',
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
  transition: 'transform(150ms ease-in-out)',

  /* '&:Navigation-hidden': {
    transform: 'translateY(-100%)',
  }, */
}));

export const Navigation2: FC<INavProps> = ({
  name,
  navIsOpen,
  toggleContact,
  toggleNav,
}) => {
  const contextObject = useContext<IContextState>(HelperContext);
  const [IsVisible, setIsVisible] = useState(false);
  const [navClassList, setNavClassList] = useState<string[]>([]);
  const scroll = useScrollListener();
  const mobileMinWidth = useMediaQuery('(max-width: 768px)');

  // update classList of nav on scroll
  useEffect(() => {
    const _classList: string[] = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push('Navigation-hidden');

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  const showResumeOnClick = () => {
    console.log('showResumeOnClick');
    window.open(PDF);
  };

  const handleKeyDown = (e: React.KeyboardEvent<Element>) => {
    console.log('handleKeyDown', e.code);
    if (e.code === 'Space') {
      e.preventDefault();
    }
  };

  const toggleMobileNav = () => {
    console.log('toggleMobileNav', mobileMinWidth, navIsOpen);
    mobileMinWidth && toggleNav(!navIsOpen);
  };

  const navItems = contextObject.navLinkItem.map((item: INavLinkItem) => {
    switch (item.type) {
      case 'button':
        return (
          <StyledNavMenuLink key={item.id}>
            <ContactLink onKeyDown={handleKeyDown} onClick={toggleContact}>
              {item.text}
            </ContactLink>
          </StyledNavMenuLink>
        );
      case 'external':
        return (
          <StyledNavMenuLink key={item.id}>
            <NavigationButton
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
              offset={-90}
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
    <StyledNavigation
      data-testid='navigation'
      className={navClassList.join(' ')}
    >
      <Container>
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
          {mobileMinWidth ? (
            <MobileNavigation
              name={name}
              navIsOpen={navIsOpen}
              toggleNav={toggleNav}
              navItems={navItems}
            />
          ) : (
            <DesktopNavigation name={name} navItems={navItems} />
          )}
        </StyledTopNavigation>
      </Container>
    </StyledNavigation>
  );
};
