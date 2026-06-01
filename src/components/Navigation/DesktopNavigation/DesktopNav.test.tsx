import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DesktopNavigation } from './DesktopNavigation';

describe('DesktopNavigation', () => {
  let toggleContact = vi.fn();
  let showResumeOnClick = vi.fn();

  const buildNavItems = () => [
    <li key='1'>
      <a href='/home'>Home</a>
    </li>,
    <li key='2'>
      <a href='/about'>About</a>
    </li>,
    <li key='3'>
      <a href='/portfolio'>Portfolio</a>
    </li>,
    <li key='4'>
      <button onClick={toggleContact}>Contact</button>
    </li>,
    <li key='5'>
      <button onClick={showResumeOnClick}>Resume</button>
    </li>,
  ];

  const renderDesktopNav = () =>
    render(<DesktopNavigation navItems={buildNavItems()} />);

  beforeEach(() => {
    toggleContact = vi.fn();
    showResumeOnClick = vi.fn();
  });

  it('renders the desktop navigation wrapper', () => {
    renderDesktopNav();
    expect(screen.getByTestId('desktop-navigation')).toBeInTheDocument();
  });

  it('renders all provided navigation items', () => {
    renderDesktopNav();
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
    ['Home', 'About', 'Portfolio', 'Contact', 'Resume'].forEach((label) =>
      expect(screen.getByText(label)).toBeInTheDocument(),
    );
  });

  it('renders no list items when navItems is empty', () => {
    render(<DesktopNavigation navItems={[]} />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  it('forwards clicks on the Contact button', async () => {
    const user = userEvent.setup();
    renderDesktopNav();
    await user.click(screen.getByRole('button', { name: 'Contact' }));
    expect(toggleContact).toHaveBeenCalledTimes(1);
  });

  it('forwards clicks on the Resume button', async () => {
    const user = userEvent.setup();
    renderDesktopNav();
    await user.click(screen.getByRole('button', { name: 'Resume' }));
    expect(showResumeOnClick).toHaveBeenCalledTimes(1);
  });
});
