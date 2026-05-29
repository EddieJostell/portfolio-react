export const GITHUB_OWNER = 'EddieJostell';
export const GITHUB_REPO = 'portfolio-react';

export interface Commit {
  sha: string;
  htmlUrl: string;
  message: string;
  authorName: string;
  authorDate: string;
}

interface GitHubCommitResponse {
  sha: string;
  html_url: string;
  commit: {
    message: string;
    author: { name: string; date: string } | null;
  };
}

const CACHE_PREFIX = 'gh-commit:';
const memoryCache = new Map<string, Commit>();

export const __clearCommitCache = (): void => {
  memoryCache.clear();
};

const readSessionCache = (sha: string): Commit | null => {
  if (typeof sessionStorage === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(CACHE_PREFIX + sha);
    return raw ? (JSON.parse(raw) as Commit) : null;
  } catch {
    return null;
  }
};

const writeSessionCache = (commit: Commit): void => {
  if (typeof sessionStorage === 'undefined') return;
  try {
    sessionStorage.setItem(CACHE_PREFIX + commit.sha, JSON.stringify(commit));
  } catch {
    /* quota exceeded or disabled — ignore */
  }
};

export const fetchCommit = async (sha: string): Promise<Commit> => {
  const cached = memoryCache.get(sha) ?? readSessionCache(sha);
  if (cached) {
    memoryCache.set(sha, cached);
    return cached;
  }

  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/commits/${sha}`;
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API ${response.status} for ${sha}`);
  }

  const data = (await response.json()) as GitHubCommitResponse;
  const commit: Commit = {
    sha: data.sha,
    htmlUrl: data.html_url,
    message: data.commit.message,
    authorName: data.commit.author?.name ?? 'Unknown',
    authorDate: data.commit.author?.date ?? '',
  };

  memoryCache.set(sha, commit);
  writeSessionCache(commit);
  return commit;
};

export const fetchCommits = async (shas: string[]): Promise<Commit[]> => {
  const results = await Promise.allSettled(shas.map(fetchCommit));
  return results
    .filter(
      (r): r is PromiseFulfilledResult<Commit> => r.status === 'fulfilled',
    )
    .map((r) => r.value);
};
