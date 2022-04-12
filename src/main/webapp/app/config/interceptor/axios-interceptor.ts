import { ACCESS_TOKEN, URL_NOT_INCLUDE_SITE, VIEW_ALL, X_SITE_ID } from 'app/config/constant/constants';
import { Storage } from 'react-jhipster';
import HttpStatusCode from '../client/http-status-code';
import { API_GET_ACCOUNT, API_REVOKE_ACCESS_TOKEN, APT_POST_SIGNIN } from '../constant/api';

const URL_REVOKE_ACCESS_TOKEN = [API_REVOKE_ACCESS_TOKEN, APT_POST_SIGNIN];

const setupAxiosInterceptors = (onUnauthenticated, revokeToken, apiClient) => {
  const onRequestSuccess = config => {
    const token = Storage.local.get(ACCESS_TOKEN) || Storage.session.get(ACCESS_TOKEN);
    const siteId = Storage.local.get(X_SITE_ID);
    const { url } = config;
    if (token && !url.includes(API_REVOKE_ACCESS_TOKEN)) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (siteId && siteId !== VIEW_ALL && !(URL_NOT_INCLUDE_SITE.includes(url) || url.startsWith(API_GET_ACCOUNT))) {
      config.headers[X_SITE_ID] = siteId;
    }
    return config;
  };
  const onResponseSuccess = response => response;
  const onResponseError = err => {
    const status = err.status || (err.response ? err.response.status : 0);
    const retryRequest = err?.config;
    if (status === HttpStatusCode.UNAUTHORIZED) {
      if (retryRequest && retryRequest.url && URL_REVOKE_ACCESS_TOKEN.includes(retryRequest.url)) {
        onUnauthenticated();
      } else {
        return revokeToken(retryRequest);
      }
    }
    return Promise.reject(err);
  };
  apiClient.interceptors.request.use(onRequestSuccess);
  apiClient.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
