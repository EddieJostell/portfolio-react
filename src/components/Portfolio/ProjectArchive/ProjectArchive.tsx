import { FC } from 'react';
import styled from '@emotion/styled';
import { ExternalLink } from 'react-feather';
import { PortfolioItem } from '../../../utils/data';

interface ProjectArchiveProps {
  projects: PortfolioItem[];
}

const ArchiveList = styled('ul')({
  listStyle: 'none',
  margin: '2rem 0 0',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

const ArchiveRow = styled('li')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.35rem',
  paddingBottom: '1.5rem',
  borderBottom: '1px solid rgba(237, 242, 244, 0.15)',
});

const ArchiveTitle = styled('a')({
  fontSize: '1.4rem',
  fontFamily: 'Goldman, Helvetica, sans-serif',
  color: '#edf2f4',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',

  '&:hover': {
    color: '#d90429',
  },
});

const ArchiveText = styled('p')({
  margin: 0,
  fontSize: '0.95rem',
});

const ArchiveTech = styled('p')({
  margin: 0,
  fontSize: '0.85rem',
  color: 'rgba(237, 242, 244, 0.6)',
});

export const ProjectArchive: FC<ProjectArchiveProps> = ({ projects }) => {
  return (
    <ArchiveList aria-label='Project archive'>
      {projects.map((project) => (
        <ArchiveRow key={project.title}>
          <ArchiveTitle
            href={project.link}
            target='_blank'
            rel='noreferrer'
            aria-label={`${project.title} live site`}
          >
            {project.title}
            <ExternalLink size={18} aria-hidden='true' />
          </ArchiveTitle>
          <ArchiveText>{project.text}</ArchiveText>
          <ArchiveTech>{project.tech.join(', ')}</ArchiveTech>
        </ArchiveRow>
      ))}
    </ArchiveList>
  );
};
