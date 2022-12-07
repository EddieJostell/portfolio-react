import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import './PortfolioContent.scss';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
interface IPortfolioContent {
  link: string;
  img: string;
  title: string;
  tech: string;
  text: string;
}

export const PortfolioContent = (props: IPortfolioContent) => {
  const { link, title, tech, text } = props;

  return (
    <div className='List-item'>
      <motion.div
        className='Card'
        initial={{ y: 0 }}
        whileHover={{
          y: -15,
          transition: { duration: 0.2, delay: 0 },
        }}
      >
        <div className='top'>
          <div className='file'>
            <FontAwesomeIcon icon={faFolder} size='3x' />
          </div>
          <div className='links'>
            <a href={'link'} target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faGithub} color='white' size='2x' />
            </a>
            <a href={link} target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faExternalLink} color='white' size='2x' />
            </a>
          </div>
        </div>
        <div className='body'>
          <h1 className='title'>
            <a href={link} target='_blank' rel='noreferrer'>
              {title}
            </a>
          </h1>
          <div className='text'>{text}</div>
        </div>
        <div className='bottom'>{tech}</div>
      </motion.div>
    </div>
  );
};

//Created something similar to RZ,
//Big cards with hover and colors.
