export interface FeaturedCommit {
  sha: string;
  note?: string;
}

/**
 * Manually curated list of commits to highlight on the portfolio.
 * Replace the placeholder SHAs with real ones from the repo.
 */
export const featuredCommits: FeaturedCommit[] = [
  {
    sha: '2d3a0bedb3662eef0d5b289ddc6d107fc1d07b4f',
    note: 'Upgraded React to v19.',
  },
  {
    sha: 'a27f30e0de0e86ce14666d0c82fabe281282a13a',
    note: 'Updated Vite and Vitest to their latest major versions.',
  },
  {
    sha: 'ee726656cf0b220ae42e0fbe779a18e38b4db336',
    note: 'Refactored App.scss in preparation for the Emotion theme provider integration.',
  },
  {
    sha: '2705285d2fc4ba52e6c590a2b3b05fafff9f90a9',
    note: 'Added vite-plugin-compression for smaller production bundles.',
  },
  {
    sha: '83ea6cf06337c7d06a684f7d0ce4c98c272f0d16',
    note: 'Migrated the test runner from Jest to Vitest.',
  },
  {
    sha: '5694e99b59f44f77033e33e85d2905c51fe18a28',
    note: 'Set up the Vitest configuration.',
  },
  {
    sha: 'd7790a8dd0c06be0f1d6c47689f642e80d0954a7',
    note: 'Updated import paths across the codebase after the Vite migration.',
  },
  {
    sha: 'b6e873fc7503e6a77805e492e9fbc67c7bc7d04d',
    note: 'Updated tsconfig and created vite.config for the new Vite build pipeline.',
  },
  {
    sha: '2ad958fd49c782d51f7bc1adb2334ec0d6a98203',
    note: 'Added @emotion to enable styled-components-style styling with CSS-in-JS.',
  },
  {
    sha: '4ebe8ada2a0889bcab9c93403116f28dfecd97a2',
    note: 'Migrated the project from Create React App (react-scripts) to Vite.',
  },
];
