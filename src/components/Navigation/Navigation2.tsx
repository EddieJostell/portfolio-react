import React, { FC, useEffect, useState } from 'react';
import { INavLinkItem } from '../../utils/data';
import { NavList } from './NavList';
import './Navigation.scss';
import styled from '@emotion/styled';
import { useMediaQuery } from '../../utils/hooks';
import { Container } from '../Container/Container';
import { DesktopNavigation } from './DesktopNavigation';
import useScrollListener from '../../utils/useScrollListener';

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
  //border: '1px solid red',
}));

export const Navigation2: FC<INavProps> = ({
  name,
  navIsOpen,
  toggleContact,
  toggleNav,
}) => {
  /*   const [navClassList, setNavClassList] = useState<string[]>([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList: string[] = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push('Navigation-hidden');

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);
 */
  return (
    <StyledNavigation data-testid='navigation'>
      <Container>
        <DesktopNavigation
          name={name}
          navIsOpen={navIsOpen}
          toggleNav={toggleNav}
          toggleContact={toggleContact}
        />
      </Container>
    </StyledNavigation>
  );
};
