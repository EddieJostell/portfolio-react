import { motion } from 'framer-motion';
import { FC } from 'react';
import styled from '@emotion/styled';
import { Container } from '../Container/Container';
import { Header } from '../Header/Header';
import { Skills } from '../Skills/Skills';
import {
  BoxContainerAnimation,
  PhotoLayerAnimation,
  TitleAnimation,
} from './AboutAnimations';
import { useMediaQuery } from '../../utils/hooks';
import { BiographyEntry } from '../../utils/data';
import { useAbout } from '../../utils/siteData';

const AboutSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  color: '#edf2f4',
  position: 'relative',

  '@media (min-width: 768px)': {
    minHeight: '100vh',
  },
});

const BackgroundTitle = styled(motion.span)({
  fontSize: '190px',
  zIndex: 0,
  position: 'absolute',
  top: '20%',
  left: '40%',
  transform: 'translate(-50%, -50%)',
  opacity: 0.07,
  fontFamily: 'Audiowide, Helvetica, Arial, sans-serif',
});

const BoxContainer = styled(motion.div)({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '30px',
  paddingTop: '10px',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
  },
});

const Content = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  '@media (min-width: 1100px)': {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const Biography = styled('div')({
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  textAlign: 'left',
  paddingBottom: '10px',
  marginBottom: '1em',

  '@media (min-width: 1100px)': {
    width: '50%',
    textAlign: 'left',
    marginBottom: 0,
    borderBottom: 0,
  },
});

const BiographyTitle = styled(Header)({
  '& h2': {
    fontFamily: 'Audiowide, Helvetica, Arial, sans-serif',
    marginTop: 0,
  },
});

const BiographyBody = styled('div')({
  fontSize: '16px',
  width: '100%',
  paddingRight: '10px',

  '@media (min-width: 768px)': {
    fontSize: '24px',
  },
});

const BiographyParagraph = styled('p')({
  margin: 0,
});

const ProfileFrame = styled('a')({
  borderRadius: '10px',
  position: 'relative',
  boxShadow: '0 25px 25px rgba(0, 0, 0, 0.1)',
  zIndex: 1,
  margin: '1rem 0 auto 0',
  maxWidth: 'fit-content',

  '@media (min-width: 1100px)': {
    marginTop: '5rem',
    marginLeft: '15px',
  },

  '&::before': {
    content: 'none',

    '@media (min-width: 1100px)': {
      content: "''",
      overflow: 'hidden',
      border: '2px solid #d90429',
      borderRadius: '10px',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      zIndex: -1,
      transform: 'translate(16px, 16px)',
      transition: 'transform 0.4s ease',
    },
  },

  '&:hover::before': {
    transform: 'translate(8px, 8px)',
    transition: 'transform 0.4s ease',
  },
});

const PhotoLayer = styled(motion.div)({
  borderRadius: '10px',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  right: 0,
  backgroundColor: 'transparent',
  opacity: 1,
});

const ProfileImage = styled('img')({
  width: '100%',
  borderRadius: '10px',
});

export const About: FC = () => {
  const mobileMaxWidth = useMediaQuery('(min-width: 767px)');
  const biography = useAbout()[0]?.biography ?? [];

  return (
    <AboutSection id='about'>
      <Container>
        {mobileMaxWidth && (
          <BackgroundTitle key='title' {...TitleAnimation}>
            ABOUT ME
          </BackgroundTitle>
        )}
        <BoxContainer key='box-container' {...BoxContainerAnimation}>
          <Content>
            <Biography>
              <BiographyTitle
                title='About Me'
                size='h2'
                fullWidth
                color='red'
                textCenter
              />
              <BiographyBody>
                {biography.map((entry: BiographyEntry) => (
                  <BiographyParagraph key={entry.id}>
                    {entry.text}
                    {entry.linkLabel && (
                      <a
                        href='https://www.skandia.se'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {entry.linkLabel}
                      </a>
                    )}
                    {entry.suffix}
                  </BiographyParagraph>
                ))}
              </BiographyBody>
              <Skills />
            </Biography>

            <ProfileFrame
              href='https://www.linkedin.com/in/eddiejostell/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {mobileMaxWidth && (
                <PhotoLayer key='layer' {...PhotoLayerAnimation} />
              )}
              <ProfileImage src={'/KELEDW.jpg'} alt='profile' />
            </ProfileFrame>
          </Content>
        </BoxContainer>
      </Container>
    </AboutSection>
  );
};
