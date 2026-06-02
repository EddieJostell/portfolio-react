import { motion } from 'framer-motion';
import { GitHub, ExternalLink, Folder } from 'react-feather';
import { FC } from 'react';
import styled from '@emotion/styled';
import { useMediaQuery } from '../../../utils/hooks';

const Card = styled(motion.li)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  listStyle: 'none',
  padding: '32px 28px',
  backgroundColor: '#000',
  opacity: 0.7,
  textDecoration: 'none',
  borderRadius: '5px',

  '@media (min-width: 768px)': {
    minWidth: '525px',
    maxWidth: '600px',
  },

  '@media (min-width: 1100px)': {
    minWidth: '325px',
    maxWidth: '400px',
  },
});

const CardTop = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
  zIndex: 1,
});

const FileIcon = styled('div')({
  '& svg': {
    stroke: '#d90429',
  },
});

const Links = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'baseline',

  '& a:first-of-type': {
    marginRight: '10px',
  },

  '& svg:hover': {
    color: '#d90429',
  },
});

const CardBody = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 0 auto',
  zIndex: 1,
  color: '#edf2f4',
});

const CardTitle = styled('a')({
  fontSize: '2rem',
  fontFamily: 'Goldman, Helvetica, sans-serif',
  color: '#edf2f4',
  textDecoration: 'none',
  marginBottom: '0.5rem',

  '&:hover': {
    color: '#d90429',
  },
});

const CardText = styled('div')({
  zIndex: 1,
  textAlign: 'left',
});

const CardBottom = styled('div')({
  zIndex: 1,
  marginTop: '15px',
  textAlign: 'left',
});

interface PortfolioContentProps {
  link: string;
  img: string;
  title: string;
  tech: string;
  text: string;
  github: string | undefined;
}

export const PortfolioContent: FC<PortfolioContentProps> = ({
  link,
  title,
  tech,
  text,
  github,
}) => {
  const isDesktop = useMediaQuery('(min-width: 992px)');

  return (
    <Card
      initial={{ y: 0 }}
      whileHover={
        isDesktop ? { y: -15, transition: { duration: 0.2, delay: 0 } } : {}
      }
    >
      <CardTop>
        <FileIcon>
          <Folder size={45} />
        </FileIcon>
        <Links>
          {github && (
            <a
              href={github}
              target='_blank'
              rel='noreferrer'
              aria-label={`${title} GitHub repository`}
            >
              <GitHub color='white' size={40} />
            </a>
          )}
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            aria-label={`${title} live site`}
          >
            <ExternalLink color='white' size={40} />
          </a>
        </Links>
      </CardTop>
      <CardBody>
        <CardTitle href={link} target='_blank' rel='noreferrer'>
          {title}
        </CardTitle>
        <CardText>{text}</CardText>
      </CardBody>
      <CardBottom>{tech}</CardBottom>
    </Card>
  );
};
