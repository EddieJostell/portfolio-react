import React from 'react';

import { IPortfolioItem } from '../../utils/data';

import PortfolioContent from './PortfolioContent/PortfolioContent';
interface IPortfolioProps {
  data: IPortfolioItem[];
}

const Portfolio = (props: IPortfolioProps) => {
  const { data } = props;

  const displayPortfolioData = () => {
    return data.map((port, key) => (
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
    <div className="flex flex-col items-center w-full h-full px-5 text-orange">
      <h1 className="mt-8 text-2xl text-center">PROJECTS</h1>

      {/* <ul className="List">{displayPortfolioData()}</ul> */}
      <div className="flex flex-row flex-wrap w-full mt-8">
        {displayPortfolioData()}
      </div>
    </div>
  );
};

export default Portfolio;
