import React, { FC, useState } from 'react';
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

  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledFooterComponent>
      <Container>
        <StyledFooterWrapper>
          <StyledFooterLogo
            type='button'
            /*  key='Footer-wrapper-name'
            {...parentMotionProps} */

            onHoverStart={() => {
              console.log('hover start!!!!');
              setIsHovered(true);
            }}
            onHoverEnd={() => setIsHovered(false)}
            onClick={handleScrollToTop}
            aria-label='Creator Logo, Click to scroll to top of page'
          >
            E
            {!mobileMaxWidth && (
              <StyledScrollToTop
                initial={{ opacity: 0, x: -12 }}
                animate={
                  isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }
                }
                transition={{ duration: 0.4, ease: 'easeInOut', type: 'tween' }}
                /*  key='scroll-to-top' {...childMotionProps} */
              >
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
