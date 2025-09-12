import React, { FC } from 'react';
import { ContactSlim } from '../Contact/ContactSlim';
import { Container } from '../Container/Container';

import {
  FooterWrapperNameAnimation,
  ScrollTopAnimation,
} from './FooterAnimations';
import { scrollTop, useMediaQuery } from '../../utils/hooks';
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
            {...FooterWrapperNameAnimation}
            onClick={handleScrollToTop}
            aria-label='Creator Logo, Click to scroll to top of page'
          >
            E
            {!mobileMaxWidth && (
              <StyledScrollToTop
                key='scroll-to-top'
                variants={ScrollTopAnimation}
              >
                Go to Top
              </StyledScrollToTop>
            )}
          </StyledFooterLogo>
          {mobileMaxWidth ? (
            <ContactSlim icons={false} data-testid='mobile-contact' />
          ) : (
            <ContactSlim icons={true} data-testid='desktop-contact' />
          )}
          <StyledCreatorTag>Built by Edward 'Eddie' Jostell</StyledCreatorTag>
        </StyledFooterWrapper>
      </Container>
    </StyledFooterComponent>
  );
};
