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
      <motion.div
        whileHover={{
          scale: 1.1,
          textShadow: '0px  0px 8px rgb(255,255,255)',
          transition: { duration: 0.2, delay: 0 },
        }}
        className='SkillCard'
        key={key}
      >
        <span className='skill-text'>{skill.skill}</span>
      </motion.div>
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
      <span className='skill-title'>{title}</span>
      {showSkills()}
    </div>
  );
};
