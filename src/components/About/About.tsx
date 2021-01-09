import * as React from 'react';
import './About.scss';
import { useContext, useState } from 'react';
import QuoteContext from '../../utils/HelperContext';
import QuoteContent from './QuoteContent/QuoteContent';
import { IQuoteItem } from '../../utils/data';

interface IAboutProps {}

const About = (props: IAboutProps) => {
  const Quote = useContext(QuoteContext);

  const [quoteList, setQuoteList] = useState(Quote);

  let quotes = quoteList[Math.floor(Math.random() * quoteList.length)];

  return (
    <div className="About">
      <div className="Top">
        <span className="intro">
          Hello! My name is Eddie and I am a Frontend-developer.
        </span>
        <QuoteContent quote={quotes.quote} author={quotes.author} />
      </div>

      <div className="Bot">
        <div className="Bot-box">
          <h2>Likes</h2>
          <div>
            When Im not hitting the keyboard to create magic on the web or
            playing games I like to hang out with my friends, go to the gym,
            long walks, relax with movies/tvshows or just listening to good
            music.
          </div>
        </div>
        <div className="Bot-box">
          <h2>Me</h2>
          <div>Name: Edward 'Eddie' Jostell.</div>
          <div>Age: 32 summers.</div>
          <div>From: Stockholm, Sweden.</div>
          <div>Occupation: Frontend-developer.</div>
        </div>
        <div className="Bot-box">
          <h2>Gamer</h2>
          <div>
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
