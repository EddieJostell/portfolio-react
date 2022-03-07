import * as React from 'react';
import { isMobileMax } from '../../utils/userAgent';
import { QuoteContent } from '../QuoteContent/QuoteContent';
import './About.scss';
interface IAboutProps {}

export const About = (props: IAboutProps) => {
  return (
    <div className='About' id='about'>
      <h1>About Page</h1>

      <div className='box'>
        <h2 className=''>Likes</h2>
        <div className=''>
          When Im not hitting the keyboard to create magic on the web or playing
          games I like to hang out with my friends, go to the gym, long walks,
          relax with movies/tvshows or just listening to good music.
        </div>
      </div>

      <div className='box'>
        <h2 className=''>Me</h2>
        <div className=''>Name: Edward 'Eddie' Jostell.</div>
        <div className=''>Age: 32 summers.</div>
        <div className=''>From: Stockholm, Sweden.</div>
        <div className=''>Occupation: Frontend-developer.</div>
      </div>

      <div className='box'>
        <h2 className=''>Gamer</h2>
        <div className=''>
          Before I wanted to become a web-developer I played at a
          semi-professional level in the computer game Counter Strike - Global
          Offensive. Even tho I dont play on that level anymore I still dream of
          a comeback.
        </div>
      </div>
    </div>
  );
};

//https://stackoverflow.com/questions/42094060/changing-shuffling-text-every-1-5-second-in-a-react-component
