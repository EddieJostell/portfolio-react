import { motion } from 'framer-motion';
import { FC } from 'react';
import styled from '@emotion/styled';
import { PortfolioItem } from '../../utils/data';
import { usePortfolio } from '../../utils/siteData';
import { TitleAnimation } from '../About/AboutAnimations';
import { Container } from '../Container/Container';
import { PortfolioContent } from './PortfolioContent/PortfolioContent';
import { Header } from '../Header/Header';
import { useMediaQuery } from '../../utils/hooks';

const PortfolioSection = styled('section')({
  color: '#edf2f4',
  height: '100%',
});

const PortfolioWrapper = styled('div')({
  position: 'relative',
  marginTop: '30px',
  paddingTop: '10px',
});

const BgTitle = styled(motion.div)({
  fontSize: '90px',
  zIndex: 0,
  position: 'absolute',
  top: '20%',
  left: '40%',
  transform: 'translate(-50%, -50%)',
  opacity: 0.07,
  fontFamily: 'Audiowide, Helvetica, Arial, sans-serif',

  '@media (min-width: 1100px)': {
    fontSize: '190px',
  },
});

const PortfolioList = styled('ul')({
  marginTop: '1rem',
  marginBottom: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  gap: '20px',

  '@media (min-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },

  '@media (min-width: 1100px)': {
    marginTop: '2rem',
    flexDirection: 'row',
    alignItems: 'unset',
    flexWrap: 'wrap',
    gap: '10px',
  },
});

export const Portfolio: FC = () => {
  const projects = usePortfolio();
  const mobileMaxWidth = useMediaQuery('(min-width: 767px)');

  return (
    <PortfolioSection id='portfolio'>
      <Container>
        <PortfolioWrapper>
          {mobileMaxWidth && (
            <BgTitle key='title' {...TitleAnimation} aria-hidden='true'>
              MY PROJECTS
            </BgTitle>
          )}
          <Header title='Projects' size='h2' fullWidth color='red' textCenter />
          <PortfolioList>
            {projects.map((port: PortfolioItem) => (
              <PortfolioContent
                key={port.title}
                title={port.title}
                tech={port.tech}
                link={port.link}
                img={port.img}
                text={port.text}
                github={port.github}
              />
            ))}
          </PortfolioList>
        </PortfolioWrapper>
      </Container>
    </PortfolioSection>
  );
};
