import { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoute, publicRoute, RouteNames } from "../../router";
import Sidebar from '../sidebar';
import './style.scss';

function AppRouter() {

  const token = sessionStorage.getItem('token');

  return (
    <>
      <div className='g-pages'>
        {
          token ?
            <div className='public-pages'>
              <Sidebar />
              <Switch>
                {privateRoute.map(route =>
                  <Route path={route.path}
                    exact={route.exact}
                    component={route.component}
                    key={route.path}
                  />
                )}
                <Redirect to={RouteNames.HOME} />
              </Switch>
            </div>
            :
            <div className='private-pages'>
              <Switch>
                {publicRoute.map(route =>
                  <Route path={route.path}
                    exact={route.exact}
                    component={route.component}
                    key={route.path}
                  />
                )}
                <Redirect to={RouteNames.SIGN_IN} />
              </Switch>
            </div>
        }
      </div >
    </>

  )
}

export default AppRouter
