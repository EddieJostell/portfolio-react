import { Fragment, useContext } from 'react';
import { Route } from 'react-router-dom';
import { HelperContext, IContextState } from '../../utils/HelperContext';

const RouteLinks = () => {
  const Routes = useContext<IContextState>(HelperContext);

  const routeLinks = Routes.routeItem.map(({ path, element }) => (
    <Route key={path} path={path} element={element} />
  ));

  return <Fragment>{routeLinks}</Fragment>;
};

export default RouteLinks;
