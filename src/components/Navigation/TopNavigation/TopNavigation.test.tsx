import { render, screen, fireEvent } from '@testing-library/react';
import { TopNavigation } from './TopNavigation';
import { SiteDataContext, SiteData } from '../../../utils/siteData';
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
      type: 'localLink' as const,
      ariaLabel: 'Go to About',
    },
    {
      id: 2,
      text: 'Projects',
      path: '/Projects',
      scrollId: 'projects',
      type: 'localLink' as const,
      ariaLabel: 'Go to Projects',
    },
    {
      id: 3,
      text: 'Contact',
      path: '/Contact',
      scrollId: 'contact',
      type: 'button' as const,
      ariaLabel: 'Contact me',
    },
    {
      id: 4,
      text: 'Resume',
      path: '',
      scrollId: 'resume',
      type: 'external' as const,
      ariaLabel: 'Show resume',
    },
  ];

  const mockContextValue: SiteData = {
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
    vi.mocked(hooks.useMediaQuery).mockReturnValue(true);

    render(
      <SiteDataContext.Provider value={mockContextValue}>
        <TopNavigation
          name='E'
          navIsOpen={false}
          toggleNav={mockToggleNav}
          toggleContact={mockToggleContact}
        />
      </SiteDataContext.Provider>,
    );

    expect(screen.getByTestId('mobile-navigation')).toBeInTheDocument();
    expect(screen.queryByTestId('desktop-navigation')).not.toBeInTheDocument();
  });

  it('renders DesktopNavigation on desktop', () => {
    vi.mocked(hooks.useMediaQuery).mockReturnValue(false);

    render(
      <SiteDataContext.Provider value={mockContextValue}>
        <TopNavigation
          name='E'
          navIsOpen={false}
          toggleNav={mockToggleNav}
          toggleContact={mockToggleContact}
        />
      </SiteDataContext.Provider>,
    );

    expect(screen.getByTestId('desktop-navigation')).toBeInTheDocument();
    expect(screen.queryByTestId('mobile-navigation')).not.toBeInTheDocument();
  });

  it('calls scrollTop when logo is clicked', () => {
    vi.mocked(hooks.useMediaQuery).mockReturnValue(false);

    render(
      <SiteDataContext.Provider value={mockContextValue}>
        <TopNavigation
          name='E'
          navIsOpen={false}
          toggleNav={mockToggleNav}
          toggleContact={mockToggleContact}
        />
      </SiteDataContext.Provider>,
    );

    const logo = screen.getByLabelText(
      'CreatorLogo press to scroll to top of the page',
    );
    fireEvent.click(logo);
    expect(hooks.scrollTop).toHaveBeenCalled();
  });
});
