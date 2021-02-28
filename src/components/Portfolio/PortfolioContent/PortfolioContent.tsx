import * as React from 'react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

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
    <li className="flex flex-col p-5 mx-2 list-none">
      <div className="max-w-xs my-10 overflow-hidden bg-gray-900 rounded-lg shadow-lg">
        <div className="px-4 py-2">
          <h1 className="text-3xl font-bold text-gray-200 uppercase hover:underline">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h1>
          {/*  <p className="mt-1 text-sm text-gray-600">{tech}</p> */}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            className="object-cover w-full h-56 mt-2"
            alt="target"
            src={img}
          />
        </a>
        {/* <img className="object-cover w-full h-56 mt-2" src={img} alt={title} /> */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <button className="px-3 py-1 text-sm font-semibold text-gray-200 bg-gray-900 rounded">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {tech}
            </a>
          </button>
        </div>
      </div>
    </li>
    /* <div className="">
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
      </div> */
  );
};

export default PortfolioContent;

//Horizontal Card

{
  /* <div class="max-w-md w-full lg:flex">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://tailwindcss.com/img/card-left.jpg')" title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-grey-dark flex items-center">
        <svg class="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div class="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
      <p class="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    <div class="flex items-center">
      <img class="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink">
      <div class="text-sm">
        <p class="text-black leading-none">Jonathan Reinink</p>
        <p class="text-grey-dark">Aug 18</p>
      </div>
    </div>
  </div>
</div> */
}

//Event Card

{
  /* <div class="mx-auto bg-gray-700 h-screen flex items-center justify-center px-8">
  <div class="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
    <div class="w-full h-64 bg-top bg-cover rounded-t" style="background-image: url(https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg)"></div>
    <div class="flex flex-col w-full md:flex-row">
        <div class="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
            <div class="md:text-3xl">Jan</div>
            <div class="md:text-6xl">13</div>
            <div class="md:text-xl">7 pm</div>
        </div>
        <div class="p-4 font-normal text-gray-800 md:w-3/4">
            <h1 class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">2020 National Championship</h1>
            <p class="leading-normal">The College Football Playoff (CFP) determines the national champion of the top division of college football. The format fits within the academic calendar and preserves the sport’s unique and compelling regular season.</p>
            <div class="flex flex-row items-center mt-4 text-gray-700">
                <div class="w-1/2">
                    Mercedes-Benz Superdome
                </div>
                <div class="w-1/2 flex justify-end">
                    <img src="https://collegefootballplayoff.com/images/section_logo.png" alt="" class="w-8">
                </div>
            </div>
        </div>
    </div>
</div>
</div> */
}
