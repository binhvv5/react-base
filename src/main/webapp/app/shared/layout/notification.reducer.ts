import { createAsyncThunk, createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { apiClient } from 'app/config/client/api-client';
import { API_GET_NOTIFICATION, API_UPDATE_NOTIFICATION } from 'app/config/constant/api';
import { IPagination, IParam, IResultList, pagination } from 'app/shared/model/dto.model';
import { INotification } from '../model/notification.model';
import { serializeAxiosError } from '../reducers/reducer.utils';

const initialState = {
  loading: false,
  errorMessage: null,
  notifications: [] as INotification[],
  total: 0,
  totalUnread: 0,
  updateSuccess: false,
};

export const getNotifications = createAsyncThunk('notification/get_notification', async (param: IParam) => {
  const request: IPagination = { ...pagination };
  request.page = param.page;

  if (param.pageSize) {
    request.size = param.pageSize;
  }

  if (param.sorts) {
    request.sorts = param.sorts;
  }

  return await apiClient.post<IResultList>(API_GET_NOTIFICATION, request);
});

export const readNotification = createAsyncThunk(
  'notification/read_notification',
  async (request: IParam) => await apiClient.put(API_UPDATE_NOTIFICATION, request),
  { serializeError: serializeAxiosError }
);

export type NotificationState = Readonly<typeof initialState>;

export const Notification = createSlice({
  name: 'notification',
  initialState: initialState as NotificationState,
  reducers: {
    resetReadNoti(state) {
      return {
        ...state,
        updateSuccess: false,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getNotifications.fulfilled, (state, action) => {
        const payload = action.payload.data;
        return {
          ...state,
          loading: false,
          total: payload.totalItems,
          totalUnread: payload.totalUnreads,
          notifications: payload.items,
        };
      })

      .addCase(readNotification.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        updateSuccess: true,
      }))

      .addMatcher(isRejected(getNotifications, readNotification), state => {
        state.loading = false;
      })
      .addMatcher(isPending(getNotifications, readNotification), state => {
        state.loading = true;
      });
  },
});

export const { resetReadNoti } = Notification.actions;

export default Notification.reducer;
