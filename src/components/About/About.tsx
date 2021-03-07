import * as React from 'react';
import { useContext, useState } from 'react';
import { HelperContext, IContextState } from '../../utils/HelperContext';
import QuoteContent from './QuoteContent/QuoteContent';

interface IAboutProps {}

const About = (props: IAboutProps) => {
  const Quotes = useContext<IContextState>(HelperContext);
  // eslint-disable-next-line
  const [quoteList, setQuoteList] = useState<IContextState>(Quotes);

  let quotes =
    quoteList.quoteItem[Math.floor(Math.random() * quoteList.quoteItem.length)];

  return (
    <div className="flex flex-col justify-around w-full h-full px-5">
      <div className="flex flex-col flex-wrap justify-between pt-12 text-center text-orange">
        <div className="flex flex-col ">
          <div className="flex text-5xl text-white flex-start">
            <span>Edward 'Eddie' Jostell</span>
          </div>
          <div className="text-3xl text-white">
            <i>Frontend Developer</i>
          </div>
        </div>
        <QuoteContent quote={quotes.quote} author={quotes.author} />
      </div>

      <div className="flex flex-col items-start justify-center h-full text-white m-7 lg:flex-row">
        <div className="justify-center w-full h-full p-8 m-5 shadow-2xl flex-column lg:mr-5 lg:mt-0">
          <h2 className="text-2xl text-center">Likes</h2>
          <div className="text-xl">
            When Im not hitting the keyboard to create magic on the web or
            playing games I like to hang out with my friends, go to the gym,
            long walks, relax with movies/tvshows or just listening to good
            music.
          </div>
        </div>

        <div className="justify-center w-full h-full p-8 m-5 shadow-2xl flex-column lg:mr-5 lg:mt-0">
          <h2 className="text-2xl text-center">Me</h2>
          <div className="text-xl">Name: Edward 'Eddie' Jostell.</div>
          <div className="text-xl">Age: 32 summers.</div>
          <div className="text-xl">From: Stockholm, Sweden.</div>
          <div className="text-xl">Occupation: Frontend-developer.</div>
        </div>

        <div className="justify-center w-full h-full p-8 m-5 shadow-2xl flex-column lg:m-5 lg:mt-0 lg:mr-0">
          <h2 className="text-2xl text-center">Gamer</h2>
          <div className="text-xl">
            Before I wanted to become a web-developer I played at a
            semi-professional level in the computer game Counter Strike - Global
            Offensive. Even tho I dont play on that level anymore I still dream
            of a comeback.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

//https://stackoverflow.com/questions/42094060/changing-shuffling-text-every-1-5-second-in-a-react-component

/*  let robin: JSX.Element[] = quoteList.map((q: IQuoteItem, key: any) => (
    <QuoteContent key={key} quote={q.quote} author={q.author} />
  )); */
