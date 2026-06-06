import { FC } from 'react';
//import { ContactSlim } from '../Contact/ContactSlim';
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
import { SocialMedia } from '../Contact/SocialMedia/SocialMedia';

interface FooterProps {
  handleScrollToTop: () => void;
}

export const Footer: FC<FooterProps> = ({ handleScrollToTop }) => {
  const mobileMaxWidth = useMediaQuery('(max-width: 767px)');

  return (
    <StyledFooterComponent>
      <Container>
        <StyledFooterWrapper>
          <StyledFooterLogo
            type='button'
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
            <SocialMedia links data-testid='mobile-contact' />
          ) : (
            <SocialMedia icons data-testid='desktop-contact' />
          )}
          <StyledCreatorTag>
            Built by Edward &apos;Eddie&apos; Jostell
          </StyledCreatorTag>
        </StyledFooterWrapper>
      </Container>
    </StyledFooterComponent>
  );
};
