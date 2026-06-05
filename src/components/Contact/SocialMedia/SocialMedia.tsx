import { FC } from 'react';
import { useSocialLinks } from '../../../utils/siteData';
import { SocialMediaLink } from '../../../utils/data';

interface SocialMediaProps {
  icons?: boolean;
  links?: boolean;
}

export const SocialMedia: FC<SocialMediaProps> = ({ icons, links }) => {
  const socialLinks = useSocialLinks();

  const mapLinksOrIcons = socialLinks.map((item: SocialMediaLink) => {
    return (
      <>
        {icons && (
          <a
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            key={item.id}
          >
            {item.iconSrc}
          </a>
        )}
        {links && (
          <a
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            key={item.id}
          >
            <span>{item.title}</span>
          </a>
        )}
      </>
    );
  });

  return <div>{mapLinksOrIcons}</div>;
};
