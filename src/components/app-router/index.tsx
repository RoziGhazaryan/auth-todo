import { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from "../../router";
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
                {privateRoutes.map(route =>
                  <Route path={route.path}
                    exact={route.exact}
                    component={route.component}
                    key={route.path}
                  />
                )}
                <Redirect to={RouteNames.TODO_LIST} />
              </Switch>
            </div>
            :
            <div className='private-pages'>
              <Switch>
                {publicRoutes.map(route =>
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
