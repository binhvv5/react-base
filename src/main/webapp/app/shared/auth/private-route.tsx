/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-08-20 21:58:37
 * @Project: InfoCity
 */

import { useAppSelector } from 'app/config/redux/store';
import ErrorBoundary from 'app/shared/error/error-boundary';
import React from 'react';
import { Translate } from 'react-jhipster';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { Storage } from 'react-jhipster';
import { X_SITE_ID } from 'app/config/constant/constants';

interface IOwnProps extends RouteProps {
  hasAnyAuthorities?: string[];
}

export const PrivateRouteComponent = ({ component: Component, hasAnyAuthorities = [], ...rest }: IOwnProps) => {
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  const sessionHasBeenFetched = useAppSelector(state => state.authentication.sessionHasBeenFetched);
  const account = useAppSelector(state => state.authentication.account);
  const isAuthorized = hasAnyAuthority(account.role, hasAnyAuthorities);
  const siteId = Storage.local.get(X_SITE_ID);

  const checkAuthorities = props =>
    isAuthorized ? (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    ) : (
      <div className="insufficient-authority">
        <div className="alert alert-danger">
          <Translate contentKey="error.http.403">You are not authorized to access this page.</Translate>
        </div>
      </div>
    );

  const renderRedirect = props => {
    if (!sessionHasBeenFetched) {
      return <div></div>;
    } else {
      if (isAuthenticated) {
        if (!siteId) {
          return (
            <Redirect
              to={{
                pathname: '/site',
                search: props.location.search,
                state: { from: props.location },
              }}
            />
          );
        }
        return checkAuthorities(props);
      } else {
        return (
          <Redirect
            to={{
              pathname: '/account/login',
              search: props.location.search,
              state: { from: props.location },
            }}
          />
        );
      }
    }
  };

  if (!Component) throw new Error(`A component needs to be specified for private route for path ${(rest as any).path}`);

  return <Route {...rest} render={renderRedirect} />;
};

export const hasAnyAuthority = (authorities: string[], hasAnyAuthorities: string[]) => {
  if (authorities && authorities.length !== 0) {
    if (hasAnyAuthorities.length === 0) {
      return true;
    }
    return hasAnyAuthorities.some(auth => authorities.includes(auth));
  }
  return false;
};

/**
 * A route wrapped in an authentication check so that routing happens only when you are authenticated.
 * Accepts same props as React router Route.
 * The route also checks for authorization if hasAnyAuthorities is specified.
 */
export default PrivateRouteComponent;
