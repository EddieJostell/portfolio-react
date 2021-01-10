import React from 'react';
import { Route } from 'react-router-dom';
import { IRouteInfoItem } from '../../utils/Route';
import About from '../About/About';

export interface IRouteLinksProps {
  routeInfo: IRouteInfoItem[];
}

const RouteLinks = (props: IRouteLinksProps) => {
  /* const { routeInfo } = props; */

  /*  const routeLinks = routeInfo.map(({ path, component }, key: number) => (
    <Route key={key} exact path={path} component={component} />
  )); */

  return <div>1123</div>;
};

export default RouteLinks;
