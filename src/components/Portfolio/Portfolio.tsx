import React, { useContext } from 'react';
import { IPortfolioItem } from '../../utils/data';
import { HelperContext, IContextState } from '../../utils/HelperContext';
import { Container } from '../Container/Container';
import './Portfolio.scss';

import { PortfolioContent } from './PortfolioContent/PortfolioContent';
interface IPortfolioProps {}

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
      />
    ));
  };

  return (
    <div id='portfolio' className='Portfolio'>
      <Container>
        <div className='Portfolio-title'>
          <h1>PROJECTS</h1>
        </div>
        <div className='List'>
          {/* {displayPortfolioData()} */}
          {/* <PortfolioContent link={''} img={''} title={''} tech={''} text={''} /> */}
        </div>
      </Container>
    </div>
  );
};
//flex flex-col items-center w-full h-full px-5 text-white md:px-0
