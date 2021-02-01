import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { HelperContext, IContextState } from '../../utils/HelperContext';


export interface IRouteLinksProps {}

const RouteLinks = (props: IRouteLinksProps) => {
  const Routes = useContext<IContextState>(HelperContext);

  console.log(Routes);

  const routeLinks = Routes.routeItem.map(
    ({ path, component }, key: number) => (
      <Route key={key} exact path={path} component={component} />
    )
  );

  return <div>{routeLinks}</div>;
};

export default RouteLinks;
