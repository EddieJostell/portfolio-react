import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        key={key}
        whileHover={{
          boxShadow: '0px  0px 8px rgb(255,255,255)',
          color: '#d90429',
          y: -5,
          scale: 1.1,
        }}
      >
        <a href={tact.link} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon
            className='icons'
            icon={tact.iconSrc}
            color='white'
            size='1x'
          />
        </a>
      </motion.div>
    ));
  };

  const displayContactLinks = () => {
    return contactInfo.contactItem.map((tact: IContactItem, key: number) => (
      <a
        key={key}
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
        <motion.div
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className={`
            ContactSlim ContactSlim-icons ${isMobileMax && 'desktop'}`}
        >
          {displayContactIcons()}
        </motion.div>
      ) : (
        <div className={`ContactSlim ${!icons && 'fullWidth'}`}>
          <div className='ContactSlim-links'>{displayContactLinks()}</div>
        </div>
      )}
    </>
  );
};
