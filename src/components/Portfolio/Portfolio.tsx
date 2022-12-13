import { motion } from 'framer-motion';
import { useContext } from 'react';
import { IPortfolioItem } from '../../utils/data';
import { HelperContext, IContextState } from '../../utils/HelperContext';
import { TitleAnimation } from '../About/AboutAnimations';
import { Container } from '../Container/Container';
import { isMobileMax } from '../../utils/userAgent';
import './Portfolio.scss';
import { PortfolioContent } from './PortfolioContent/PortfolioContent';
import { Header } from '../Header/Header';

export const Portfolio = (): JSX.Element => {
  const Projects = useContext<IContextState>(HelperContext);

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
          {isMobileMax && (
            <motion.h1 key='title' {...TitleAnimation} className='bg-title'>
              MY PROJECTS
            </motion.h1>
          )}
          <div className='List'>
            <Header title='Projects' size='h1' fullWidth color textCenter />
            {displayPortfolioData()}
            {/* <PortfolioContent link={''} img={''} title={''} tech={''} text={''} /> */}
          </div>
        </div>
      </Container>
    </div>
  );
};
//flex flex-col items-center w-full h-full px-5 text-white md:px-0
