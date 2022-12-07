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
            {/*    <div className='box'></div> */}
            <div className='bio'>
              {/* <h2 className=''>Likes</h2> */}
              <Header title='Bio' size='h2' />
              <div className='text'>
                <div>
                  Hello! My name is Eddie and I enjoy creating things on the
                  world wide web. I started my journey in web-development around
                  2014 by studying .NET development. When Im not hitting the
                  keyboard to create magic on the web or playing games I like to
                  hang out with my friends, go to the gym, long walks, relax
                  with movies/tvshows or just listening to good music.
                </div>
                <br />
                <div>
                  Before I became a web-developer I played at a
                  semi-professional level in the computer game Counter Strike -
                  Global Offensive. Playing this game has helped me with my
                  logical thinking and to work as part of a team, Even tho I
                  dont play on that level anymore I still play for fun with my
                  friends.
                </div>
              </div>
              <div className='skill'>
                <Skills title='Here are a few technologies I’ve been working with' />
              </div>
            </div>

            <div className='photo'>
              <a
                href='https://www.linkedin.com/in/eddiejostell/'
                target='_blank'
                rel='noopener noreferrer'
                className='frame'
              >
                {isMobileMax && (
                  <motion.div
                    key='layer'
                    {...PhotoLayerAnimation}
                    className='layer'
                  ></motion.div>
                )}
                <img
                  src={process.env.PUBLIC_URL + 'KELEDW.jpg'}
                  alt='profile'
                />
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

//https://stackoverflow.com/questions/42094060/changing-shuffling-text-every-1-5-second-in-a-react-component
