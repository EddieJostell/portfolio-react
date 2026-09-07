import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Skills } from './Skills';
import { SiteDataProvider } from '../../utils/SiteDataContext';
import { initialSiteData } from '../../utils/siteData';

describe('Skills', () => {
  it('renders provider skills with the expected layout styles', () => {
    const { container } = render(
      <SiteDataProvider>
        <Skills />
      </SiteDataProvider>,
    );

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Here are a few technologies I’ve been working with',
      }),
    ).toBeInTheDocument();

    const list = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');
    initialSiteData.skillsItem.forEach(({ skill }) => {
      expect(listItems.map((item) => item.textContent)).toContain(skill);
    });

    const root = container.firstElementChild as HTMLElement;
    expect(getComputedStyle(root)).toMatchObject({
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      width: '100%',
    });
    expect(getComputedStyle(list)).toMatchObject({
      display: 'grid',
      padding: '0px',
      overflow: 'hidden',
      marginTop: '20px',
    });

    expect(
      getComputedStyle(list.firstElementChild as HTMLElement),
    ).toMatchObject({
      position: 'relative',
      paddingLeft: '20px',
      fontSize: '20px',
      color: 'rgb(255, 255, 255)',
      listStyleType: 'none',
    });
  });
});
