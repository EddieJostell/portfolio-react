import * as React from 'react';
interface Props {
  link: string;
  img: string;
  title: string;
  tech: string;
  text: string;
}

const PortfolioContent = (props: Props) => {
  const { link, img, title, tech } = props;

  /* const showProjectTech = () => {
    let techArray = tech.split(' ');
    return techArray.map((tech: string, key: number) => (
      <span
        key={key}
        className="px-3 py-1 m-1 text-sm font-semibold text-white border-white rounded"
      >
        {tech}
      </span>
    )); 
  };*/

  return (
    <li className="flex flex-col justify-start p-5 list-none md:flex-row">
      <a href={link} target="_blank" rel="noreferrer noopener">
        <img
          className="w'full md:w-28 md:h-28 md:hover:w-64 md:hover:h-32"
          alt="target"
          src={img}
        />
      </a>

      <div className="flex flex-col align-center">
        <div>
          <h3 className="title">{title}</h3>
        </div>
        <div>{tech}</div>
        <a href={link} target="_blank">
          <div className="hover:underline">{link}</div>
        </a>
      </div>
    </li>
  );
};

export default PortfolioContent;
