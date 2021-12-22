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

const PortfolioContent = (props: IPortfolioContent) => {
  const { link, img, title, tech } = props;

  return (
    <li className="flex flex-col justify-start m-5 list-none shadow-2xl md:flex-row">
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
    </li>
  );
};

export default PortfolioContent;

//Cool card animation to try

//eslint-disable-next-line
{
  /* <div class="card">
    <div class="image">
      <img src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg"/>
    </div>
    <div class="details">
      <div class="center">
        <h1>Someone famous<br><span>team leader</span></h1>
        <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
        <ul>
          <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
  </div> */
}
