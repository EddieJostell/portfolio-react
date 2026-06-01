import styled from '@emotion/styled';

export const StyledCommitsSection = styled('section')({
  padding: '60px 30px',
  color: '#edf2f4',
  fontFamily: "'Poppins', sans-serif",

  '@media (max-width: 768px)': {
    padding: '40px 20px',
  },
});

export const StyledCommitsHeading = styled('h2')({
  fontFamily: 'Goldman, Helvetica, Arial, sans-serif',
  fontSize: '2rem',
  marginBottom: '24px',
  textAlign: 'center',
});

export const StyledCommitList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: '0 auto',
  maxWidth: '780px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const StyledCommitItem = styled('li')({
  padding: '20px',
  border: '1px solid rgba(237, 242, 244, 0.15)',
  borderRadius: '8px',
  background: 'rgba(0, 0, 0, 0.25)',
  transition: 'transform 0.2s ease, border-color 0.2s ease',

  '&:hover': {
    transform: 'translateY(-2px)',
    borderColor: 'rgba(237, 242, 244, 0.4)',
  },
});

export const StyledCommitLink = styled('a')({
  color: '#edf2f4',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1.05rem',
  display: 'inline-block',
  marginBottom: '8px',

  '&:hover, &:focus': {
    textDecoration: 'underline',
  },
});

export const StyledCommitMeta = styled('div')({
  fontSize: '0.8rem',
  opacity: 0.7,
  marginBottom: '8px',
  fontFamily: 'monospace',
});

export const StyledCommitNote = styled('p')({
  margin: '8px 0 0',
  fontSize: '0.9rem',
  fontStyle: 'italic',
  opacity: 0.85,
});

export const StyledCommitsStatus = styled('p')({
  textAlign: 'center',
  opacity: 0.7,
  fontSize: '0.9rem',
});
