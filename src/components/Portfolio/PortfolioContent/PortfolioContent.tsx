import * as React from 'react';

interface Props {
  link: string;
  img: string;
  title: string;
  tech: string;
  text: string;
}

const PortfolioContent = (props: Props) => {
  const { link, img, title, tech, text } = props;

  return (
    <li className="flex flex-col p-5 m-2 text-white list-none shadow-2xl w-72">
      <div className="">
        <a href={link} target="_blank">
          <img alt="target" src={img} />
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
    </li>
  );
};

export default PortfolioContent;
