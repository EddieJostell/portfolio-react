import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const StyledContainer = styled(motion.div)<{
  $icons?: boolean;
  $isDesktop?: boolean;
}>(({ $icons, $isDesktop }) => ({
  position: 'relative',

  ...($icons && {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    top: 'auto',
    right: 'auto',
  }),

  ...($isDesktop && {
    position: 'fixed',
    bottom: 0,
    right: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    zIndex: 3,
  }),

  ...(!$icons && {
    width: '100%',
  }),
}));

export const StyledIconsWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  position: 'relative',

  '@media (min-width: 1025px)': {
    flexDirection: 'column',
  },
});

export const StyledIconLink = styled(motion.a)({
  margin: '5px',
  height: '1.5rem',

  '@media (min-width: 769px)': {
    height: '1.875rem',
  },

  svg: {
    height: '1.875rem',
    width: '1.875rem',

    '& > path, & > rect, & > circle, & > line': {
      stroke: '#edf2f4',
      transition: 'stroke 0.3s ease',
    },
  },

  '&:hover svg > path, &:hover svg > rect, &:hover svg > circle, &:hover svg > line':
    {
      stroke: '#d90429',
    },

  '&:focus-visible': {
    outline: '2px solid #d90429',
    outlineOffset: '2px',
    borderRadius: '4px',
  },
});

export const StyledVerticalLine = styled('div')({
  content: '""',
  display: 'block',
  width: '1px',
  height: '100px',
  margin: '0 auto',
  marginTop: '10px',
  backgroundColor: '#fff',

  '@media (max-width: 1024px)': {
    display: 'none',
  },
});

export const StyledLinksWrapper = styled('div')({
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

export const StyledLink = styled(motion.a)({
  color: '#edf2f4',
  fontSize: '20px',
  position: 'relative',
  textDecoration: 'none',
  fontFamily: 'Goldman, sans-serif, Arial, Helvetica',
  margin: '20px',
  display: 'inline-block',
  transition: 'color 0.3s ease',

  '&::after': {
    bottom: '-4px',
    content: '""',
    display: 'block',
    height: '2px',
    left: '50%',
    position: 'absolute',
    background: '#d90429',
    transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
    width: 0,
  },

  '&:hover::after': {
    width: '100%',
    left: 0,
  },

  '&:focus-visible': {
    outline: '2px solid #d90429',
    outlineOffset: '4px',
    borderRadius: '2px',
  },
});
