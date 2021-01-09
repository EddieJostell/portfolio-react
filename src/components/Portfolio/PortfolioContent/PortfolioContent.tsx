import * as React from 'react';
import '../../Portfolio/Portfolio.scss';

interface Props {
  link: string;
  img: string;
  title: string;
  tech: string;
  text: string;
}

const PortfolioContent = (props: Props) => {
  const { link, img, title, tech, text } = props;

  return {
    /* <li className="List-card">
      <div className="List-cardImg">
        <a href={link} target="_blank">
          <img src={img} />
        </a>
      </div>
      <div className="List-cardContent">
        <h3 className="title">{title}</h3>
        <span>{tech}</span>
        <a href={link} target="_blank">
          <div>{link}</div>
        </a>
        <p>{text}</p>
      </div>
    </li> */
  };
};

export default PortfolioContent;
