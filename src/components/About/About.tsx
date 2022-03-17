import * as React from 'react';
import { isMobileMax } from '../../utils/userAgent';
import { Container } from '../Container/Container';
import './About.scss';

interface IAboutProps {}

export const About = (props: IAboutProps) => {
  return (
    <div className='About' id='about'>
      <Container>
        <h1 className='title'>About Page</h1>
        <div className='box-container'>
          <div className='content'>
            <div className='box'>
              <h2 className=''>Likes</h2>
              <div className=''>
                When Im not hitting the keyboard to create magic on the web or
                playing games I like to hang out with my friends, go to the gym,
                long walks, relax with movies/tvshows or just listening to good
                music.
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
                Before I became a web-developer I played at a semi-professional
                level in the computer game Counter Strike - Global Offensive.
                Playing this game has helped me with my logical thinking and to
                work as part of a team, Even tho I dont play on that level
                anymore I still play for fun with my friends.
              </div>
            </div>
          </div>
          <div className='photo'>
            <img
              className='img'
              src={process.env.PUBLIC_URL + 'KELEDW.jpg'}
              alt='profile'
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

//https://stackoverflow.com/questions/42094060/changing-shuffling-text-every-1-5-second-in-a-react-component
