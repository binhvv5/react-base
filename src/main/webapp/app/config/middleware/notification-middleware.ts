/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-09-18 16:04:00
 * @Project: InfoCity
 */

import { IErrorResponse } from 'app/shared/model/dto.model';
import { isFulfilledAction, isRejectedAction } from 'app/shared/reducers/reducer.utils';
import { openNotification } from 'app/shared/util/entity-utils';
import HttpStatusCode, { HttpMethod } from '../client/http-status-code';
import { API_FORGET_PASSWORD, API_RENEW_PASSWORD, API_UPDATE_NOTIFICATION } from '../constant/api';
import { NOTIFICATION } from '../constant/constants';
import { ERRROR, SUCCESS } from '../constant/enum';

const URL_NOT_ALERT_NOTI = ['infocity/api/user/view', 'infocity/api/user/signin', 'infocity/api/user/getTokenFromRefreshToken'];

export const notificationMiddleware = () => next => action => {
  if (!action) return;

  const { error, payload } = action;

  /**
   *
   * The notification middleware serves to add success and error notifications
   */
  if (isFulfilledAction(action) && payload && payload.headers) {
    const method = payload?.config?.method;
    switch (payload.status) {
      case HttpStatusCode.CREATED:
      case HttpStatusCode.NO_CONTENT: {
        if (payload.config.url?.includes(API_UPDATE_NOTIFICATION)) break;

        payload.config.url?.includes(API_FORGET_PASSWORD) || payload.config.url?.includes(API_RENEW_PASSWORD)
          ? openNotification(NOTIFICATION.SUCCESS, SUCCESS.SEND_REQUIRED)
          : openNotification(NOTIFICATION.SUCCESS, SUCCESS.UPDATED);
        break;
      }
      case HttpStatusCode.OK: {
        if (method === HttpMethod.PUT) {
          openNotification(NOTIFICATION.SUCCESS, SUCCESS.UPDATED);
        } else if (method === HttpMethod.DELETE) {
          openNotification(NOTIFICATION.SUCCESS, SUCCESS.DELETED);
        }
        break;
      }
      default: {
        break;
      }
    }
  }

  if (isRejectedAction(action) && error && error.isAxiosError) {
    if (error.response) {
      const response = error.response;
      const data = response.data;
      const config = response.config;
      if (!(response.status === HttpStatusCode.FORBIDDEN && config && config.url && URL_NOT_ALERT_NOTI.includes(config.url))) {
        switch (response.status) {
          // connection refused, server not reachable
          case 0:
            openNotification(NOTIFICATION.ERROR, 'error.server.not.reachable', '', 'Server not reachable');
            break;

          case HttpStatusCode.EXPECTATION_FAILED:
          case HttpStatusCode.BAD_REQUEST: {
            const errorResponse: IErrorResponse = response?.data;
            if (errorResponse && errorResponse.errorCode && ERRROR[errorResponse.errorCode]) {
              openNotification(NOTIFICATION.ERROR, ERRROR[errorResponse.errorCode]);
            } else {
              openNotification(NOTIFICATION.ERROR, 'error.error', { data: errorResponse.errorMessage });
            }

            break;
          }
          case HttpStatusCode.FORBIDDEN:
            openNotification(NOTIFICATION.ERROR, 'error.http.403');
            break;
          case HttpStatusCode.NOT_FOUND:
            openNotification(NOTIFICATION.ERROR, 'error.url.not.found', '', 'Not found');
            break;

          case HttpStatusCode.INTERNAL_SERVER_ERROR:
            openNotification(NOTIFICATION.ERROR, 'error.http.500');
            break;

          default:
            if (typeof data === 'string' && data !== '') {
              openNotification(NOTIFICATION.ERROR, '', '', data);
            } else {
              // TODO: Handling after reaching all error cases
              // toast.error(data?.message || data?.error || data?.title || 'Unknown error!');
            }
        }
      }
    } else if (error.config && error.config.url === 'infocity/api/user/view' && error.config.method === HttpMethod.GET) {
      /* eslint-disable no-console */
      console.log('Authentication Error: Trying to access url infocity/api/user/view with GET.');
    } else {
      // TODO: Handling after reaching all error cases
      // toast.error(error.message || 'Unknown error!');
    }
  } else if (error) {
    // TODO: Handling after reaching all error cases
    // toast.error(error.message || 'Unknown error!');
  }

  return next(action);
};
