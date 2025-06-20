import { Fragment, ReactNode } from 'react';
import { Twitter, GitHub, Linkedin, Instagram } from 'react-feather';

export interface ISkillsItem {
  id: number;
  skill: string;
}

export const SkillsInfo: ISkillsItem[] = [
  { id: 0, skill: 'HTML/CSS' },
  { id: 1, skill: 'JAVASCRIPT' },
  { id: 2, skill: 'REACT' },
  { id: 3, skill: 'TYPESCRIPT' },
  { id: 4, skill: 'EPISERVER / CMS' },
  { id: 5, skill: 'SASS/LESS' },
  { id: 6, skill: 'SEMANTIC-UI-REACT' },
  { id: 7, skill: 'BOOTSTRAP' },
  { id: 8, skill: 'FRAMER-MOTION' },
  { id: 9, skill: 'STYLED-COMPONENTS' },
];

export interface ISocialMediaLink {
  id: number;
  title: string;
  iconSrc?: any;
  text: string;
  link?: string;

  ariaLabel: string;
}

export const SocialMediaLinks: ISocialMediaLink[] = [
  /*  {
    id: 1,
    title: '+46 73 026 30 92',
    iconSrc: iconPhone,
    text: 'Give me a call!',
  }, */
  /*   {
    id: 2,
    title: 'Email',
    iconSrc: iconMail,
    link: 'mailto:eddie.jostell@gmail.com',
    text: 'Send me a email!',
  }, */
  {
    id: 3,
    title: 'LinkedIn',
    iconSrc: <Linkedin />,
    link: 'https://www.linkedin.com/in/eddiejostell/',
    text: 'Add me to your network!',
    ariaLabel: 'Open LinkedIn profile',
  },
  {
    id: 4,
    title: 'Github',
    iconSrc: <GitHub />,
    link: 'https://github.com/EddieJostell/',
    text: 'Checkout my projects on Github!',
    ariaLabel: 'Open Github profile',
  },
  {
    id: 5,
    title: 'Instagram',
    iconSrc: <Instagram />,
    link: 'https://www.instagram.com/eduardojostello/',
    text: 'Be cool and follow me on Instagram!',
    ariaLabel: 'Open Instagram profile',
  },
  {
    id: 6,
    title: 'Twitter',
    iconSrc: <Twitter />,
    link: 'https://x.com/VastoLorde117/',
    text: 'Be cool and follow me on Twitter!',
    ariaLabel: 'Open Twitter profile',
  },
];

export interface IAboutMe {
  likes: string;
  personal: IPersonal;
  gamer: string;
}

export interface IPersonal {
  name: string;
  age: string;
  from: string;
  occupation: string;
}
export const AboutMe: IAboutMe[] = [
  {
    likes:
      'When Im not hitting the keyboard to create magic on the web or playing games I like to hang out with my friends, go to the gym, long walks, relax with movies/tvshows or just listening to good music.',
    personal: {
      name: "Edward 'Eddie' Jostell",
      age: '33 summers',
      from: 'Stockholm, Sweden',
      occupation: 'Frontend Developer',
    },
    gamer:
      'Before I wanted to become a web-developer I played at a semi-professional level in the computer game Counter Strike - Global Offensive. Even tho I dont play on that level anymore I still dream of a comeback.',
  },
];

export interface INavLinkItem {
  id: number;
  text: string;
  path: string;
  scrollId: string;
  type?: 'external' | 'localLink' | 'button';
  ariaLabel: string;
}
export const NavigationLinks: INavLinkItem[] = [
  {
    id: 1,
    text: 'About',
    path: '/About',
    scrollId: 'about',
    type: 'localLink',
    ariaLabel: 'Scroll to About section',
  },
  {
    id: 2,
    text: 'Projects',
    path: '/Projects',
    scrollId: 'portfolio',
    type: 'localLink',
    ariaLabel: 'Scroll to Projects section',
  },
  {
    id: 3,
    text: 'Contact',
    path: '/Contact',
    scrollId: 'contact',
    type: 'button',
    ariaLabel: 'Open Contact form',
  },
  {
    id: 4,
    text: 'Resumé',
    path: '',
    scrollId: 'resume',
    type: 'external',
    ariaLabel: 'Open Resumé PDF',
  },
];

