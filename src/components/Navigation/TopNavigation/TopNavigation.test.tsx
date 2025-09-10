import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TopNavigation } from './TopNavigation';
import { HelperContext, IContextState } from '../../../utils/HelperContext';
import { vi } from 'vitest';
import * as hooks from '../../../utils/hooks';

// Mock useMediaQuery and scrollTop
vi.mock('../../../utils/hooks', () => ({
  scrollTop: vi.fn(),
  useMediaQuery: vi.fn(),
}));

describe('TopNavigation', () => {
  const mockToggleNav = vi.fn();
  const mockToggleContact = vi.fn();

  const mockNavLinkItems = [
    {
      id: 1,
      text: 'About',
      path: '/About',
      scrollId: 'about',
      type: 'localLink' as 'localLink',
      ariaLabel: 'Go to About',
    },
    {
      id: 2,
      text: 'Projects',
      path: '/Projects',
      scrollId: 'projects',
      type: 'localLink' as 'localLink',
      ariaLabel: 'Go to Projects',
    },
    {
      id: 3,
      text: 'Contact',
      path: '/Contact',
      scrollId: 'contact',
      type: 'button' as 'button',
      ariaLabel: 'Contact me',
    },
    {
      id: 4,
      text: 'Resume',
      path: '',
      scrollId: 'resume',
      type: 'external' as 'external',
      ariaLabel: 'Show resume',
    },
  ];

  const mockContextValue: IContextState = {
    navLinkItem: mockNavLinkItems,
    portItem: [],
    quoteItem: [],
    routeItem: [],
    aboutItem: [],
    socialItem: [],
    skillsItem: [],
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders MobileNavigation on mobile', () => {
    (hooks.useMediaQuery as any).mockReturnValue(true);

    render(
      <HelperContext.Provider value={mockContextValue}>
        <TopNavigation
          name='E'
          navIsOpen={false}
          toggleNav={mockToggleNav}
          toggleContact={mockToggleContact}
        />
      </HelperContext.Provider>
    );

    expect(screen.getByTestId('mobile-navigation')).toBeInTheDocument();
    expect(screen.queryByTestId('desktop-navigation')).not.toBeInTheDocument();
  });

  it.only('renders DesktopNavigation on desktop', () => {
    (hooks.useMediaQuery as any).mockReturnValue(false);

    render(
      <HelperContext.Provider value={mockContextValue}>
        <TopNavigation
          name='E'
          navIsOpen={false}
          toggleNav={mockToggleNav}
          toggleContact={mockToggleContact}
        />
      </HelperContext.Provider>
    );

    expect(screen.getByTestId('desktop-navigation')).toBeInTheDocument();
    expect(screen.queryByTestId('mobile-navigation')).not.toBeInTheDocument();
  });

  it('calls scrollTop when logo is clicked', () => {
    (hooks.useMediaQuery as any).mockReturnValue(false);

    render(
      <HelperContext.Provider value={mockContextValue}>
        <TopNavigation
          name='E'
          navIsOpen={false}
          toggleNav={mockToggleNav}
          toggleContact={mockToggleContact}
        />
      </HelperContext.Provider>
    );

    const logo = screen.getByLabelText(
      'CreatorLogo press to scroll to top of the page'
    );
    fireEvent.click(logo);
    expect(hooks.scrollTop).toHaveBeenCalled();
  });
});
