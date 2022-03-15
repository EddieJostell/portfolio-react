import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { ISkillsItem } from '../../utils/data';
import { HelperContext, IContextState } from '../../utils/HelperContext';
import { Container } from '../Container/Container';
import './Skills.scss';

export const Skills = () => {
  const skillsInfo = useContext<IContextState>(HelperContext);

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(true);
    }, 5000);
  }, []);

  const showSkills = () => {
    return skillsInfo.skillsItem.map((skill: ISkillsItem, key: number) => (
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={{
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
        }}
        whileHover={{
          scale: 1.1,
          textShadow: '0px  0px 8px rgb(255,255,255)',
          transition: { duration: 0.2, delay: 0 },
        }}
        className='Card'
        key={key}
      >
        <h1>{skill.skill}</h1>
      </motion.div>
    ));
  };

  return (
    <div className='Skills' id='skills'>
      <Container>
        <h1 className='title'>Skills</h1>
        <div className='Skills-container'>{showSkills()}</div>
      </Container>
    </div>
  );
};
