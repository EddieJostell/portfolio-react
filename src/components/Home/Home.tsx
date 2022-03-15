import { motion } from 'framer-motion';
import * as React from 'react';
import { isMobileMax } from '../../utils/userAgent';
import { Container } from '../Container/Container';
import { QuoteContent } from '../QuoteContent/QuoteContent';
import './Home.scss';

interface IHomeProps {}

export const Home = (props: IHomeProps) => {
  const personalInfo = () => {
    let name = "Hello my name is Edward 'Eddie' Jostell";
    let work = 'I am a Frontend Developer';
    let onlyName = name.substring(17, name.length);
    let onlyWork = work.substring(7, work.length);

    return (
      <>
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <span className='name'>{onlyName}</span>
        </motion.div>
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <span className='work'>{onlyWork}</span>
        </motion.div>
      </>
    );
  };

  return (
    <div className='Home' id='home'>
      <Container>
        <div className='Home-banner'>{personalInfo()}</div>
        {isMobileMax && <QuoteContent />}
      </Container>
    </div>
  );
};

//https://stackoverflow.com/questions/42094060/changing-shuffling-text-every-1-5-second-in-a-react-component

/*  let robin: JSX.Element[] = quoteList.map((q: IQuoteItem, key: any) => (
    <QuoteContent key={key} quote={q.quote} author={q.author} />
  )); */
