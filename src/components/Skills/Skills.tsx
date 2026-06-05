import { FC } from 'react';
import { SkillsItem } from '../../utils/data';
import { useSkills } from '../../utils/siteData';
import { Header } from '../Header/Header';
import './Skills.scss';

export const Skills: FC = () => {
  const skills = useSkills();

  const showSkills = () => {
    return skills.map((skill: SkillsItem) => (
      <li key={skill.skill}>{skill.skill}</li>
    ));
  };

  return (
    <div className='Skills'>
      <Header
        className='skills-title'
        title='Here are a few technologies I’ve been working with'
        size='h3'
        color='red'
      />
      <ul className='skills-list'>{showSkills()}</ul>
    </div>
  );
};
