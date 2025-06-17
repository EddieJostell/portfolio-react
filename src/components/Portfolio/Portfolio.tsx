import { motion } from 'framer-motion';
import { useContext, FC } from 'react';
import { IPortfolioItem } from '../../utils/data';
import { HelperContext, IContextState } from '../../utils/HelperContext';
import { TitleAnimation } from '../About/AboutAnimations';
import { Container } from '../Container/Container';
import './Portfolio.scss';
import { PortfolioContent } from './PortfolioContent/PortfolioContent';
import { Header } from '../Header/Header';
import { useMediaQuery } from '../../utils/hooks';

export const Portfolio: FC<{}> = () => {
  const Projects = useContext<IContextState>(HelperContext);
  const mobileMaxWidth = useMediaQuery('(min-width: 767px)');

  const displayPortfolioData = () => {
    return Projects.portItem.map((port: IPortfolioItem, key: number) => (
      <PortfolioContent
        key={key}
        title={port.title}
        tech={port.tech}
        link={port.link}
        img={port.img}
        text={port.text}
        github={port.github}
      />
    ));
  };

  return (
    <div className='Portfolio' id='portfolio'>
      <Container>
        <div className='Portfolio-wrapper'>
          {mobileMaxWidth && (
            <motion.h1 key='title' {...TitleAnimation} className='bg-title'>
              MY PROJECTS
            </motion.h1>
          )}
          <div className='List'>
            <Header title='Projects' size='h1' fullWidth color textCenter />
            {displayPortfolioData()}
          </div>
        </div>
      </Container>
    </div>
  );
};
