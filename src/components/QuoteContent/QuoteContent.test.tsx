import { act, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { QuoteContent } from './QuoteContent';
import { initialSiteData, SiteDataContext } from '../../utils/siteData';

describe('QuoteContent', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the initial quote and author from the site data provider', () => {
    render(
      <SiteDataContext.Provider value={initialSiteData}>
        <QuoteContent />
      </SiteDataContext.Provider>,
    );

    expect(
      screen.getByText(initialSiteData.quoteItem[0].quote),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`- ${initialSiteData.quoteItem[0].author}`),
    ).toBeInTheDocument();
  });

  it('renders the active layout and typography styles', () => {
    render(
      <SiteDataContext.Provider value={initialSiteData}>
        <QuoteContent />
      </SiteDataContext.Provider>,
    );

    const quote = screen.getByText(initialSiteData.quoteItem[0].quote);
    const author = screen.getByText(`- ${initialSiteData.quoteItem[0].author}`);
    const content = quote.parentElement;

    expect(content).toHaveStyle({
      width: '100%',
      position: 'absolute',
      bottom: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      color: '#edf2f4',
    });
    expect(quote).toHaveStyle({
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    });
    expect(author).toHaveStyle({
      fontStyle: 'italic',
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    });
  });

  it('replaces the quote after 20 seconds', () => {
    vi.useFakeTimers();

    render(
      <SiteDataContext.Provider value={initialSiteData}>
        <QuoteContent />
      </SiteDataContext.Provider>,
    );

    expect(
      screen.getByText(initialSiteData.quoteItem[0].quote),
    ).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(20000);
    });

    expect(
      screen.getByText(initialSiteData.quoteItem[1].quote),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`- ${initialSiteData.quoteItem[1].author}`),
    ).toBeInTheDocument();
  });
});
