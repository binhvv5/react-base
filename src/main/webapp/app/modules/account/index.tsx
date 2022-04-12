import React from 'react';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Settings from './settings/settings';
import Password from './password/password';
import { Switch } from 'react-router-dom';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute path={`${match.url}/settings`} component={Settings} />
      <ErrorBoundaryRoute path={`${match.url}/password`} component={Password} />
    </Switch>
  </>
);

export default Routes;
