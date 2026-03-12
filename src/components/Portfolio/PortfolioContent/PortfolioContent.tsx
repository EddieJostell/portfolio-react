import './PortfolioContent.scss';
import { motion } from 'framer-motion';
import { GitHub, ExternalLink, Folder } from 'react-feather';
import { useMediaQuery } from '../../../utils/hooks';

interface IPortfolioContent {
  link: string;
  img: string;
  title: string;
  tech: string;
  text: string;
  github: string | undefined;
}

export const PortfolioContent = (props: IPortfolioContent) => {
  const { link, title, tech, text, github } = props;
  const isDesktop = useMediaQuery('(min-width: 992px)');

  return (
    <div className='List-item'>
      <motion.div
        className='Card'
        initial={{ y: 0 }}
        whileHover={
          isDesktop
            ? {
                y: -15,
                transition: { duration: 0.2, delay: 0 },
              }
            : {}
        }
      >
        <div className='top'>
          <div className='file'>
            <Folder size={'45px'} />
          </div>
          <div className='links'>
            {github && (
              <a
                href={github}
                target='_blank'
                rel='noreferrer'
                aria-label='GitHub repository'
              >
                <GitHub color='white' size={'40px'} />
              </a>
            )}
            <a href={link} target='_blank' rel='noreferrer' aria-label={title}>
              <ExternalLink color='white' size={'40px'} />
            </a>
          </div>
        </div>
        <div className='body'>
          <a href={link} target='_blank' rel='noreferrer' aria-label={title}>
            {title}
          </a>

          <div className='text'>{text}</div>
        </div>
        <div className='bottom'>{tech}</div>
      </motion.div>
    </div>
  );
};

//Created something similar to RZ,
//Big cards with hover and colors.
