import React, { FC, useContext } from 'react';
import { HelperContext, IContextState } from '../../../utils/HelperContext';
import { ISocialMediaLink } from '../../../utils/data';

interface ISocialMediaProps {
  icons?: boolean;
  links?: boolean;
}

export const SocialMedia: FC<ISocialMediaProps> = ({ icons, links }) => {
  const socialLinks = useContext<IContextState>(HelperContext);

  const mapLinksOrIcons = socialLinks.socialItem.map(
    (item: ISocialMediaLink) => {
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
    }
  );

  return <div>{mapLinksOrIcons}</div>;
};
