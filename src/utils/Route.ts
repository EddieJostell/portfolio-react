import { FunctionComponent } from 'react';
import Contact from '../components/Contact/Contact';
import Home from '../components/Home/Home';
import Portfolio from '../components/Portfolio/Portfolio';

export interface IRouteInfoItem {
  id: number;
  path: string;
  exact?: boolean;
  component: FunctionComponent;
}
export interface IScrollItem {
  id: number;
  scrollId?: string;
  name: string;
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
];

export const ScrollInfo: IScrollItem[] = [
  {
    id: 1,
    scrollId: 'home',
    name: 'Home',
  },
  {
    id: 2,
    scrollId: 'portfolio',
    name: 'Portfolio',
  },
  {
    id: 3,
    scrollId: 'contact',
    name: 'Contact',
  },
  {
    id: 4,
    scrollId: 'experiments',
    name: 'Experiments',
  },
];
