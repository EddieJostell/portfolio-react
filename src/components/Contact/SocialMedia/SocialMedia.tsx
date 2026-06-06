import { FC } from 'react';
import { useSocialLinks } from '../../../utils/siteData';
import { SocialMediaLink } from '../../../utils/data';
import { useMediaQuery } from '../../../utils/hooks';
import {
  StyledContainer,
  StyledIconsWrapper,
  StyledIconLink,
  StyledVerticalLine,
  StyledLinksWrapper,
  StyledLink,
} from './StyledSocialMediaElements';

interface SocialMediaProps {
  icons?: boolean;
  links?: boolean;
}

export const SocialMedia: FC<SocialMediaProps> = ({ icons, links }) => {
  const socialLinks = useSocialLinks();
  const mobileMaxWidth = useMediaQuery('(min-width: 767px)');
  const isDesktop = mobileMaxWidth;

  const mapLinksOrIcons = socialLinks.map((item: SocialMediaLink) => {
    return (
      <>
        {icons && (
          <StyledIconLink
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={item.ariaLabel}
            key={item.id}
            whileHover={{
              y: -5,
              scale: 1.1,
            }}
            whileFocus={{
              y: -5,
              scale: 1.1,
            }}
          >
            {item.iconSrc}
          </StyledIconLink>
        )}
        {links && (
          <StyledLink
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={item.ariaLabel}
            key={item.id}
          >
            <span>{item.title}</span>
          </StyledLink>
        )}
      </>
    );
  });

  return (
    <StyledContainer
      $icons={icons}
      $isDesktop={isDesktop && icons}
      initial={icons ? { y: 500, opacity: 0 } : undefined}
      animate={icons ? { y: 0, opacity: 1 } : undefined}
      transition={icons ? { duration: 1.5, delay: 0.3 } : undefined}
    >
      {icons && <StyledIconsWrapper>{mapLinksOrIcons}</StyledIconsWrapper>}
      {icons && isDesktop && <StyledVerticalLine />}
      {links && <StyledLinksWrapper>{mapLinksOrIcons}</StyledLinksWrapper>}
    </StyledContainer>
  );
};
