/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-08-19 21:56:41
 * @Project: InfoCity
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppComponent from './app';
import { apiClient } from './config/client/api-client';
import { registerLocale } from './config/i18n/translation';
import setupAxiosInterceptors from './config/interceptor/axios-interceptor';
import getStore from './config/redux/store';
import ErrorBoundary from './shared/error/error-boundary';
import { clearAuthentication, revokeToken } from './shared/reducers/authentication';

const store = getStore();
registerLocale(store);

const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors(() => actions.clearAuthentication('login.error.unauthorized'), revokeToken, apiClient);

const rootEl = document.getElementById('root');

const render = Component =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <ErrorBoundary>
      <Provider store={store}>
        <Component />
      </Provider>
    </ErrorBoundary>,
    rootEl
  );

render(AppComponent);
