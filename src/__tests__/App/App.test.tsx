import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../../App';
import { Container } from '../../components/Container/Container';
import { Navigation2 } from '../../components/Navigation/Navigation2';

afterEach(() => {
  cleanup();
});

// Mock the QuoteContent component
/* vi.mock('../../components/QuoteContent/QuoteContent', () => ({
  QuoteContent: () => (
    <div data-testid='mock-quote-content'>Mock Quote Content</div>
  ),
})); */

// Mock framer-motion
/* vi.mock('framer-motion', () => ({
  motion: {
    div: (props: any) => <div {...props} />,
    section: (props: any) => <section {...props} />,
    nav: (props: any) => <nav {...props} />,
    ul: (props: any) => <ul {...props} />,
    li: (props: any) => <li {...props} />,
    a: (props: any) => <a {...props} />,
    // Add any other motion components you use
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  useScroll: () => ({ scrollYProgress: { onChange: vi.fn(), current: 0 } }),
  useSpring: vi.fn(() => 0),
  useTransform: vi.fn((value) => value),
})); */

test('renders App component', () => {
  render(<App />);
  //screen.debug();
  const AppElement = screen.getByTestId('application');
  expect(AppElement).not.toBe(undefined);
});

test('renders Container component', () => {
  const containerChildren = '<div>HEJ</div>';
  render(<Container children={containerChildren} />);
  const ContainerElement = screen.getByTestId('container');
  expect(ContainerElement).not.toBe(undefined);
});

test('renders Navigation component', () => {
  render(
    <Navigation2
      name='Edward'
      toggleContact={() => {}}
      toggleNav={() => {}}
      navIsOpen={false}
      data-testid='navigation'
    />
  );

  const ContainerElement = screen.getByTestId('navigation');
  expect(ContainerElement).not.toBe(undefined);
});
