import styledComponent from '@emotion/styled';
import { motion } from 'framer-motion';
export const StyledFooterComponent = styledComponent('footer')(({}) => ({
  position: 'relative',
  padding: '30px',

  '@media (max-width: 768px)': {
    padding: '20px',
  },
}));

export const StyledFooterWrapper = styledComponent('div')(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledFooterLogo = styledComponent(motion.button)(({}) => ({
  position: 'relative',
  width: '200px',
  fontSize: '3rem',
  fontFamily: "'Diplomata', cursive",
  color: '#fff',
  transition: 'opacity 0.35s ease 0.65s',
  textDecoration: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  paddingBlock: '0',
  paddingInline: '0',
  borderWidth: '0',
  borderStyle: 'none',
  borderColor: 'none',
  borderImage: 'none',
}));

export const StyledScrollToTop = styledComponent(motion.div)(({}) => ({
  position: 'absolute',
  top: '22px',
  right: '-32px',
  fontSize: '0.75rem',
}));

export const StyledCreatorTag = styledComponent('div')(({}) => ({
  color: '#fff',
  fontSize: '0.875rem',
  fontFamily: "'Poppins', sans-serif",
}));
