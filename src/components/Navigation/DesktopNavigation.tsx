import React, { FC, useContext, useState } from 'react';
import styled from '@emotion/styled';
import { HelperContext, IContextState } from '../../utils/HelperContext';
import { INavLinkItem } from '../../utils/data';
import { Link } from 'react-scroll';
import { useMediaQuery } from '../../utils/hooks';
import PDF from '../../documents/CV_Eddie_Jostell.pdf';

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
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const StyledIconContainer = styled('div')(({}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

const StyledIcon = styled('a')(({}) => ({
  fontSize: '3rem',
  fontFamily: "'Diplomata', cursive",
  color: '#edf2f4',
  transition: 'opacity 0.35s ease 0.65s',
  textDecoration: 'none',
  cursor: 'pointer',
}));

const StyledNavigationContainer = styled('nav')(({}) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const StyledNavMenu = styled('ul')(({}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
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
  position: 'relative',

  '&:hover, &:active, &:visited': {
    color: '#fff',
  },

  '&:after': {
    bottom: '-4px',
    content: '""',
    display: 'block',
    height: '2px',
    left: '50%',
    position: 'absolute',
    background: '#d90429',
    transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
    width: '0',
  },

  '&:hover:after': {
    width: '100%',
    left: '0',
  },
}));

const ContactLink = styled('button')(({}) => ({
  fontFamily: "'Goldman', Times New Roman, Times, serif",
  backgroundColor: 'transparent',
  fontSize: '1.5rem',
  lineHeight: '2rem',
  listStyleType: 'none',
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#edf2f4',
  position: 'relative',
  paddingBlock: '0',
  paddingInline: '0',
  borderWidth: '0',
  borderStyle: 'none',
  borderColor: 'none',
  borderImage: 'none',

  '&:hover, &:active, &:visited': {
    color: '#fff',
  },

  '&:after': {
    bottom: '-4px',
    content: '""',
    display: 'block',
    height: '2px',
    left: '50%',
    position: 'absolute',
    background: '#d90429',
    transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
    width: '0',
  },

  '&:hover:after': {
    width: '100%',
    left: '0',
  },
}));

const NavigationButton = styled('button')(({}) => ({
  backgroundColor: 'transparent',
  fontSize: '1rem',
  lineHeight: '2rem',
  listStyleType: 'none',
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#d90429',
  border: '1px solid #d90429',
  borderRadius: '5px',
  padding: '8px',
  margin: '0',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  '&:hover, &:active': {
    backgroundColor: 'rgba(217, 4, 41, 0.2)',
    color: '#d90429',
    outline: 'none',
  },
}));

export const DesktopNavigation: FC<IDesktopNavigationProps> = ({
  name,
  navIsOpen,
  toggleNav,
  toggleContact,
}) => {
  const contextObject = useContext<IContextState>(HelperContext);
  const [IsVisible, setIsVisible] = useState(false);
  //const mobileMaxWidth = useMediaQuery('(min-width: 767px)');
  const mobielMinWidth = useMediaQuery('(max-width: 768px)');

  const handleStuff = () => {
    if (mobielMinWidth) {
      setIsVisible(!IsVisible);
    }
    toggleContact();
  };

  const toggleMobileNav = () => {
    mobielMinWidth && toggleNav(!navIsOpen);
  };

  const showResumeOnClick = () => {
    window.open(PDF);
  };

  const NavItems = contextObject.navLinkItem.map((item: INavLinkItem) => {
    switch (item.type) {
      case 'button':
        return (
          <StyledNavMenuLink key={item.id}>
            <ContactLink onClick={handleStuff}>{item.text}</ContactLink>
          </StyledNavMenuLink>
        );
      case 'external':
        return (
          <StyledNavMenuLink key={item.id}>
            <NavigationButton tabIndex={0} onClick={showResumeOnClick}>
              {item.text}
            </NavigationButton>
          </StyledNavMenuLink>
        );

      default:
        return (
          <StyledNavMenuLink key={item.id}>
            <NavigationLink
              offset={item.scrollId === 'portfolio' ? -30 : -90}
              to={item.scrollId}
              spy={true}
              smooth={true}
              duration={1000}
              href='#'
              onClick={toggleMobileNav}
            >
              {item.text}
            </NavigationLink>
          </StyledNavMenuLink>
        );
    }
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

/* switch (item.type) {
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
