import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../../App';
import Container from '../../components/Container/Container';
/* import Navigation from '../../components/Navigation/Navigation'; */

afterEach(() => {
  cleanup();
});

const containerChildren = '<div>HEJ</div>';

test('renders App component', () => {
  render(<App />);
  //screen.debug();
  const AppElement = screen.getByTestId('application');
  expect(AppElement).not.toBe(undefined);
});

test('renders Container component', () => {
  render(<Container children={containerChildren} />);
  const ContainerElement = screen.getByTestId('container');
  expect(ContainerElement).not.toBe(undefined);
});

/* test('renders Navigation component', () => {
  render(<Navigation name="Edward" />);
  const ContainerElement = screen.getByTestId('container');
  expect(ContainerElement).not.toBe(undefined);
}); */