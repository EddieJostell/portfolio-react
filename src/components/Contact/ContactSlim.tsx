import { motion } from 'framer-motion';
import * as React from 'react';
import { IContactItem } from '../../utils/data';
import { HelperContext, IContextState } from '../../utils/HelperContext';
import { isMobileMax } from '../../utils/userAgent';
import './ContactSlim.scss';

interface IContactSlimProps {
  icons: boolean;
}

export const ContactSlim = (props: IContactSlimProps) => {
  const { icons } = props;
  const contactInfo = React.useContext<IContextState>(HelperContext);

  const displayContactIcons = () => {
    return contactInfo.contactItem.map((tact: IContactItem, key: number) => (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 3,
          repeatType: 'loop',
          ease: 'linear',
        }}
      >
        <a href={tact.link} target='_blank' rel='noopener noreferrer'>
          <img alt={tact.title} src={tact.iconSrc} />
        </a>
      </motion.div>
    ));
  };

  const displayContactLinks = () => {
    return contactInfo.contactItem.map((tact: IContactItem, key: number) => (
      <a
        className='item'
        href={tact.link}
        target='_blank'
        rel='noopener noreferrer'
      >
        <span>{tact.title}</span>
      </a>
    ));
  };

  return (
    <>
      {icons ? (
        <div
          className={`
            ContactSlim ContactSlim-icons ${isMobileMax && 'desktop'}`}
        >
          {displayContactIcons()}
        </div>
      ) : (
        <div className={`ContactSlim ${!icons && 'fullWidth'}`}>
          <div className='ContactSlim-links'>{displayContactLinks()}</div>
        </div>
      )}
    </>
  );
};