export interface IPortfolioItem {
  id: number;
  title: string;
  tech: string;
  link: string;
  img: string;
  text: string;
  github?: string;
}
export const ProjectList: IPortfolioItem[] = [
  {
    id: 1,
    title: 'COOP',
    tech: '#HTML #CSS/LESS #jQuery #TypeScript #ASP.NET/MVC #EPiServer',
    link: 'https://www.coop.se',
    img: 'img/coop.JPG',
    text: 'At my previous job I was the lead frontend developer in the team that developed and managed the website for the grocery store company COOP in Sweden.',
  },
  {
    id: 2,
    title: 'Cloud9 Reborn',
    tech: '#HTML #CSS/SASS #JavaScript/jQuery #AJAX',
    link: 'https://eddiejostell.github.io/Cloud9-Reborn/',
    img: 'img/cloud9.JPG',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    github: '123',
  },
  /*   {
    id: 3,
    title: 'News Hub',
    tech: '#HTML #CSS/SASS #JavaScript/jQuery #AJAX',
    link: 'https://eddiejostell.github.io/News-Hub/',
    img: 'img/news-hub.JPG',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }, */
  {
    id: 4,
    title: 'Movie Database',
    tech: '#HTML #CSS/SASS #JavaScript #Bootstrap',
    link: 'https://eddiejostell.github.io/MovieDatabase/',
    img: 'img/moviedatabase.JPG',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    github: '',
  },
  {
    id: 5,
    title: 'TODO-APP',
    tech: '#HTML #CSS #JavaScript',
    link: 'https://eddiejostell.github.io/todo-app/',
    img: 'img/todo.JPG',
    text: 'Simple TODO-APP created with HTML, CSS and Javascript.',
    github: '',
  },
  {
    id: 6,
    title: 'FOOD-APP',
    tech: '#HTML #CSS #JavaScript',
    link: 'https://eddiejostell.github.io/food-app/',
    img: 'img/food-app.JPG',
    text: 'A single page responsive web app that will help you make a decision on what to eat for lunch or dinner. Built with HTML, CSS and Javascript.',
    github: '',
  },
  {
    id: 7,
    title: 'REACT-FOOD',
    tech: '#REACT #Tailwindcss',
    link: 'https://eddiejostell.github.io/react-food/',
    img: '',
    text: 'New and improved version of my food app. Made with React and Tailwindcss.',
    github: '',
  },
  {
    id: 8,
    title: 'SKANDIA',
    tech: '#REACT #Typescript #HTML #CSS #jQuery #EPiServer',
    link: 'https://www.skandia.se',
    img: '',
    text: 'My current job where my team develop and manage the graphical frameworks that is used by all other developer teams on Skandia.',
  },
];

export interface IQuoteItem {
  id: number;
  quote: string;
  author: string;
}
export const QuoteInfo: IQuoteItem[] = [
  {
    id: 1,
    quote:
      'A tree falls in the forest, no one puts it on YouTube. Did it ever really happen?',
    author: 'Bodhi, Point Break 2015',
  },
  {
    id: 2,
    quote:
      "Reality can never live up to that fantasy that you have in your head. You'll be much happier if you accept the fact that real life is never perfect.",
    author: 'Unknown',
  },
  {
    id: 3,
    quote: "Of all the things I've lost I miss my mind the most.",
    author: 'Ozzy Osbourne.',
  },
  {
    id: 4,
    quote:
      'I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.',
    author: 'Bruce Lee.',
  },
  {
    id: 5,
    quote: 'Love all, trust a few, do wrong to none.',
    author: 'William Shakespeare.',
  },
  {
    id: 6,
    quote: 'We need fantasy to survive reality.',
    author: 'Lady Gaga.',
  },
  {
    id: 7,
    quote: 'Now I am become death, the destroyer of worlds.',
    author: 'J. Robert Oppenheimer.',
  },
  {
    id: 8,
    quote:
      'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
  {
    id: 9,
    quote:
      'Success usually comes to those who are too busy to be looking for it.',
    author: 'Henry David Thoreau',
  },
  {
    id: 10,
    quote:
      "Don't be distracted by criticism. Remember -- the only taste of success some people get is to take a bite out of you.",
    author: 'Zig Ziglar',
  },
  {
    id: 11,
    quote: 'I have nothing to offer but blood, toil, tears and sweat.',
    author: 'Winston Churchill',
  },
  {
    id: 12,
    quote:
      'My family is everything. I am what I am thanks to my mother, my father, my brother, my sister... because they have given me everything. The education I have is thanks to them.',
    author: 'Ronaldinho',
  },
  {
    id: 13,
    quote: "Clear eyes, full hearts, can't lose.",
    author: 'Coach Eric Taylor, Friday Night Lights (2006-2011)',
  },
  {
    id: 14,
    quote:
      'Just because you lost me as a friend doesn’t mean you gained me as an enemy. I’m bigger than that. I still wanna see you eat, just not at my table.',
    author: 'Tupac Shakur',
  },
  {
    id: 15,
    quote:
      'All that is gold does not glitter, Not all those who wander are lost; The old that is strong does not wither, Deep roots are not reached by the frost. From the ashes a fire shall be woken, A light from the shadows shall spring; Renewed shall be blade that was broken, The crownless again shall be king.',
    author: 'J.R.R. Tolkien, The Fellowship of the Ring',
  },
  {
    id: 16,
    quote:
      'A man who lays a hand on a woman is scum. Living as scum is the same as being dead.',
    author: 'Abarai Renji, Bleach, episode 363',
  },
  {
    id: 17,
    quote: 'I know, too, that death is the only god who comes when you call.',
    author: 'Roger Zelazny, Frost & Fire ',
  },
  {
    id: 18,
    quote: 'Spanning years and continents. Lives ruined and bloodshed. Epic.',
    author: 'Logan Echolls, Veronica Mars ',
  },
];
