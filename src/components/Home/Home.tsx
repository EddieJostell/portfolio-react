import { motion } from 'framer-motion';
import { FC } from 'react';
import { Container } from '../Container/Container';
import { QuoteContent } from '../QuoteContent/QuoteContent';
import './Home.scss';
import { useMediaQuery } from '../../utils/hooks';

export const Home: FC<{}> = () => {
  const mobileMaxWidth = useMediaQuery('(min-width: 767px)');
  const NameWorkAnimation = {
    initial: { x: -500, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1.5, delay: 0.3 },
  };

  const personalInfo = () => {
    let name = "Hello my name is Edward 'Eddie' Jostell";
    let work = 'I am a Frontend Developer';
    let onlyName = name.substring(17, name.length);
    let onlyWork = work.substring(7, work.length);

    return (
      <>
        <motion.div key='my-name' {...NameWorkAnimation}>
          <span className='name'>{onlyName}</span>
        </motion.div>
        <motion.div key='my-work' {...NameWorkAnimation}>
          <span className='work'>{onlyWork}</span>
        </motion.div>
      </>
    );
  };

  return (
    <div className='Home' id='home'>
      <Container>
        <div className='Home-banner'>{personalInfo()}</div>
        {mobileMaxWidth && <QuoteContent />}
      </Container>
    </div>
  );
};

//https://stackoverflow.com/questions/42094060/changing-shuffling-text-every-1-5-second-in-a-react-component

/*  let robin: JSX.Element[] = quoteList.map((q: IQuoteItem, key: any) => (
    <QuoteContent key={key} quote={q.quote} author={q.author} />
  )); */
