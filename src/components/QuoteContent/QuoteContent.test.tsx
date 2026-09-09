import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('framer-motion', async () => {
  const React = await import('react');

  const MotionSpan = React.forwardRef<
    HTMLSpanElement,
    React.HTMLAttributes<HTMLSpanElement>
  >((props, ref) => {
    const { animate, initial, onAnimationComplete, transition, ...spanProps } =
      props as React.HTMLAttributes<HTMLSpanElement> & {
        animate?: unknown;
        initial?: unknown;
        onAnimationComplete?: () => void;
        transition?: unknown;
      };

    void animate;
    void initial;
    void transition;

    return (
      <span ref={ref} {...spanProps}>
        {onAnimationComplete && (
          <button
            type='button'
            aria-label='Complete quote animation'
            onClick={onAnimationComplete}
          />
        )}
        {props.children}
      </span>
    );
  });
  MotionSpan.displayName = 'MotionSpan';

  const motion = new Proxy({}, { get: () => MotionSpan });

  return { motion };
});

import { QuoteContent } from './QuoteContent';
import { initialSiteData, SiteDataContext } from '../../utils/siteData';

describe('QuoteContent', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the initial quote and author from the site data provider', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.999);

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
    vi.spyOn(Math, 'random').mockReturnValue(0.999);

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

  it('replaces the quote after one completed animation', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.999);

    render(
      <SiteDataContext.Provider value={initialSiteData}>
        <QuoteContent />
      </SiteDataContext.Provider>,
    );

    expect(
      screen.getByText(initialSiteData.quoteItem[0].quote),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole('button', { name: 'Complete quote animation' }),
    );

    expect(
      screen.getByText(initialSiteData.quoteItem[1].quote),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`- ${initialSiteData.quoteItem[1].author}`),
    ).toBeInTheDocument();
  });

  it('shows every quote once per randomized round without repeating at the boundary', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.999);
    const quoteData = {
      ...initialSiteData,
      quoteItem: initialSiteData.quoteItem.slice(0, 3),
    };

    render(
      <SiteDataContext.Provider value={quoteData}>
        <QuoteContent />
      </SiteDataContext.Provider>,
    );

    const displayedQuotes = [screen.getByText(quoteData.quoteItem[0].quote)];

    fireEvent.click(
      screen.getByRole('button', { name: 'Complete quote animation' }),
    );
    displayedQuotes.push(screen.getByText(quoteData.quoteItem[1].quote));
    fireEvent.click(
      screen.getByRole('button', { name: 'Complete quote animation' }),
    );
    displayedQuotes.push(screen.getByText(quoteData.quoteItem[2].quote));
    const finalQuoteOfFirstRound = displayedQuotes.at(-1)?.textContent;

    fireEvent.click(
      screen.getByRole('button', { name: 'Complete quote animation' }),
    );
    const firstQuoteOfNextRound = screen.getByText(
      quoteData.quoteItem[0].quote,
    ).textContent;

    expect(
      new Set(displayedQuotes.map((quote) => quote.textContent)).size,
    ).toBe(3);
    expect(firstQuoteOfNextRound).not.toBe(finalQuoteOfFirstRound);
  });

  it('renders nothing for empty quote data', () => {
    const quoteData = { ...initialSiteData, quoteItem: [] };

    const { container } = render(
      <SiteDataContext.Provider value={quoteData}>
        <QuoteContent />
      </SiteDataContext.Provider>,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('keeps a single quote visible without completion-driven cycling', () => {
    const quoteData = {
      ...initialSiteData,
      quoteItem: [initialSiteData.quoteItem[0]],
    };

    render(
      <SiteDataContext.Provider value={quoteData}>
        <QuoteContent />
      </SiteDataContext.Provider>,
    );

    expect(screen.getByText(quoteData.quoteItem[0].quote)).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Complete quote animation' }),
    ).not.toBeInTheDocument();
  });

  it('advances exactly one quote for each completed animation', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.999);
    const quoteData = {
      ...initialSiteData,
      quoteItem: initialSiteData.quoteItem.slice(0, 3),
    };

    render(
      <SiteDataContext.Provider value={quoteData}>
        <QuoteContent />
      </SiteDataContext.Provider>,
    );

    expect(screen.getByText(quoteData.quoteItem[0].quote)).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole('button', { name: 'Complete quote animation' }),
    );

    expect(screen.getByText(quoteData.quoteItem[1].quote)).toBeInTheDocument();
    expect(
      screen.queryByText(quoteData.quoteItem[2].quote),
    ).not.toBeInTheDocument();
  });

  it('renders a valid quote when the collection shrinks during a round', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.999);
    const quoteData = {
      ...initialSiteData,
      quoteItem: initialSiteData.quoteItem.slice(0, 3),
    };
    const shortenedQuoteData = {
      ...initialSiteData,
      quoteItem: [initialSiteData.quoteItem[0]],
    };

    const { rerender } = render(
      <SiteDataContext.Provider value={quoteData}>
        <QuoteContent />
      </SiteDataContext.Provider>,
    );

    fireEvent.click(
      screen.getByRole('button', { name: 'Complete quote animation' }),
    );
    fireEvent.click(
      screen.getByRole('button', { name: 'Complete quote animation' }),
    );

    expect(() => {
      rerender(
        <SiteDataContext.Provider value={shortenedQuoteData}>
          <QuoteContent />
        </SiteDataContext.Provider>,
      );
    }).not.toThrow();
    expect(
      screen.getByText(shortenedQuoteData.quoteItem[0].quote),
    ).toBeInTheDocument();
  });
});
