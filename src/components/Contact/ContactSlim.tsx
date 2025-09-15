import { motion } from 'framer-motion';
import * as React from 'react';
import { ISocialMediaLink } from '../../utils/data';
import { HelperContext, IContextState } from '../../utils/HelperContext';
import './ContactSlim.scss';
import { useMediaQuery } from '../../utils/hooks';
import classNames from 'classnames';

interface IContactSlimProps {
  icons?: boolean;

  className?: string;

  [dataAttribute: `data-${string}`]: string;
}

export const ContactSlim = (props: IContactSlimProps) => {
  const { icons, className } = props;
  const contactInfo = React.useContext<IContextState>(HelperContext);
  const mobileMaxWidth = useMediaQuery('(min-width: 767px)');

  const displayContactIcons = () => {
    return contactInfo.socialItem.map((tact: ISocialMediaLink, key: number) => (
      <motion.div
        className=''
        key={key}
        whileHover={{
          //boxShadow: '0px  0px 8px rgb(255,255,255)',
          //fill: '#d90429',
          y: -5,
          scale: 1.1,
        }}
      >
        <a
          href={tact.link}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={tact.ariaLabel}
        >
          {tact.iconSrc}
        </a>
      </motion.div>
    ));
  };

  const displayContactLinks = () => {
    return contactInfo.socialItem.map((tact: ISocialMediaLink, key: number) => (
      <a
        key={key}
        className='item'
        href={tact.link}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={tact.ariaLabel}
      >
        <span>{tact.title}</span>
      </a>
    ));
  };
  const contactClasses = classNames(className, 'ContactSlim', {
    'ContactSlim-icons': icons,
    desktop: mobileMaxWidth,
    fullWidth: !icons,
  });

  return (
    <>
      {icons ? (
        <motion.div
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className={contactClasses}
        >
          {displayContactIcons()}
        </motion.div>
      ) : (
        <div className={contactClasses}>
          <div className='ContactSlim-links'>{displayContactLinks()}</div>
        </div>
      )}
    </>
  );
};
