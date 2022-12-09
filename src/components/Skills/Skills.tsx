import { useContext } from 'react';
import { ISkillsItem } from '../../utils/data';
import { HelperContext, IContextState } from '../../utils/HelperContext';
import { Header } from '../Header/Header';
import './Skills.scss';

export const Skills = (): JSX.Element => {
  const skillsInfo = useContext<IContextState>(HelperContext);

  const showSkills = () => {
    return skillsInfo.skillsItem.map((skill: ISkillsItem, key: number) => (
      <li key={key}>{skill.skill}</li>
    ));
  };

  return (
    <div className='Skills'>
      <Header
        className='skills-title'
        title='Here are a few technologies I’ve been working with'
        size='h4'
        color
      />
      <ul className='skills-list'>{showSkills()}</ul>
    </div>
  );
};
