import { motion } from 'framer-motion';
import * as React from 'react';
import { Container } from '../Container/Container';
import './About.scss';
import {
  BoxContainerAnimation,
  PhotoLayerAnimation,
  TitleAnimation,
} from './AboutAnimations';

export const About = (): JSX.Element => {
  return (
    <div className='About' id='about'>
      <Container>
        <motion.h1 key='title' {...TitleAnimation} className='title'>
          ABOUT ME
        </motion.h1>
        <motion.div
          key='box-container'
          {...BoxContainerAnimation}
          className='box-container'
        >
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
              <div className=''>Born: 1987.</div>
              <div className=''>From: Stockholm, Sweden.</div>
              <div className=''>Occupation: Frontend-developer.</div>
              <div className=''>Current workplace: Skandia.</div>
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
            <div className='frame'>
              {/*   <a
                href='https://www.linkedin.com/in/eddiejostell/'
                target='_blank'
                rel='noopener noreferrer'
              ></a> */}
              <motion.div
                key='layer'
                {...PhotoLayerAnimation}
                className='layer'
              ></motion.div>

              <img src={process.env.PUBLIC_URL + 'KELEDW.jpg'} alt='profile' />
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

//https://stackoverflow.com/questions/42094060/changing-shuffling-text-every-1-5-second-in-a-react-component
