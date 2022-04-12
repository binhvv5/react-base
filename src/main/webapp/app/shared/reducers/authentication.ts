/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-08-19 22:00:56
 * @Project: InfoCity
 */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiClient } from 'app/config/client/api-client';
import { API_GET_ACCOUNT, API_REVOKE_ACCESS_TOKEN, APT_POST_SIGNIN, NOTIFICATION_API } from 'app/config/constant/api';
import { ACCESS_TOKEN, DEFAULT_LOCALE, LOCALE, REFRESH_TOKEN, SITE_INFO, X_SITE_ID } from 'app/config/constant/constants';
import { getToken } from 'app/config/firebase/firebase';
import { AppThunk } from 'app/config/redux/store';
import { setLocale } from 'app/shared/reducers/locale';
import { AxiosResponse } from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { Storage } from 'react-jhipster';
import { serializeAxiosError } from './reducer.utils';
import { reset as resetSite } from './site.reducer';

export const initialState = {
  loading: false,
  isAuthenticated: false,
  loginSuccess: false,
  loginError: false, // Errors returned from server side
  account: {} as any,
  errorMessage: null as unknown as string, // Errors returned from server side
  redirectMessage: null as unknown as string,
  sessionHasBeenFetched: false,
  accessToken: null as unknown as string,
  refreshToken: null as unknown as string,
  siteId: null as unknown as string,
};

export type AuthenticationState = Readonly<typeof initialState>;

export const getSession = (): AppThunk => async (dispatch, getState) => {
  await dispatch(getAccount());

  // const { account } = getState().authentication;
  const locale = Storage.local.get(LOCALE) || DEFAULT_LOCALE;
  dispatch(setLocale(locale));
};

const registerFCMToken = (deviceToken: string) => {
  apiClient.post<any>(NOTIFICATION_API, {
    fcmToken: deviceToken,
  });
};

export const getAccount = createAsyncThunk(
  'authentication/get_account',
  async () => {
    const response = apiClient.get<any>(API_GET_ACCOUNT);
    getToken(registerFCMToken);
    return response;
  },
  {
    serializeError: serializeAxiosError,
  }
);

interface IAuthParams {
  username: string;
  password: string;
}

/**
 * check token expire
 */
export const checkTokenExpire = () => {
  const accessToken = Storage.local.get(ACCESS_TOKEN);
  const refreshToken = Storage.local.get(REFRESH_TOKEN);
  if (accessToken) {
    const jwtPayload: JwtPayload = jwtDecode(accessToken);
    // refresh token before 90s
    if (jwtPayload.exp - 360 < Date.now() / 1000) {
      onRefreshToken(refreshToken);
    }
  } else {
    clearAuthToken();
  }
};

/**
 * on refresh token
 * @param refreshJwt revoke new token
 */
export const onRefreshToken = async (refreshJwt: string) => {
  if (refreshJwt) {
    const response = await apiClient.post<any>(
      API_REVOKE_ACCESS_TOKEN,
      {},
      {
        headers: {
          refreshToken: refreshJwt,
        },
      }
    );
    const { accessToken, refreshToken } = response.data;
    Storage.local.set(ACCESS_TOKEN, accessToken);
    Storage.local.set(REFRESH_TOKEN, refreshToken);
  }
};

/**
 * revoke token from refresh token
 * @param retryRequest
 */
export const revokeToken = async (retryRequest: any) => {
  const refreshToken = Storage.local.get(REFRESH_TOKEN);
  await onRefreshToken(refreshToken);
  return await apiClient(retryRequest);
};

export const authenticate = createAsyncThunk(
  'authentication/login',
  async (authRequest: IAuthParams) => apiClient.post<any>(APT_POST_SIGNIN, {}, { auth: authRequest }),
  { serializeError: serializeAxiosError }
);

export const login: (username: string, password: string) => AppThunk = (username, password) => async dispatch => {
  const auth = await dispatch(authenticate({ username, password }));
  const payload = auth.payload as AxiosResponse;
  const { accessToken, refreshToken } = payload.data;
  Storage.local.set(ACCESS_TOKEN, accessToken);
  Storage.local.set(REFRESH_TOKEN, refreshToken);
  dispatch(getSession());
};

export const clearAuthToken = () => {
  if (Storage.local.get(ACCESS_TOKEN)) {
    Storage.local.remove(ACCESS_TOKEN);
  }
  if (Storage.local.get(REFRESH_TOKEN)) {
    Storage.local.remove(REFRESH_TOKEN);
  }
  if (Storage.local.get(X_SITE_ID)) {
    Storage.local.remove(X_SITE_ID);
  }
  if (Storage.local.get(SITE_INFO)) {
    Storage.local.remove(SITE_INFO);
  }
};

export const logout: () => AppThunk = () => dispatch => {
  dispatch(resetSite());
  clearAuthToken();
  dispatch(logoutSession());
};

export const clearAuthentication = messageKey => dispatch => {
  dispatch(resetSite());
  clearAuthToken();
  dispatch(authError(messageKey));
  dispatch(clearAuth());
};

export const AuthenticationSlice = createSlice({
  name: 'authentication',
  initialState: initialState as AuthenticationState,
  reducers: {
    logoutSession() {
      return {
        ...initialState,
      };
    },
    authError(state, action) {
      return {
        ...state,
        redirectMessage: action.payload,
      };
    },
    clearAuth(state) {
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(authenticate.rejected, (state, action) => ({
        ...initialState,
        errorMessage: action.error.message,
        loginError: true,
      }))
      .addCase(authenticate.fulfilled, state => ({
        ...state,
        loading: false,
        loginError: false,
        loginSuccess: true,
      }))
      .addCase(getAccount.rejected, (state, action) => ({
        ...state,
        loading: false,
        isAuthenticated: false,
        sessionHasBeenFetched: true,
        errorMessage: action.error.message,
      }))
      .addCase(getAccount.fulfilled, (state, action) => {
        const isAuthenticated = action.payload && action.payload.data && action.payload.data.active;
        return {
          ...state,
          isAuthenticated,
          loading: false,
          sessionHasBeenFetched: true,
          account: action.payload?.data,
        };
      })
      .addCase(authenticate.pending, state => {
        state.loading = true;
      })
      .addCase(getAccount.pending, state => {
        state.loading = true;
      });
  },
});

export const { logoutSession, authError, clearAuth } = AuthenticationSlice.actions;

// Reducer
export default AuthenticationSlice.reducer;
