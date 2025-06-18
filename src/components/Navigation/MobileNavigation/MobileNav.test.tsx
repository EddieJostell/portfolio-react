import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { render, screen, cleanup, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MobileNavigation } from './MobileNavigation';

describe('MobileNavigation', () => {
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
      <button onClick={() => {}}>Contact</button>
    </li>,
    <li key='item5' data-testid='nav-item'>
      <button onClick={() => {}}>Resume</button>
    </li>,
  ];

  const mockProps = {
    toggleNav: vi.fn(),
    toggleContact: vi.fn(),
    navItems: mockNavItems,
    showResumeOnClick: vi.fn(),
  };

  const renderMobileNav = (isOpen = false, props = {}) => {
    return render(
      <MobileNavigation {...mockProps} {...props} navIsOpen={isOpen} />
    );
  };

  // Reset after each test
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  // Group tests by feature/behavior
  describe('Menu Icon Display', () => {
    it('should display hamburger icon when menu is closed', () => {
      renderMobileNav(false);

      const hamburgerIcon = screen.getByLabelText('Open menu');
      expect(hamburgerIcon).toBeInTheDocument();

      const closeIcon = screen.queryByLabelText('Close menu');
      expect(closeIcon).not.toBeInTheDocument();
    });

    it('should display close (X) icon when menu is open', () => {
      renderMobileNav(true);

      const closeIcon = screen.getByLabelText('Close menu');
      expect(closeIcon).toBeInTheDocument();

      const hamburgerIcon = screen.queryByLabelText('Open menu');
      expect(hamburgerIcon).not.toBeInTheDocument();
    });
  });

  describe('Mobile Links Container', () => {
    it('should not display mobile links container when menu is closed', () => {
      renderMobileNav(false);

      const mobileLinksContainer = screen.queryByTestId(
        'mobile-links-container'
      );
      expect(mobileLinksContainer).not.toBeInTheDocument();
    });

    it('should display mobile links container when menu is open', () => {
      renderMobileNav(true);

      const mobileLinksContainer = screen.getByTestId('mobile-links-container');
      expect(mobileLinksContainer).toBeInTheDocument();
    });

    it('should display all navigation items when menu is open', () => {
      renderMobileNav(true);

      const mobileLinksContainer = screen.getByTestId('mobile-links-container');
      const navItems = within(mobileLinksContainer).getAllByTestId('nav-item');

      expect(navItems).toHaveLength(5);
      expect(mobileLinksContainer).toHaveTextContent('Home');
      expect(mobileLinksContainer).toHaveTextContent('About');
      expect(mobileLinksContainer).toHaveTextContent('Contact');
      expect(mobileLinksContainer).toHaveTextContent('Portfolio');
      expect(mobileLinksContainer).toHaveTextContent('Resume');
    });
  });

  describe('Interaction Handlers', () => {
    const toggleNav = vi.fn();
    beforeEach(() => {
      vi.clearAllMocks();
    });

    it('should call toggleNav when hamburger icon is clicked', async () => {
      const user = userEvent.setup();

      renderMobileNav(false, { toggleNav: toggleNav });

      const hamburgerIcon = screen.getByLabelText('Open menu');
      await user.click(hamburgerIcon);

      expect(toggleNav).toHaveBeenCalledTimes(1);
      expect(toggleNav).toHaveBeenCalledWith(true);
    });

    it('should call toggleNav when close icon is clicked', async () => {
      const user = userEvent.setup();

      renderMobileNav(true, { toggleNav: toggleNav });

      const closeIcon = screen.getByLabelText('Close menu');
      await user.click(closeIcon);

      expect(toggleNav).toHaveBeenCalledTimes(1);
      expect(toggleNav).toHaveBeenCalledWith(false);
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes on menu button', () => {
      renderMobileNav(false);

      const menuButton = screen.getByLabelText('Open menu');
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');

      // Re-render with menu open
      cleanup();
      renderMobileNav(true);

      const openMenuButton = screen.getByLabelText('Close menu');
      expect(openMenuButton).toHaveAttribute('aria-expanded', 'true');
    });
  });
});
