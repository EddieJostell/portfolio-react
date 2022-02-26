import { FunctionComponent } from 'react';
import { Contact } from '../components/Contact/Contact';
import { Experiments } from '../components/Experiments/Experiments';
import { Home } from '../components/Home/Home';
import { Portfolio } from '../components/Portfolio/Portfolio';
import { Skills } from '../components/Skills/Skills';

export interface IRouteInfoItem {
  id: number;
  path?: string;
  exact?: boolean;
  component?: FunctionComponent;
}

export const RouteInfo: IRouteInfoItem[] = [
  {
    id: 1,
    path: '/',
    exact: true,
    component: Home,
  },
  {
    id: 2,
    path: '/Portfolio',
    exact: true,
    component: Portfolio,
  },
  {
    id: 3,
    path: '/Contact',
    exact: true,
    component: Contact,
  },
  {
    id: 4,
    path: '/Experiments',
    exact: true,
    component: Experiments,
  },
  {
    id: 4,
    path: '/Skills',
    exact: true,
    component: Skills,
  },
];
