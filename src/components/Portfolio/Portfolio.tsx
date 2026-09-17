import { AnimatePresence, motion } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { PortfolioItem } from '../../utils/data';
import { usePortfolio } from '../../utils/siteData';
import { TitleAnimation } from '../About/AboutAnimations';
import { Container } from '../Container/Container';
import { PortfolioContent } from './PortfolioContent/PortfolioContent';
import { ProjectArchive } from './ProjectArchive/ProjectArchive';
import { Header } from '../Header/Header';
import { useMediaQuery } from '../../utils/hooks';

const PortfolioSection = styled('section')({
  color: '#edf2f4',
  minHeight: '100vh',
  boxSizing: 'border-box',
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

const ArchiveLinkWrapper = styled('div')({
  marginTop: '2rem',
  textAlign: 'center',
});

const ArchiveLinkButton = styled('button')({
  background: 'none',
  border: 'none',
  color: '#edf2f4',
  fontSize: '1rem',
  fontFamily: 'Goldman, Helvetica, sans-serif',
  textDecoration: 'underline',
  cursor: 'pointer',

  '&:hover': {
    color: '#d90429',
  },
});

export const Portfolio: FC = () => {
  const projects = usePortfolio();
  const featuredProjects = projects.filter(
    (port: PortfolioItem) => port.featured,
  );
  const archivedProjects = projects.filter(
    (port: PortfolioItem) => !port.featured,
  );
  const [showArchive, setShowArchive] = useState(false);
  const mobileMaxWidth = useMediaQuery('(min-width: 767px)');
  const archiveToggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showArchive) {
      archiveToggleRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [showArchive]);

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
            {featuredProjects.map((port: PortfolioItem) => (
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
          <ArchiveLinkWrapper ref={archiveToggleRef}>
            <ArchiveLinkButton
              onClick={() => setShowArchive((prev) => !prev)}
              aria-expanded={showArchive}
            >
              {showArchive
                ? 'Hide Project Archive'
                : 'View Full Project Archive'}
            </ArchiveLinkButton>
          </ArchiveLinkWrapper>
          <AnimatePresence initial={false}>
            {showArchive && (
              <motion.div
                key='project-archive'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <ProjectArchive projects={archivedProjects} />
              </motion.div>
            )}
          </AnimatePresence>
        </PortfolioWrapper>
      </Container>
    </PortfolioSection>
  );
};
