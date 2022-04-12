/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-09-14 01:09:36
 * @Project: InfoCity
 */

import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import { apiClient } from 'app/config/client/api-client';
import {
  API_DELETE_USER,
  API_GET_DETAIL_MANAGER,
  API_GET_DETAIL_RESIDENT,
  API_GET_LIST_MANAGER,
  API_GET_LIST_RESIDENT,
  API_POST_CREATE_MANAGER,
  API_PUT_UPDATE_MANAGER,
  API_RESIDENT,
  APT_POST_UPDATE_SITE_ASSIGNMENT,
} from 'app/config/constant/api';
import { BLOCK_ID_KEY, BLOCK_UNIT_ID_KEY, EXPRESSION, FULL_NAME_FIELD } from 'app/config/constant/constants';
import { ICreateSiteAssignment, IFilter, IParam, IResultList, pagination } from 'app/shared/model/dto.model';
import { defaultValue, IUser } from 'app/shared/model/user.model';
import { serializeAxiosError } from 'app/shared/reducers/reducer.utils';
import { deleteNoGetList, updateNoGetList } from '../components/crud-reducer/crud-reducer';

const initialState = {
  loading: false,
  managers: [] as ReadonlyArray<IUser>,
  manager: defaultValue,
  residents: [] as ReadonlyArray<IUser>,
  residentsSelect: [] as ReadonlyArray<IUser>,
  resident: defaultValue,
  updating: false,
  updateSuccess: false,
  createSuccess: false,
  deleteSuccess: false,
  totalResident: 0,
  totalManager: 0,
  residentsById: {},
  residentsAllId: [],
  updateManagerSuccess: false,
  createManagerSuccess: false,
};

// Async Actions

export const createSiteAssignment = createAsyncThunk(
  'userManagement/create_site_assignment',
  async (siteAssignment: ICreateSiteAssignment) => {
    return await apiClient.post<any>(APT_POST_UPDATE_SITE_ASSIGNMENT, siteAssignment);
  },
  { serializeError: serializeAxiosError }
);

export const deleteSiteAssignment = createAsyncThunk(
  'userManagement/delete_site_assignment',
  async (siteAssignment: ICreateSiteAssignment) => {
    return await apiClient.delete<any>(APT_POST_UPDATE_SITE_ASSIGNMENT, {
      headers: {},
      data: {
        userId: siteAssignment.userId,
        siteId: siteAssignment.siteId,
      },
    });
  },
  { serializeError: serializeAxiosError }
);

export const getManagers = createAsyncThunk('userManagement/fetch_managers', async (param: IParam) => {
  const request = { ...pagination };
  if (param.page || param.page === 0) {
    request.page = param.page;
  }

  if (param.pageSize) {
    request.size = param.pageSize;
  }

  const filterList: IFilter[] = [];
  // filter by block unit id
  if (param.searchValue) {
    const filterBlockUnit: IFilter = {
      field: FULL_NAME_FIELD,
      value: param.searchValue,
      expression: EXPRESSION.LIKE,
    };
    filterList.push(filterBlockUnit);
  }

  if (filterList) {
    request.filters = filterList;
  }

  if (param.sorts) {
    request.sorts = param.sorts;
  }

  return await apiClient.post<IResultList>(API_GET_LIST_MANAGER, request);
});

export const getResidents = createAsyncThunk('userManagement/fetch_residents', async (param: IParam) => {
  const request = { ...pagination };
  if (param.page || param.page === 0) {
    request.page = param.page;
  }

  if (param.pageSize) {
    request.size = param.pageSize;
  }

  if (param.sorts) {
    request.sorts = param.sorts;
  }

  const filterList: IFilter[] = [];
  // filter by block unit id
  if (param.blockUnitId) {
    const filterBlockUnit: IFilter = {
      field: BLOCK_UNIT_ID_KEY,
      value: param.blockUnitId,
      expression: EXPRESSION.EQ,
    };
    filterList.push(filterBlockUnit);
  }

  // filter by block id
  if (param.blockId) {
    const filterBlock: IFilter = {
      field: BLOCK_ID_KEY,
      value: param.blockId,
      expression: EXPRESSION.EQ,
    };
    filterList.push(filterBlock);
  }

  if (param.searchValue) {
    const filterResidentName: IFilter = {
      field: FULL_NAME_FIELD,
      value: param.searchValue,
      expression: EXPRESSION.LIKE,
    };
    filterList.push(filterResidentName);
  }

  if (filterList) {
    request.filters = filterList;
  }

  return await apiClient.post<IResultList>(API_GET_LIST_RESIDENT, request);
});

export const getManagerUser = createAsyncThunk('userManagement/fetch_manager_user', async (id: string) => {
  const requestUrl = `${API_GET_DETAIL_MANAGER}/${id}`;
  return await apiClient.get<IUser>(requestUrl);
});

export const getResidentUser = createAsyncThunk('userManagement/fetch_resident_user', async (id: string) => {
  const requestUrl = `${API_GET_DETAIL_RESIDENT}/${id}`;
  return await apiClient.get<IUser>(requestUrl);
});

export const createManager = createAsyncThunk(
  'userManagement/create_manager',
  async (user: IUser) => await apiClient.post<IUser>(API_POST_CREATE_MANAGER, user),
  { serializeError: serializeAxiosError }
);

