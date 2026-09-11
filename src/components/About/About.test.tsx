import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { About } from './About';
import { initialSiteData, SiteDataContext } from '../../utils/siteData';

describe('About', () => {
  it('renders provider biography content and migrated styles', () => {
    const siteData = {
      ...initialSiteData,
      aboutItem: [
        {
          biography: [
            { id: 1, text: 'Injected introduction.' },
            {
              id: 2,
              text: 'Injected workplace text ',
              linkLabel: 'webpage',
              suffix: '.',
            },
          ],
        },
      ],
    };

    render(
      <SiteDataContext.Provider value={siteData}>
        <About />
      </SiteDataContext.Provider>,
    );

    expect(screen.getByText('Injected introduction.')).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Hello! My name is Eddie and I enjoy creating things on the world wide web!',
      ),
    ).not.toBeInTheDocument();

    const skandiaLink = screen.getByRole('link', { name: 'webpage' });
    expect(skandiaLink.parentElement).toHaveTextContent(
      'Injected workplace text webpage.',
    );
    expect(skandiaLink).toHaveAttribute('href', 'https://www.skandia.se');
    expect(skandiaLink).toHaveAttribute('target', '_blank');
    expect(skandiaLink).toHaveAttribute('rel', 'noopener noreferrer');

    const aboutSection = document.getElementById('about');
    const biographyBody = screen
      .getByText('Injected introduction.')
      .closest('div');
    const profileFrame = document.querySelector(
      'a[href="https://www.linkedin.com/in/eddiejostell/"]',
    );

    expect(aboutSection).not.toBeNull();
    expect(biographyBody).not.toBeNull();
    expect(profileFrame).not.toBeNull();
    expect(getComputedStyle(aboutSection!).display).toBe('flex');
    expect(getComputedStyle(biographyBody!).fontSize).toBe('16px');
    expect(getComputedStyle(profileFrame!).boxShadow).toContain(
      'rgba(0, 0, 0, 0.1)',
    );
  });
});
