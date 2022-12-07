import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ISkillsItem } from '../../utils/data';
import { HelperContext, IContextState } from '../../utils/HelperContext';
import './Skills.scss';

interface ISkillsProps {
  title: string;
}
export const Skills = (props: ISkillsProps): JSX.Element => {
  const { title } = props;
  const skillsInfo = useContext<IContextState>(HelperContext);

  const showSkills = () => {
    return skillsInfo.skillsItem.map((skill: ISkillsItem, key: number) => (
      <li key={key}>{skill.skill}</li>
    ));
  };

  return (
    /*  <div className='Skills' id='skills'>
      <Container>
        <h1 className='title'>Skills</h1>
        <div className='Skills-container'>{showSkills()}</div>
      </Container>
    </div> */
    <div className='Skills'>
      <span className='skills-title'>{title}</span>
      <ul className='skills-list'>{showSkills()}</ul>
    </div>
  );
};
