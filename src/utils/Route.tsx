import { ReactNode } from 'react';
import { Home } from '../components/Home/Home';
import { Portfolio } from '../components/Portfolio/Portfolio';
import { Experiments } from '../components/Experiments/Experiments';
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
    path: '/Experiments',
    element: <Experiments />,
  },
  {
    id: 4,
    path: '/Skills',
    element: <Skills />,
  },
];
