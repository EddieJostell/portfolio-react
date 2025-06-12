import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import { HelperContext, IContextState } from '../../utils/HelperContext';
import { INavLinkItem } from '../../utils/data';
import { Link } from 'react-scroll';

interface IDesktopNavigationProps {
  name: string;
  navIsOpen: boolean;
  toggleNav: (visible: boolean) => void;
  status?: string;
  toggleContact: () => void;
}

const StyledDesktopNavigation = styled('div')(({}) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'right',
  alignItems: 'center',
}));

const StyledIconContainer = styled('div')(({}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

const StyledIcon = styled('a')(({}) => ({
  fontSize: '4rem',
  fontFamily: "'Diplomata', cursive",
  color: '#edf2f4',
  transition: 'opacity 0.35s ease 0.65s',
  textDecoration: 'none',
  cursor: 'pointer',
}));

const StyledNavigationContainer = styled('nav')(({}) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const StyledNavMenu = styled('ul')(({}) => ({
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  margin: 0,
  padding: 0,
}));

const StyledNavMenuLink = styled('li')(({}) => ({
  position: 'relative',
  margin: '1rem',
  listStyleType: 'none',
  cursor: 'pointer',
  fontFamily: "'Goldman', Times New Roman, Times, serif",
}));

const NavigationLink = styled(Link)(({}) => ({
  fontSize: '1.5rem',
  lineHeight: '2rem',
  listStyleType: 'none',
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#edf2f4',
}));

export const DesktopNavigation: FC<IDesktopNavigationProps> = ({
  name,
  navIsOpen,
  status,
  toggleNav,
  toggleContact,
}) => {
  const contextObject = useContext<IContextState>(HelperContext);

  const NavItems = contextObject.navLinkItem.map((item: INavLinkItem) => {
    return (
      <StyledNavMenuLink>
        <NavigationLink
          offset={item.scrollId === 'portfolio' ? -30 : -90}
          to={item.scrollId}
          spy={true}
          smooth={true}
          duration={1000}
          href='#'
          //onClick={toggleMobileNav}

          key={item.id}
        >
          {item.text}
        </NavigationLink>
      </StyledNavMenuLink>
    );
  });

  return (
    <StyledDesktopNavigation>
      <StyledIconContainer>
        <StyledIcon href='#'>{name}</StyledIcon>
      </StyledIconContainer>
      <StyledNavigationContainer>
        <StyledNavMenu>{NavItems}</StyledNavMenu>
      </StyledNavigationContainer>
    </StyledDesktopNavigation>
  );
};

/*  switch (item.type) {
      case 'button':
        return (
          <div key={item.id} className='NavList-item'>
            <span className='link' onClick={handleStuff}>
              {item.text}
            </span>
          </div>
        );
      case 'external':
        return (
          <div key={item.id} className='NavList-item'>
            <a
              href={'https://www.google.com'}
              className='resume'
              onClick={showResumeOnClick}
              target='_blank'
              rel='noopener noreferrer'
            >
              {item.text}
            </a>
          </div>
        );
      default:
        return (
          <div key={item.id} className='NavList-item'>
            <Link
              className='link'
              offset={item.scrollId === 'portfolio' ? -30 : -90}
              to={item.scrollId}
              spy={true}
              smooth={true}
              duration={1000}
              onClick={toggleMobileNav}
            >
              {item.text}
            </Link>
          </div>
        );
    } */
