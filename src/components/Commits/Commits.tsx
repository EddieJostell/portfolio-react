import { useEffect, useState, FC } from 'react';
import { fetchCommits, type Commit } from '../../utils/github';
import { featuredCommits } from '../../data/featuredCommits';
import {
  StyledCommitsSection,
  StyledCommitsHeading,
  StyledCommitList,
  StyledCommitItem,
  StyledCommitLink,
  StyledCommitMeta,
  StyledCommitNote,
  StyledCommitsStatus,
} from './StyledCommitsElements';

type Status = 'idle' | 'loading' | 'success' | 'error';

const formatDate = (iso: string): string => {
  if (!iso) return '';
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString();
};

const firstLine = (message: string): string => message.split('\n')[0];

export const Commits: FC = () => {
  const [status, setStatus] = useState<Status>(
    featuredCommits.length === 0 ? 'idle' : 'loading',
  );
  const [commits, setCommits] = useState<Commit[]>([]);

  useEffect(() => {
    if (featuredCommits.length === 0) return;

    let cancelled = false;

    fetchCommits(featuredCommits.map((c) => c.sha))
      .then((result) => {
        if (cancelled) return;
        setCommits(result);
        setStatus(result.length > 0 ? 'success' : 'error');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (featuredCommits.length === 0 || status === 'error') return null;

  const noteBySha = new Map(featuredCommits.map((c) => [c.sha, c.note]));

  return (
    <StyledCommitsSection id='commits' aria-labelledby='commits-heading'>
      <StyledCommitsHeading id='commits-heading'>
        Selected Commits
      </StyledCommitsHeading>

      {status === 'loading' && (
        <StyledCommitsStatus role='status'>
          Loading commits…
        </StyledCommitsStatus>
      )}

      {status === 'success' && (
        <StyledCommitList>
          {commits.map((commit) => (
            <StyledCommitItem key={commit.sha}>
              <StyledCommitLink
                href={commit.htmlUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                {firstLine(commit.message)}
              </StyledCommitLink>
              <StyledCommitMeta>
                {commit.sha.slice(0, 7)} · {commit.authorName} ·{' '}
                {formatDate(commit.authorDate)}
              </StyledCommitMeta>
              {noteBySha.get(commit.sha) && (
                <StyledCommitNote>{noteBySha.get(commit.sha)}</StyledCommitNote>
              )}
            </StyledCommitItem>
          ))}
        </StyledCommitList>
      )}
    </StyledCommitsSection>
  );
};
