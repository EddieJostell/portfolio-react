import React from 'react';
import { Route } from 'react-router-dom';
import { IRouteInfoItem } from '../../utils/Route';

export interface IRouteLinksProps {
  routeInfo: IRouteInfoItem[];
}

const RouteLinks = (props: IRouteLinksProps) => {
  const { routeInfo } = props;

  const routeLinks = routeInfo.map(({ path, component }, key: number) => (
    <Route key={key} exact path={path} component={component.name} />
  ));

  return <div>{routeLinks}</div>;
};

export default RouteLinks;
