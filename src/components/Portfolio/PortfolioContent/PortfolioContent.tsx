import * as React from 'react';
import './PortfolioContent.css';
interface IPortfolioContent {
  link: string;
  img: string;
  title: string;
  tech: string;
  text: string;
}

const PortfolioContent = (props: IPortfolioContent) => {
  const { link, img, title, tech } = props;

  return (
    <li className="flex flex-col justify-start m-5 list-none shadow-2xl md:flex-row">
      <div className="card">
        <img src={img} alt={title} />
        <div className="info">
          <h1>{title}</h1>
          <p>{tech}</p>
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        </div>
      </div>
    </li>
  );
};

export default PortfolioContent;
