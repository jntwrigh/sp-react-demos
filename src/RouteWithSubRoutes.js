import React from 'react';
import {Route} from 'react-router-dom';

function RouteWithSubRoutes( route ) {
  return (
    <Route path={route.path} render={props => {
      console.log('RouteWithSubRoutes.Route.render.props: ', props);
      // pass the sub-routes down to keep nesting
      return <route.component {...props} routes={route.routes}/>
    }}/>
  );
}

export default RouteWithSubRoutes;
