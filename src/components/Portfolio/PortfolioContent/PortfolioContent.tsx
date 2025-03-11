import './PortfolioContent.scss';
import { motion } from 'framer-motion';
import { GitHub, ExternalLink, Folder } from 'react-feather';
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
            <Folder size={'45px'} />
          </div>
          <div className='links'>
            {github && (
              <a href={github} target='_blank' rel='noreferrer'>
                <GitHub color='white' size={'40px'} />
              </a>
            )}
            <a href={link} target='_blank' rel='noreferrer'>
              <ExternalLink color='white' size={'40px'} />
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
