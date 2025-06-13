import React, { FC, useContext, useState } from 'react';
import { HelperContext, IContextState } from '../../utils/HelperContext';
import { INavLinkItem } from '../../utils/data';
import { Link } from 'react-scroll';
import { scrollTop, useMediaQuery } from '../../utils/hooks';
import PDF from '../../documents/CV_Eddie_Jostell.pdf';
import { motion } from 'framer-motion';
import { NavLinksAnimation, NavNameAnimation } from './NavAnimations';
import {
  ContactLink,
  NavigationButton,
  NavigationLink,
  StyledIcon,
  StyledIconContainer,
  StyledNavigationContainer,
  StyledNavMenu,
  StyledNavMenuLink,
  StyledTopNavigation,
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
      <StyledNavigationContainer>
        <StyledNavMenu key='navigation-links' {...NavLinksAnimation}>
          {navItems}
        </StyledNavMenu>
      </StyledNavigationContainer>
    </StyledTopNavigation>
  );
};
