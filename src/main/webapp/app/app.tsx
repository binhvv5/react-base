/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-08-19 21:57:21
 * @Project: InfoCity
 */

import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import enUS from 'antd/lib/locale/en_US';
import koKR from 'antd/lib/locale/ko_KR';
import viVN from 'antd/lib/locale/vi_VN';
import { IRootState, useAppDispatch, useAppSelector } from 'app/config/redux/store';
import 'app/config/utils/dayjs';
import AppRoutes from 'app/routes';
import ErrorBoundary from 'app/shared/error/error-boundary';
import { checkTokenExpire, getSession, logout } from 'app/shared/reducers/authentication';
import { setLocale } from 'app/shared/reducers/locale';
import React, { useEffect, useRef, useState } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { BrowserRouter as Router, RouteComponentProps } from 'react-router-dom';
import './app.scss';
import { LOCALES_SUPPOST } from './config/constant/constants';
import { loadMessage } from './config/utils/validate-messages';
import { setSite, setSiteId } from './shared/reducers/site.reducer';
import { getSite, getSiteId } from './shared/util/entity-utils';

const baseHref = document.querySelector('base').getAttribute('href').replace(/\/$/, '');

export interface IAppProps extends StateProps, DispatchProps, RouteComponentProps {}

export const App = (props: IAppProps) => {
  const dispatch = useAppDispatch();
  const timerRef = useRef(null);
  const intervalMili = 60000; // interval check 1 minute
  const [antdLocal, setAntdLocal] = useState(viVN);
  const [validateMessages, setValidateMessages] = useState(null);

  const locale = useAppSelector(state => state.locale.currentLocale);
  const currentSiteId = useAppSelector(state => state.site.currentSiteId);
  const sites = useAppSelector(state => state.site.sites);

  useEffect(() => {
    intervalCheck();
    dispatch(getSession());
    dispatch(setSiteId(getSiteId()));
    dispatch(setSite(getSite()));
  }, []);

  useEffect(() => {
    sites.forEach(item => {
      if (item.id === currentSiteId) {
        dispatch(setSite(item));
      }
    });
  }, [sites]);

  useEffect(() => {
    if (locale) {
      switch (locale) {
        case LOCALES_SUPPOST.en:
          setAntdLocal(enUS);
          break;
        case LOCALES_SUPPOST.ko:
          setAntdLocal(koKR);
          break;
        default:
          setAntdLocal(viVN);
          break;
      }

      setValidateMessages(loadMessage);
    }
  }, [locale]);

  const intervalCheck = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      props.checkTokenExpire();
    }, intervalMili);
  };

  return (
    <Router basename={baseHref}>
      <ConfigProvider form={{ validateMessages }} locale={antdLocal}>
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </ConfigProvider>
    </Router>
  );
};

const mapStateToProps = ({ authentication, locale }: IRootState) => ({
  currentLocale: locale.currentLocale,
  isAuthenticated: authentication.isAuthenticated,
  account: authentication.account,
});

const mapDispatchToProps = { setLocale, getSession, logout, checkTokenExpire };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(App));
