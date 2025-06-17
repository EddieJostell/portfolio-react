import React, { FC } from 'react';

import { NavLinksAnimation } from './NavAnimations';
import {
  StyledNavigationContainer,
  StyledNavMenu,
} from './StyledNavigationElements';

interface IDesktopNavigationProps {
  name: string;
  status?: string;

  navItems: React.ReactNode | React.ReactNode[];
}

export const DesktopNavigation: FC<IDesktopNavigationProps> = ({
  name,
  navItems,
}) => {
  return (
    <StyledNavigationContainer>
      <StyledNavMenu key='navigation-links' {...NavLinksAnimation}>
        {navItems}
      </StyledNavMenu>
    </StyledNavigationContainer>
  );
};
