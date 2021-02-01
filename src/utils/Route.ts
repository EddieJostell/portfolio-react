import { FunctionComponent } from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Portfolio from '../components/Portfolio/Portfolio';

export interface IRouteInfoItem {
  id: number;
  path: string;
  exact?: boolean;
  component: FunctionComponent;
}

export const RouteInfo: IRouteInfoItem[] = [
  {
    id: 1,
    path: '/',
    exact: true,
    component: About,
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
];
