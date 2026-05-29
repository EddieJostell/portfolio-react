import { render, screen, waitFor } from '@testing-library/react';
import { vi, beforeEach, afterEach, describe, it, expect } from 'vitest';
import { Commits } from './Commits';
import { __clearCommitCache } from '../../utils/github';

vi.mock('../../data/featuredCommits', () => ({
  featuredCommits: [
    { sha: 'aaaaaaa1111111111111111111111111111aaaaa', note: 'My note' },
    { sha: 'bbbbbbb2222222222222222222222222222bbbbb' },
  ],
}));

const makeCommitResponse = (sha: string, message: string) => ({
  sha,
  html_url: `https://github.com/EddieJostell/portfolio-react/commit/${sha}`,
  commit: {
    message,
    author: { name: 'Eddie', date: '2025-01-15T10:00:00Z' },
  },
});

describe('Commits', () => {
  beforeEach(() => {
    sessionStorage.clear();
    __clearCommitCache();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders fetched commits with note', async () => {
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input);
      const sha = url.split('/').pop()!;
      const message = sha.startsWith('aaa')
        ? 'feat: add cool thing\n\nbody'
        : 'fix: small bug';
      return new Response(JSON.stringify(makeCommitResponse(sha, message)), {
        status: 200,
      });
    });
    vi.stubGlobal('fetch', fetchMock);

    render(<Commits />);

    expect(await screen.findByText('feat: add cool thing')).toBeInTheDocument();
    expect(screen.getByText('fix: small bug')).toBeInTheDocument();
    expect(screen.getByText('My note')).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('renders nothing when all fetches fail', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response('nope', { status: 500 })),
    );

    const { container } = render(<Commits />);

    await waitFor(() => expect(container.firstChild).toBeNull());
  });
});