export const createResident = createAsyncThunk(
  'userManagement/create_resident',
  async (user: IUser) => await apiClient.post<IUser>(API_RESIDENT, user),
  { serializeError: serializeAxiosError }
);

export const updateManager = createAsyncThunk(
  'userManagement/update_manager',
  async (user: IUser) => await apiClient.put<IUser>(API_PUT_UPDATE_MANAGER, user),
  { serializeError: serializeAxiosError }
);

export const updateResident = createAsyncThunk(
  'userManagement/update_resident',
  async (user: IUser) => await apiClient.put<IUser>(API_RESIDENT, user),
  { serializeError: serializeAxiosError }
);

export const deleteManager = createAsyncThunk(
  'userManagement/delete_manager',
  async (id: string) => {
    const bodyFormData = new FormData();
    bodyFormData.append('id', id);
    return await apiClient.delete<string>(API_DELETE_USER, {
      data: bodyFormData,
    });
  },
  { serializeError: serializeAxiosError }
);

export const deleteResident = createAsyncThunk(
  'userManagement/delete_resident',
  async (id: string) => {
    const bodyFormData = new FormData();
    bodyFormData.append('id', id);
    return await apiClient.delete<IUser>(API_DELETE_USER, {
      data: bodyFormData,
    });
  },
  { serializeError: serializeAxiosError }
);

export type UserManagementState = Readonly<typeof initialState>;

export const UserManagementSlice = createSlice({
  name: 'userManagement',
  initialState: initialState as UserManagementState,
  reducers: {
    reset() {
      return initialState;
    },
    resetManager(state) {
      return {
        ...state,
        manager: defaultValue,
        updateManagerSuccess: false,
        createManagerSuccess: false,
      };
    },
    resetResident(state) {
      return {
        ...state,
        resident: defaultValue,
        updateSuccess: false,
        createSuccess: false,
      };
    },
    resetResidentsSelect(state) {
      return {
        ...state,
        residentsAllId: [],
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getManagerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.manager = action.payload.data;
      })
      .addCase(getResidentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.resident = action.payload.data;
      })
      .addCase(getManagers.fulfilled, (state, action) => {
        const payload = action.payload.data;
        return {
          ...state,
          loading: false,
          totalManager: payload.totalItems,
          managers: payload.items,
          deleteSuccess: false,
        };
      })
      .addCase(getResidents.fulfilled, (state, action) => {
        const payload = action.payload.data;
        const byId = {};
        const allIds = [];
        payload.items?.map(item => {
          byId[item.id] = item;
          allIds.push(item.id);
        });
        return {
          ...state,
          loading: false,
          totalResident: payload.totalItems,
          residents: payload.items,
          residentsSelect: payload.items,
          deleteSuccess: false,
          residentsById: byId,
          residentsAllId: allIds,
        };
      })
      .addCase(createResident.fulfilled, (state, action) => {
        state.loading = false;
        state.createSuccess = true;
      })
      .addCase(updateResident.fulfilled, (state, action) => {
        state.loading = false;
        state.updateSuccess = true;
        updateNoGetList('residents', state, action);
      })
      .addCase(deleteResident.fulfilled, (state, action) => {
        state.loading = false;
        state.updateSuccess = true;
        deleteNoGetList('residents', state, action);
      })
      .addCase(deleteManager.fulfilled, (state, action) => {
        deleteNoGetList('managers', state, action);
      })
      .addCase(updateManager.fulfilled, (state, action) => {
        updateNoGetList('managers', state, action);
      })
      .addCase(createManager.fulfilled, (state, action) => {
        state.loading = false;
        state.createManagerSuccess = true;
      })
      .addMatcher(isFulfilled(createSiteAssignment, deleteSiteAssignment), state => {
        state.updating = false;
        state.loading = false;
      })
      .addMatcher(isFulfilled(updateManager, deleteManager), state => {
        state.loading = false;
        state.updateManagerSuccess = true;
      })
      .addMatcher(isPending(getManagers, getResidents, getManagerUser, getResidentUser), state => {
        state.updateSuccess = false;
        state.loading = true;
      })
      .addMatcher(
        isPending(
          createManager,
          updateManager,
          deleteManager,
          deleteResident,
          createResident,
          updateResident,
          createSiteAssignment,
          deleteSiteAssignment
        ),
        state => {
          state.updateSuccess = false;
          state.createManagerSuccess = false;
          state.createSuccess = false;
          state.updating = true;
          state.loading = true;
        }
      )
      .addMatcher(
        isRejected(
          getManagers,
          getResidents,
          getManagerUser,
          getResidentUser,
          createManager,
          updateManager,
          deleteManager,
          deleteResident,
          createSiteAssignment,
          deleteSiteAssignment,
          createResident,
          updateResident
        ),
        state => {
          state.loading = false;
          state.updating = false;
          state.updateSuccess = false;
          state.createManagerSuccess = false;
          state.createSuccess = false;
        }
      );
  },
});

export const { reset, resetManager, resetResident, resetResidentsSelect } = UserManagementSlice.actions;

// Reducer
export default UserManagementSlice.reducer;
