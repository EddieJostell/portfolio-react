import { motion } from 'framer-motion';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '../Container/Container';
import './About.scss';

interface IAboutProps {}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const About = (props: IAboutProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  console.log(errors);

  return (
    <div className='About' id='about'>
      <Container>
        <motion.h1
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 0.07,
            },
            hidden: { opacity: 0 },
          }}
          transition={{
            duration: 5,
            delay: 0.3,
          }}
          className='title'
        >
          ABOUT ME
        </motion.h1>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
            },
            hidden: { y: 200, opacity: 0 },
          }}
          transition={{
            duration: 2,
            delay: 0.1,
          }}
          className='box-container'
        >
          <div className='content'>
            <div className='box'>
              <h2 className=''>Likes</h2>
              <div className=''>
                When Im not hitting the keyboard to create magic on the web or
                playing games I like to hang out with my friends, go to the gym,
                long walks, relax with movies/tvshows or just listening to good
                music.
              </div>
            </div>

            <div className='box'>
              <h2 className=''>Me</h2>
              <div className=''>Name: Edward 'Eddie' Jostell.</div>
              <div className=''>Born: 1987.</div>
              <div className=''>From: Stockholm, Sweden.</div>
              <div className=''>Occupation: Frontend-developer.</div>
              <div className=''>Current workplace: Skandia.</div>
            </div>

            <div className='box'>
              <h2 className=''>Gamer</h2>
              <div className=''>
                Before I became a web-developer I played at a semi-professional
                level in the computer game Counter Strike - Global Offensive.
                Playing this game has helped me with my logical thinking and to
                work as part of a team, Even tho I dont play on that level
                anymore I still play for fun with my friends.
              </div>
            </div>
          </div>
          <div className='photo'>
            <div className='frame'>
              <motion.div
                whileHover={{
                  opacity: 1,
                  backgroundColor: 'transparent',
                  transition: { duration: 1, delay: 0 },
                }}
                className='layer'
              ></motion.div>
              <img src={process.env.PUBLIC_URL + 'KELEDW.jpg'} alt='profile' />
            </div>
          </div>
        </motion.div>

        <form
          className='Form-test'
          onSubmit={handleSubmit((data) => {
            console.log('data', data);
          })}
        >
          <h1>Get in touch!</h1>
          <label htmlFor='name'>Name: </label>
          <input
            placeholder='Name'
            {...register('name', { required: 'Name is required' })}
          />
          <p>{errors.name?.message}</p>
          <label htmlFor='email'>E-mail:</label>
          <input
            placeholder='E-mail'
            {...register('email', { required: 'E-mail is required' })}
          />
          <p>{errors.email?.message}</p>
          <label htmlFor='message'>Message:</label>
          <textarea
            rows={5}
            placeholder='Message'
            {...register('message', {
              required: true,
              minLength: { value: 5, message: 'Min length is 5' },
            })}
          />
          <p>{errors.message?.message}</p>
          <input type='submit' value='Click Me!' />
        </form>
      </Container>
    </div>
  );
};

//https://stackoverflow.com/questions/42094060/changing-shuffling-text-every-1-5-second-in-a-react-component
