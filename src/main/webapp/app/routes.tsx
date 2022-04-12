/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-08-17 22:09:27
 * @Project: InfoCity
 */

import Activate from 'app/modules/account/activate/activate';
import PasswordResetFinish from 'app/modules/account/password-reset/finish/password-reset-finish';
import PasswordResetInit from 'app/modules/account/password-reset/init/password-reset-init';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import PageNotFound from 'app/shared/error/page-not-found';
import React from 'react';
import { Switch } from 'react-router-dom';
import Login from './modules/account/login/login';
import Logout from './modules/account/login/logout';
import ResetPasswordSuccess from './modules/account/password-reset/success/reset-password-success';
import Register from './modules/visitor/register/register';
import PrivateSite from './shared/layout/layout';

const Routes = () => {
  return (
    <>
      <Switch>
        <ErrorBoundaryRoute path="/account/login" component={Login} />
        <ErrorBoundaryRoute path="/account/logout" component={Logout} />
        <ErrorBoundaryRoute path="/account/activate/:key?" component={Activate} />
        <ErrorBoundaryRoute path="/account/reset/request" component={PasswordResetInit} />
        <ErrorBoundaryRoute path="/account/reset/finish" component={PasswordResetFinish} />
        <ErrorBoundaryRoute path="/account/reset/success" component={ResetPasswordSuccess} />
        <ErrorBoundaryRoute path="/visitor/register/:id?" component={Register} />
        <ErrorBoundaryRoute path="/" component={PrivateSite} />
        <ErrorBoundaryRoute component={PageNotFound} />
      </Switch>
    </>
  );
};

export default Routes;
