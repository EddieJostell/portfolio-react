import React, { FC } from 'react';

import { NavLinksAnimation } from './NavAnimations';
import {
  StyledNavigationContainer,
  StyledNavMenu,
} from './StyledNavigationElements';

interface IDesktopNavigationProps {
  status?: string;

  navItems: React.ReactNode | React.ReactNode[];
}

export const DesktopNavigation: FC<IDesktopNavigationProps> = ({
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
