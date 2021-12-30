import * as React from 'react';
import { isMobileMax } from '../../utils/userAgent';
import QuoteContent from '../QuoteContent/QuoteContent';
import './Home.scss';

interface IHomeProps {}

const Home = (props: IHomeProps) => {
  const personalInfo = () => {
    let name = "Hello my name is Edward 'Eddie' Jostell";
    let work = 'I am a Frontend Developer';
    let onlyName = name.substring(17, name.length);
    let onlyWork = work.substring(7, work.length);

    return (
      <>
        <span className="name">{onlyName}</span>
        <span className="work">{onlyWork}</span>
      </>
    );
  };

  return (
    <div className="Home">
      <div className="Home-banner">{personalInfo()}</div>
      {/* <div className="flex flex-col items-start justify-center h-full text-white m-7 lg:flex-row">
        <div className="flex-col w-full p-8 shadow-2xl bg-red-200justify-center lg:mr-5 lg:mt-0">
          <h2 className="text-2xl text-center">Likes</h2>
          <div className="text-xl">
            When Im not hitting the keyboard to create magic on the web or
            playing games I like to hang out with my friends, go to the gym,
            long walks, relax with movies/tvshows or just listening to good
            music.
          </div>
        </div>

        <div className="flex-col justify-center w-full p-8 shadow-2xl flex-column lg:mr-5 lg:mt-0">
          <h2 className="text-2xl text-center">Me</h2>
          <div className="text-xl">Name: Edward 'Eddie' Jostell.</div>
          <div className="text-xl">Age: 32 summers.</div>
          <div className="text-xl">From: Stockholm, Sweden.</div>
          <div className="text-xl">Occupation: Frontend-developer.</div>
        </div>

        <div className="flex-col justify-center w-full p-8 shadow-2xl flex-column lg:m-5 lg:mt-0 lg:mr-0">
          <h2 className="text-2xl text-center">Gamer</h2>
          <div className="text-xl">
            Before I wanted to become a web-developer I played at a
            semi-professional level in the computer game Counter Strike - Global
            Offensive. Even tho I dont play on that level anymore I still dream
            of a comeback.
          </div>
        </div>
      </div> */}
      {isMobileMax && <QuoteContent />}
    </div>
  );
};

export default Home;

//https://stackoverflow.com/questions/42094060/changing-shuffling-text-every-1-5-second-in-a-react-component

/*  let robin: JSX.Element[] = quoteList.map((q: IQuoteItem, key: any) => (
    <QuoteContent key={key} quote={q.quote} author={q.author} />
  )); */
