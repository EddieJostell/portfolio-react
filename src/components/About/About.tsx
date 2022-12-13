import { motion } from 'framer-motion';
import * as React from 'react';
import { isMobileMax } from '../../utils/userAgent';
import { Container } from '../Container/Container';
import { Header } from '../Header/Header';
import { Skills } from '../Skills/Skills';
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
        {isMobileMax && (
          <motion.h1 key='title' {...TitleAnimation} className='BG-title'>
            ABOUT ME
          </motion.h1>
        )}
        <motion.div
          key='box-container'
          {...BoxContainerAnimation}
          className='box-container'
        >
          <div className='content'>
            <div className='bio'>
              <Header title='About Me' size='h1' fullWidth color textCenter />
              <div className='text'>
                <div>
                  Hello! My name is Eddie and I enjoy creating things on the
                  world wide web!
                </div>
                <br />
                <div>
                  I started my journey in web development around 2014 by
                  studying ASP.NET & CMS. After finishing that program I soon
                  realized that I found most enjoyment coding frontend so I went
                  back to the classroom to study frontend development and
                  continued on that road.
                </div>
                <br />
                <div>
                  When Im not hitting the keyboard to create magic on the web or
                  playing games I like to hang out with my friends, go to the
                  gym, long walks, relax with movies/tvshows or just listening
                  to good music.
                </div>
                <br />
                <div>
                  Before I became a developer I played at a semi-professional
                  level in the computer game Counter Strike - Global Offensive.
                  Playing this game has helped me with my logical thinking and
                  to work as part of a team, Even tho I dont play on that level
                  anymore I still play for fun with my friends.
                </div>
                <br />
                <div>
                  Today Im working as a frontend developer at Skandia where I
                  maintain and develop the graphical framework that is used as
                  foundation to help create the company{' '}
                  <a
                    href='https://www.skandia.se'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    webpage
                  </a>
                  .
                </div>
              </div>
              <Skills />
            </div>

            <a
              className='frame'
              href='https://www.linkedin.com/in/eddiejostell/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {isMobileMax && (
                <motion.div
                  className='layer'
                  key='layer'
                  {...PhotoLayerAnimation}
                ></motion.div>
              )}
              <img src={process.env.PUBLIC_URL + 'KELEDW.jpg'} alt='profile' />
            </a>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

//https://stackoverflow.com/questions/42094060/changing-shuffling-text-every-1-5-second-in-a-react-component
