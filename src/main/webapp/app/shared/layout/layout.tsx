/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-08-23 22:09:44
 * @Project: InfoCity
 */

import { Layout, Skeleton } from 'antd';
import { ROLES } from 'app/config/constant/constants';
import { useAppDispatch } from 'app/config/redux/store';
import useWindowDimensions from 'app/config/utils/windowDimensions';
import PrivateRoute from 'app/shared/auth/private-route';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import PageNotFound from 'app/shared/error/page-not-found';
import React, { useEffect } from 'react';
import Loadable from 'react-loadable';
import { Switch } from 'react-router-dom';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Support from '../components/support/support';
import Header from './header/header';
import { collapsed } from './layout.reducer';
import './layout.scss';
import Sider from './sider/sider';

const Account = Loadable({
  loader: () => import(/* webpackChunkName: 'account' */ 'app/modules/account'),
  loading: () => <Skeleton loading={true} active />,
});

const { Content } = Layout;

const PrivateSite = () => {
  const dispatch = useAppDispatch();

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width <= 1024) {
      dispatch(collapsed(true));
    }
  }, [width]);

  return (
    <>
      <Layout>
        <Sider />
        <Layout>
          <div className="box-wrapper">
            <Header />
            <Content className="content-wrapper">
              <Breadcrumbs />
              <div className="container-wrapper">
                <Switch>
                  <PrivateRoute path="/account" component={Account} />
                  <ErrorBoundaryRoute component={PageNotFound} />
                </Switch>
              </div>
            </Content>
          </div>
          {/* <Footer /> */}
          <Support />
        </Layout>
      </Layout>
    </>
  );
};

export default PrivateSite;
