import React, { Fragment, useContext } from 'react';
import { Route } from 'react-router-dom';
import { HelperContext, IContextState } from '../../utils/HelperContext';

export interface IRouteLinksProps {}

const RouteLinks = () => {
  const Routes = useContext<IContextState>(HelperContext);

  const routeLinks = Routes.routeItem.map(({ path, element }, key: number) => (
    <Route key={key} path={path} element={element} />
  ));

  return <Fragment>{routeLinks}</Fragment>;
};

export default RouteLinks;
