import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoute, publicRoute, RouteNames } from "../../router";
import Sidebar from '../sidebar';

function AppRouter() {

  const token = false;

  return (
    <>
      <div className='g-pages'>
        {
          token ?
            <Switch>
              {privateRoute.map(route =>
                <div className="g-sidebar--page">
                  <Sidebar />
                  <Route path={route.path}
                    exact={route.exact}
                    component={route.component}
                    key={route.path}
                  />
                </div>
              )}
              <Redirect to={RouteNames.HOME} />
            </Switch>
            :
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
        }
      </div>
    </>

  )
}

export default AppRouter
