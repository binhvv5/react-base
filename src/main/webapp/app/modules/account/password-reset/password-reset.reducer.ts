import axios from 'axios';
import { createAsyncThunk, createSlice, isPending, isRejected } from '@reduxjs/toolkit';

import { serializeAxiosError } from 'app/shared/reducers/reducer.utils';
import { API_FORGET_PASSWORD, API_RENEW_PASSWORD } from 'app/config/constant/api';
import { apiClient } from 'app/config/client/api-client';
import { IForgetPassword } from 'app/shared/model/forgetPassword.model';

const initialState = {
  loading: false,
  resetPasswordSuccess: false,
  resetPasswordFailure: false,
  successMessage: null,
  forgetPassword: false,
  renewPassword: false,
};

export type PasswordResetState = Readonly<typeof initialState>;

const apiUrl = 'api/account/reset-password';
// Actions

export const handlePasswordResetInit = createAsyncThunk(
  'passwordReset/reset_password_init',
  // If the content-type isn't set that way, axios will try to encode the body and thus modify the data sent to the server.
  async (mail: string) => axios.post(`${apiUrl}/init`, mail, { headers: { ['Content-Type']: 'text/plain' } }),
  { serializeError: serializeAxiosError }
);

export const handlePasswordResetFinish = createAsyncThunk(
  'passwordReset/reset_password_finish',
  async (data: { key: string; newPassword: string }) => axios.post(`${apiUrl}/finish`, data),
  { serializeError: serializeAxiosError }
);

export const forgetPassword = createAsyncThunk(
  'passwordReset/forget_password_init',
  async (init: IForgetPassword) => await apiClient.post(API_FORGET_PASSWORD, init),
  { serializeError: serializeAxiosError }
);

export const renewPassword = createAsyncThunk(
  'passwordReset/renew_password_init',
  async (init: IForgetPassword) => await apiClient.post(API_RENEW_PASSWORD, init),
  { serializeError: serializeAxiosError }
);

export const PasswordResetSlice = createSlice({
  name: 'passwordReset',
  initialState: initialState as PasswordResetState,
  reducers: {
    reset() {
      return initialState;
    },
    resetStatusForget(state) {
      state.forgetPassword = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(handlePasswordResetInit.fulfilled, () => ({
        ...initialState,
        loading: false,
        resetPasswordSuccess: true,
        successMessage: 'reset.request.messages.success',
      }))
      .addCase(handlePasswordResetFinish.fulfilled, () => ({
        ...initialState,
        loading: false,
        resetPasswordSuccess: true,
        successMessage: 'reset.finish.messages.success',
      }))
      .addCase(forgetPassword.fulfilled, () => ({
        ...initialState,
        loading: false,
        forgetPassword: true,
        successMessage: 'reset.finish.messages.success',
      }))
      .addCase(renewPassword.fulfilled, () => ({
        ...initialState,
        loading: false,
        renewPassword: true,
        successMessage: 'reset.finish.messages.success',
      }))
      .addMatcher(isPending(handlePasswordResetInit, handlePasswordResetFinish, forgetPassword), state => {
        state.loading = true;
      })
      .addMatcher(isRejected(handlePasswordResetInit, handlePasswordResetFinish, forgetPassword), () => ({
        ...initialState,
        loading: false,
        resetPasswordFailure: true,
        forgetPassword: false,
      }));
  },
});

export const { reset, resetStatusForget } = PasswordResetSlice.actions;

// Reducer
export default PasswordResetSlice.reducer;
