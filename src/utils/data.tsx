export interface INavLinkItem {
  id: number;
  text: string;
  path: string;
}

export interface IPortfolioItem {
  id: number;
  title: string;
  tech: string;
  link: string;
  img: string;
  text: string;
}

export interface IQuoteItem {
  id: number;
  quote: string;
  author: string;
}

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

export const NavigationLinks: INavLinkItem[] = [
  { id: 1, text: 'ABOUT', path: '/' },
  {
    id: 2,
    text: 'PORTFOLIO',
    path: '/Portfolio',
  },
  { id: 3, text: 'CONTACT', path: '/Contact' },
];

export const ProjectList: IPortfolioItem[] = [
  {
    id: 1,
    title: 'COOP',
    tech: '#HTML #CSS/LESS #jQuery #TypeScript #ASP.NET/MVC #EPiServer',
    link: 'https://www.coop.se',
    img: 'img/coop.JPG',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Cloud9 Reborn',
    tech: '#HTML #CSS/SASS #JavaScript/jQuery #AJAX',
    link: 'https://eddiejostell.github.io/Cloud9-Reborn/',
    img: 'img/cloud9.JPG',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    title: 'News Hub',
    tech: '#HTML #CSS/SASS #JavaScript/jQuery #AJAX',
    link: 'https://eddiejostell.github.io/News-Hub/',
    img: 'img/news-hub.JPG',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    title: 'MovieDatabase',
    tech: '#HTML #CSS/SASS #JavaScript',
    link: 'https://eddiejostell.github.io/MovieDatabase/',
    img: 'img/moviedatabase.JPG',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    title: 'TODO-APP',
    tech: '#HTML #CSS #JavaScript',
    link: 'https://eddiejostell.github.io/todo-app/',
    img: 'img/todo.JPG',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 6,
    title: 'FOOD-APP',
    tech: '#HTML #CSS #JavaScript',
    link: 'https://eddiejostell.github.io/food-app/',
    img: 'img/food-app.JPG',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export const QuoteInfo: IQuoteItem[] = [
  {
    id: 1,
    quote:
      'A tree falls in the forest, no one puts it on YouTube. Did it ever really happen?',
    author: 'Bodhi Point Break 2015',
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
    author: 'Ozzy Osburne.',
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
    quote: 'I am become death, the destroyer of worlds.',
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
];
