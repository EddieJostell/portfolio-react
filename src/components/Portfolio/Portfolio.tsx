import React, { useContext } from 'react';
import { HelperContext, IContextState } from '../../utils/HelperContext';
import './Portfolio.scss';

import PortfolioContent from './PortfolioContent/PortfolioContent';
interface IPortfolioProps {}

const Portfolio = (props: IPortfolioProps) => {
  const Projects = useContext<IContextState>(HelperContext);

  const displayPortfolioData = () => {
    return Projects.portItem.map((port, key) => (
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
    <div className="Portfolio">
      <div className="Portfolio-title">
        <h1>PROJECTS</h1>
      </div>
      <ul className="List">
        {displayPortfolioData()}
        {/* <PortfolioContent link={''} img={''} title={''} tech={''} text={''} /> */}
      </ul>
    </div>
  );
};

export default Portfolio;
//flex flex-col items-center w-full h-full px-5 text-white md:px-0
