import * as React from 'react';
import './PortfolioContent.scss';
import placeholder from '.../../../public/img/placeholder_360x640.png';
interface IPortfolioContent {
  link: string;
  img: string;
  title: string;
  tech: string;
  text: string;
}

export const PortfolioContent = (props: IPortfolioContent) => {
  const { link, img, title, tech } = props;

  return (
    <div className="List-item">
      <a className="card" href={link} target="_blank" rel="noreferrer">
        <img src={img ? img : placeholder} alt={title} />
        <div className="info">
          <h1>{title}</h1>
          <p>{tech}</p>
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        </div>
      </a>
    </div>
  );
};

//Created something similar to RZ,
//Big cards with hover and colors.
