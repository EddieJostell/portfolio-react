import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { useRoutes } from '../../utils/siteData';

const RouteLinks = () => {
  const routes = useRoutes();

  const routeLinks = routes.map(({ path, element }) => (
    <Route key={path} path={path} element={element} />
  ));

  return <Fragment>{routeLinks}</Fragment>;
};

export default RouteLinks;
