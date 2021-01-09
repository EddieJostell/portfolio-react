import React from 'react';
import './Portfolio.scss';
import { IPortfolioItem } from '../../utils/data';
interface IPortfolioProps {
  data: IPortfolioItem[];
}

const Portfolio = (props: IPortfolioProps) => {
  const { data } = props;

  const displayPortfolioData = () => {
    /* return data.map((port, key) => (
      <PortfolioContent
        key={key}
        title={port.title}
        tech={port.tech}
        link={port.link}
        img={port.img}
        text={port.text}
      />
    )); */
  };
  /*
  const { portArray } = this.state;

  const portfolio = portArray.map((port, key) => (
    <PortfolioContent
      key={key}
      title={port.title}
      tech={port.tech}
      link={port.link}
      img={port.img}
    />
  ));

  return (
    <div className="Portfolio">
      <h1>PROJECTS</h1>
      <ul className="List">{portfolio}</ul>
    </div>
  );
}
}
*/

  return (
    <div className="Portfolio">
      <h1>PROJECTS</h1>
    </div>
  );
};

export default Portfolio;
