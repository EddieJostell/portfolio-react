import React, { FC } from 'react';
import { ContactSlim } from '../Contact/ContactSlim';
import { Container } from '../Container/Container';

import { childMotionProps, parentMotionProps } from './FooterAnimations';
import { useMediaQuery } from '../../utils/hooks';
import {
  StyledCreatorTag,
  StyledFooterComponent,
  StyledFooterLogo,
  StyledFooterWrapper,
  StyledScrollToTop,
} from './StyledFooterElements';

interface IFooterProps {
  handleScrollToTop: () => void;
}

export const Footer: FC<IFooterProps> = ({ handleScrollToTop }) => {
  const mobileMaxWidth = useMediaQuery('(max-width: 767px)');

  return (
    <StyledFooterComponent>
      <Container>
        <StyledFooterWrapper>
          <StyledFooterLogo
            key='Footer-wrapper-name'
            {...parentMotionProps}
            onClick={handleScrollToTop}
            aria-label='Creator Logo, Click to scroll to top of page'
          >
            E
            {!mobileMaxWidth && (
              <StyledScrollToTop key='scroll-to-top' {...childMotionProps}>
                Go to Top
              </StyledScrollToTop>
            )}
          </StyledFooterLogo>
          {mobileMaxWidth ? (
            <ContactSlim data-testid='mobile-contact' />
          ) : (
            <ContactSlim icons data-testid='desktop-contact' />
          )}
          <StyledCreatorTag>Built by Edward 'Eddie' Jostell</StyledCreatorTag>
        </StyledFooterWrapper>
      </Container>
    </StyledFooterComponent>
  );
};
