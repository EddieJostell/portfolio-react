import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styledComponent from '@emotion/styled';

export const StyledTopNavigation = styledComponent('div')(({}) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledIconContainer = styledComponent('div')(({}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

export const StyledIcon = styledComponent('button')(({}) => ({
  fontSize: '3rem',
  fontFamily: "'Diplomata', cursive",
  color: '#edf2f4',
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

export const MenuIconWrapper = styledComponent('button')(({}) => ({
  color: '#edf2f4',
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

export const StyledNavigationContainer = styledComponent('nav')(({}) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledNavMenu = styledComponent(motion.ul)(({}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  listStyle: 'none',
  margin: 0,
  padding: 0,
}));

export const StyledNavMenuLink = styledComponent('li')(({}) => ({
  position: 'relative',
  margin: '1rem',
  listStyleType: 'none',
  cursor: 'pointer',
  fontFamily: "'Goldman', Times New Roman, Times, serif",
}));

export const NavigationLink = styledComponent(Link)(({}) => ({
  fontSize: '1.5rem',
  lineHeight: '2rem',
  listStyleType: 'none',
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#edf2f4',
  position: 'relative',

  '&:hover, &:active, &:visited': {
    color: '#fff',
  },

  '&:after': {
    bottom: '-4px',
    content: '""',
    display: 'block',
    height: '2px',
    left: '50%',
    position: 'absolute',
    background: '#d90429',
    transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
    width: '0',
  },

  '&:hover:after': {
    width: '100%',
    left: '0',
  },
}));

export const ContactLink = styledComponent('button')(({}) => ({
  fontFamily: "'Goldman', Times New Roman, Times, serif",
  backgroundColor: 'transparent',
  fontSize: '1.5rem',
  lineHeight: '2rem',
  listStyleType: 'none',
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#edf2f4',
  position: 'relative',
  paddingBlock: '0',
  paddingInline: '0',
  borderWidth: '0',
  borderStyle: 'none',
  borderColor: 'none',
  borderImage: 'none',

  '&:hover, &:active, &:visited': {
    color: '#fff',
  },

  '&:after': {
    bottom: '-4px',
    content: '""',
    display: 'block',
    height: '2px',
    left: '50%',
    position: 'absolute',
    background: '#d90429',
    transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
    width: '0',
  },

  '&:hover:after': {
    width: '100%',
    left: '0',
  },
}));

export const NavigationButton = styledComponent('button')(({}) => ({
  backgroundColor: 'transparent',
  fontSize: '1rem',
  lineHeight: '2rem',
  listStyleType: 'none',
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#d90429',
  border: '1px solid #d90429',
  borderRadius: '5px',
  padding: '8px',
  margin: '0',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  '&:hover, &:active': {
    backgroundColor: 'rgba(217, 4, 41, 0.2)',
    color: '#d90429',
    outline: 'none',
  },
}));
