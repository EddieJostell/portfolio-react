import React from 'react';
import { ContactSlim } from '../Contact/ContactSlim';
import { Container } from '../Container/Container';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className='Footer'>
      <Container>
        <div className='Footer-name'>E</div>
        <ContactSlim icons={false} />
      </Container>
    </div>
  );
};
