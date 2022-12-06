import { ReactNode } from 'react';
import { Contact } from '../components/Contact/Contact';
import { Experiments } from '../components/Experiments/Experiments';
import { Home } from '../components/Home/Home';
import { Portfolio } from '../components/Portfolio/Portfolio';
import { Skills } from '../components/Skills/Skills';

export interface IRouteInfoItem {
  id: number;
  path: string;
  element: ReactNode;
}

export const RouteInfo: IRouteInfoItem[] = [
  {
    id: 1,
    path: '/',
    element: <Home />,
  },
  {
    id: 2,
    path: '/Portfolio',
    element: <Portfolio />,
  },
  {
    id: 3,
    path: '/Contact',
    element: <Contact />,
  },
  /* {
    id: 4,
    path: '/Experiments',
    element: <Experiments />,
  }, */
  /* {
    id: 4,
    path: '/Skills',
    element: <Skills />,
  }, */
];
