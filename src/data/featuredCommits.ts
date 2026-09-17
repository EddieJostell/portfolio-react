export interface FeaturedCommit {
  sha: string;
  note?: string;
}

import featuredCommitsData from './featuredCommits.json';

export const featuredCommits: FeaturedCommit[] = featuredCommitsData;
