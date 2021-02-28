import React, { useContext } from 'react';
import { IPortfolioItem, ProjectList } from '../../utils/data';
import { HelperContext, IContextState } from '../../utils/HelperContext';

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
    <div className="flex flex-col items-center w-full h-full px-5 text-white">
      <div className="px-10 pt-0 pb-10 mt-10 rounded-md shadow-2xl">
        <h1 className="mt-8 text-5xl text-center">PROJECTS</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center w-full mt-8">
        {displayPortfolioData()}
      </div>
    </div>
  );
};

export default Portfolio;
