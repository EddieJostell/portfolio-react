import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { render, screen, cleanup, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DesktopNavigation } from './DesktopNavigation';

describe('DesktopNavigation', () => {
  const toggleContact = vi.fn();
  const showResumeOnClick = vi.fn();

  // Common test props
  const mockNavItems = [
    <li key='item1' data-testid='nav-item'>
      <a href='/home'>Home</a>
    </li>,
    <li key='item2' data-testid='nav-item'>
      <a href='/about'>About</a>
    </li>,
    <li key='item3' data-testid='nav-item'>
      <a href='/portfolio'>Portfolio</a>
    </li>,
    <li key='item4' data-testid='nav-item'>
      <button onClick={toggleContact}>Contact</button>
    </li>,
    <li key='item5' data-testid='nav-item'>
      <button onClick={showResumeOnClick}>Resume</button>
    </li>,
  ];
  const mockProps = {
    navItems: mockNavItems,
  };

  const renderDesktopNav = (props = {}) => {
    return render(<DesktopNavigation {...mockProps} {...props} />);
  };

  // Reset after each test
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  test('renders DesktopNavigation component', () => {
    renderDesktopNav();
    const navElement = screen.getByTestId('desktop-navigation');
    expect(navElement).toBeInTheDocument();
  });

  test('renders navigation items', () => {
    renderDesktopNav();
    const navElement = screen.getByTestId('desktop-navigation');
    const navItems = screen.getAllByTestId('nav-item');
    expect(navItems).toHaveLength(5);
    expect(navElement).toHaveTextContent('Home');
    expect(navElement).toHaveTextContent('About');
    expect(navElement).toHaveTextContent('Contact');
    expect(navElement).toHaveTextContent('Portfolio');
    expect(navElement).toHaveTextContent('Resume');
  });

  test('calls toggleContact when Contact button is clicked', async () => {
    const user = userEvent.setup();
    renderDesktopNav();
    const contactButton = screen.getByRole('button', { name: 'Contact' });

    expect(contactButton).toBeInTheDocument();
    await user.click(contactButton);
    expect(toggleContact).toHaveBeenCalledTimes(1);
  });

  test('calls showResumeOnClick when Resume button is clicked', async () => {
    const user = userEvent.setup();
    renderDesktopNav();
    const resumeButton = screen.getByRole('button', { name: 'Resume' });
    expect(resumeButton).toBeInTheDocument();
    await user.click(resumeButton);
    expect(showResumeOnClick).toHaveBeenCalledTimes(1);
  });
});
