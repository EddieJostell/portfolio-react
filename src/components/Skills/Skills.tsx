import { FC } from 'react';
import styled from '@emotion/styled';
import { SkillsItem } from '../../utils/data';
import { useSkills } from '../../utils/siteData';
import { Header } from '../Header/Header';

const SkillsSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '15px',
  zIndex: 1,
  fontFamily: 'Goldman',
  flexGrow: 1,
  paddingTop: '20px',
  width: '100%',
});

const SkillsTitle = styled(Header)({
  fontFamily: 'Goldman',
  '& h4': {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
});

const SkillsList = styled('ul')({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(100%))',
  gap: '0px 50px',
  padding: '0px',
  overflow: 'hidden',
  margin: '20px 0px 0px',

  '@media (min-width: 1100px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(250px, 200px))',
    gap: '0px 50px',
    padding: '0px',
    overflow: 'hidden',
    margin: '20px 0px 0px',
  },
});

const SkillsListItem = styled('li')({
  width: '100%',
  position: 'relative',
  marginBottom: '10px',
  paddingLeft: '20px',
  fontSize: '20px',
  color: '#fff',
  listStyleType: 'none',

  '&::before': {
    content: "'▹'",
    color: '#d90429',
    position: 'absolute',
    left: 0,
  },
});

export const Skills: FC = () => {
  const skills = useSkills();

  const showSkills = () => {
    return skills.map((skill: SkillsItem) => (
      <SkillsListItem key={skill.skill}>{skill.skill}</SkillsListItem>
    ));
  };

  return (
    <SkillsSection>
      <SkillsTitle
        title='Here are a few technologies I’ve been working with'
        size='h3'
        color='red'
      />
      <SkillsList>{showSkills()}</SkillsList>
    </SkillsSection>
  );
};
