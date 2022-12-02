import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ISkillsItem } from '../../utils/data';
import { HelperContext, IContextState } from '../../utils/HelperContext';
import './Skills.scss';

export const Skills = (): JSX.Element => {
  const skillsInfo = useContext<IContextState>(HelperContext);

  const showSkills = () => {
    return skillsInfo.skillsItem.map((skill: ISkillsItem, key: number) => (
      <motion.div
        /*  initial='visible' */
        /* viewport={{ once: true }} */
        /* variants={{
          visible: {
            opacity: 1,
            translateX: 0,
            translateY: 0,
          },
          hidden: { opacity: 0, translateX: -50, translateY: -50 },
        }}
        transition={{
          duration: 0.4,
          delay: !showAnimation ? key * 0.4 : undefined,
        }} */
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
      <span className='skill-title'>
        Here are a few technologies I’ve been working with
      </span>
      {showSkills()}
    </div>
  );
};
