import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoute, publicRoute, RouteNames } from "../../router";

function AppRouter() {

  const token = true;

  return (
    <>
      <div className='G-pages'>
        {
          token ?
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
