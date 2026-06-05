import React, { FC } from 'react';

import { NavLinksAnimation } from '../NavAnimations';
import {
  StyledNavigationContainer,
  StyledNavMenu,
} from '../StyledNavigationElements';

interface DesktopNavigationProps {
  status?: string;

  navItems: React.ReactNode | React.ReactNode[];
}

export const DesktopNavigation: FC<DesktopNavigationProps> = ({ navItems }) => {
  return (
    <StyledNavigationContainer data-testid='desktop-navigation'>
      <StyledNavMenu key='navigation-links' {...NavLinksAnimation}>
        {navItems}
      </StyledNavMenu>
    </StyledNavigationContainer>
  );
};
