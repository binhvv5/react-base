import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import { apiClient } from 'app/config/client/api-client';
import {
  API_CREATE_SITE,
  API_DELETE_SITE,
  API_GET_ALL_SITE,
  API_GET_LIST_PRIORITY_LEVEL_CONFIG,
  API_GET_LIST_SITE,
  API_GET_SITE,
  API_PRIORITY_LEVEL_CONFIG,
  API_UPDATE_SITE,
  APT_BANK_ACCOUNT,
  APT_GET_LIST_BANK_ACCOUNT,
  APT_GET_LIST_TEMPLATE,
  APT_TEMPLATE,
  APT_TEMPLATE_VIEW,
} from 'app/config/constant/api';
import { ACCOUNT_NAME, EXPRESSION, FIELD_CREATED_DATE, NAME, TEXT_EMPTY, VIEW_ALL } from 'app/config/constant/constants';
import { deleteNoGetList, updateNoGetList } from '../components/crud-reducer/crud-reducer';
import { isNotNil } from '../helpers/is-not-nil';
import { IBankAccount } from '../model/bankAccount.model';
import { IFilter, IParam, IResultList, ISort, pagination } from '../model/dto.model';
import { IPriorityLevelConfig } from '../model/priorityLevelConfig.model';
import { defaultValue, ISite } from '../model/site.model';
import { ITemplate } from '../model/template.model';
import { serializeAxiosError } from './reducer.utils';

const initialState = {
  currentSiteId: TEXT_EMPTY,
  loading: false,
  updateSuccess: false,
  createSuccess: false,
  sites: [] as ReadonlyArray<ISite>,
  site: defaultValue,
  banks: [] as ReadonlyArray<IBankAccount>,
  totalBank: 0,
  isViewAllSite: false,
  priorityLevelConfig: [] as ReadonlyArray<IPriorityLevelConfig>,
  totalPriorityLevelConfig: 0,
  templates: [] as ReadonlyArray<ITemplate>,
  template: defaultValue,
  totalTemplate: 0,
  updateSuccessBank: false,
  createSuccessBank: false,
  updateSuccessOther: false,
  createSuccessOther: false,
};

export type SiteState = Readonly<typeof initialState>;

// bank
export const getBankAccounts = createAsyncThunk('site/get_banks', async (param: IParam) => {
  const request = { ...pagination };
  if (param.page || param.page === 0) {
    request.page = param.page;
  }

  if (param.pageSize) {
    request.size = param.pageSize;
  }

  const filterList: IFilter[] = [];
  if (param.searchValue) {
    const filterAccountName: IFilter = {
      field: ACCOUNT_NAME,
      value: param.searchValue,
      expression: EXPRESSION.LIKE,
    };
    filterList.push(filterAccountName);
  }

  if (filterList) {
    request.filters = filterList;
  }

  return await apiClient.post<IResultList>(APT_GET_LIST_BANK_ACCOUNT, request);
});

export const deleteBankAccount = createAsyncThunk(
  'site/delete_bank',
  async (id: string, thunkAPI) => {
    const bodyFormData = new FormData();
    bodyFormData.append('id', id);
    return await apiClient.delete<any>(APT_BANK_ACCOUNT, {
      data: bodyFormData,
    });
  },
  { serializeError: serializeAxiosError }
);

export const createBankAccount = createAsyncThunk(
  'site/create_bank_account',
  async (bank: IBankAccount) => {
    return await apiClient.post<IBankAccount>(APT_BANK_ACCOUNT, bank);
  },
  { serializeError: serializeAxiosError }
);

export const updateBankAccount = createAsyncThunk(
  'site/update_bank_account',
  async (bank: IBankAccount) => {
    return await apiClient.put<IBankAccount>(APT_BANK_ACCOUNT, bank);
  },
  { serializeError: serializeAxiosError }
);

// template
export const getTemplates = createAsyncThunk('site/get_templates', async (param: IParam) => {
  const request = { ...pagination };
  if (param.page || param.page === 0) {
    request.page = param.page;
  }

  if (param.pageSize) {
    request.size = param.pageSize;
  }

  const filterList: IFilter[] = [];
  if (param.searchValue) {
    const filterName: IFilter = {
      field: NAME,
      value: param.searchValue,
      expression: EXPRESSION.LIKE,
    };
    filterList.push(filterName);
  }

  if (filterList) {
    request.filters = filterList;
  }

  return await apiClient.post<IResultList>(APT_GET_LIST_TEMPLATE, request);
});

export const getTemplate = createAsyncThunk(
  'site/get_template',
  async (id: string) => {
    const url = `${APT_TEMPLATE_VIEW}/${id}`;
    return await apiClient.get<ITemplate>(url);
  },
  {
    serializeError: serializeAxiosError,
  }
);

export const createTemplate = createAsyncThunk(
  'site/create_template',
  async (template: ITemplate) => await apiClient.post<ITemplate>(APT_TEMPLATE, template),
  { serializeError: serializeAxiosError }
);

export const updateTemplate = createAsyncThunk(
  'site/update_template',
  async (template: ITemplate) => await apiClient.put<ITemplate>(APT_TEMPLATE, template),
  { serializeError: serializeAxiosError }
);

export const deleteTemplate = createAsyncThunk(
  'site/delete_template',
  async (id: string) => {
    const bodyFormData = new FormData();
    bodyFormData.append('id', id);
    return await apiClient.delete<ITemplate>(APT_TEMPLATE, {
      data: bodyFormData,
    });
  },
  { serializeError: serializeAxiosError }
);

// site
export const getAllSite = createAsyncThunk('site/get_all_by_admin', async () => apiClient.get<ISite[]>(API_GET_ALL_SITE), {
  serializeError: serializeAxiosError,
});

export const getSites = createAsyncThunk('site/get_sites', async () => apiClient.get<ISite[]>(API_GET_LIST_SITE), {
  serializeError: serializeAxiosError,
});

export const getSite = createAsyncThunk(
  'site/get_site',
  async (id: string) => {
    const url = `${API_GET_SITE}/${id}`;
    return await apiClient.get<ISite>(url);
  },
  {
    serializeError: serializeAxiosError,
  }
);

export const createSite = createAsyncThunk(
  'site/create_site',
  async (site: ISite, thunkAPI) => {
    return await apiClient.post<ISite>(API_CREATE_SITE, site);
  },
  { serializeError: serializeAxiosError }
);

export const updateSite = createAsyncThunk(
  'site/update_site',
  async (site: ISite, thunkAPI) => {
    return await apiClient.put<ISite>(API_UPDATE_SITE, site);
  },
  {
    serializeError: serializeAxiosError,
  }
);

export const deleteSite = createAsyncThunk(
  'site/delete_site',
  async (id: string, thunkAPI) => {
    const bodyFormData = new FormData();
    bodyFormData.append('id', id);
    return await apiClient.delete<ISite>(API_DELETE_SITE, {
      data: bodyFormData,
    });
  },
  { serializeError: serializeAxiosError }
);

// Priority level config
export const getPriorityLevelConfigs = createAsyncThunk(
  'site/get_priority_level_configs',
  async (param: IParam) => {
    const request = { ...pagination };
    if (param.page || param.page === 0) {
      request.page = param.page;
    }

    if (param.pageSize) {
      request.size = param.pageSize;
    }

    if (isNotNil(param.sorts) && param.sorts.length === 0) {
      const $sortField: ISort = {
        field: FIELD_CREATED_DATE,
        asc: false,
      };
      request.sorts = [$sortField];
    }

    return await apiClient.post<IResultList>(API_GET_LIST_PRIORITY_LEVEL_CONFIG, request);
  },
  {
    serializeError: serializeAxiosError,
  }
);

export const createPriorityLevelConfig = createAsyncThunk(
  'site/create_priority_level_config',
  async (config: IPriorityLevelConfig) => {
    return await apiClient.post<IPriorityLevelConfig>(API_PRIORITY_LEVEL_CONFIG, config);
  },
  { serializeError: serializeAxiosError }
);

export const updatePriorityLevelConfig = createAsyncThunk(
  'site/update_priority_level_config',
  async (config: IPriorityLevelConfig) => {
    return await apiClient.put<IPriorityLevelConfig>(API_PRIORITY_LEVEL_CONFIG, config);
  },
  { serializeError: serializeAxiosError }
);

export const deletePriorityLevelConfig = createAsyncThunk(
  'site/delete_priority_level_config',
  async (id: string) => {
    const bodyFormData = new FormData();
    bodyFormData.append('id', id);
    return await apiClient.delete<any>(API_PRIORITY_LEVEL_CONFIG, {
      data: bodyFormData,
    });
  },
  { serializeError: serializeAxiosError }
);

export const SiteSlice = createSlice({
  name: 'site',
  initialState: initialState as SiteState,
  reducers: {
    reset() {
      return initialState;
    },
    setSiteId(state, action) {
      const siteId = action.payload;
      return {
        ...state,
        currentSiteId: siteId,
        isViewAllSite: siteId === VIEW_ALL,
      };
    },
    setSite(state, action) {
      return {
        ...state,
        site: action.payload,
      };
    },
    resetSite(state) {
      return {
        ...state,
        site: defaultValue,
        updateSuccess: false,
        createSuccess: false,
      };
    },
    resetBanks(state) {
      return {
        ...state,
        banks: [],
      };
    },
    resetUpdateBanks(state) {
      return {
        ...state,
        updateSuccessBank: false,
        createSuccessBank: false,
      };
    },
    resetTemplates(state) {
      return {
        ...state,
        templates: [],
      };
    },
    resetTemplate(state) {
      return {
        ...state,
        template: defaultValue,
        updateSuccess: false,
        createSuccess: false,
      };
    },
    resetPriorityLevelConfigs(state) {
      return {
        ...state,
        priorityLevelConfig: [],
      };
    },
    resetUpdateOtherSetting(state) {
      return {
        ...state,
        updateSuccessOther: false,
        createSuccessOther: false,
      };
    },
    resetSites(state) {
      return {
        ...state,
        sites: [],
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBankAccounts.fulfilled, (state, action) => {
        const payload = action.payload.data;
        return {
          ...state,
          banks: payload.items,
          totalBank: payload.totalItems,
          loading: false,
        };
      })
      .addCase(getTemplates.fulfilled, (state, action) => {
        const payload = action.payload.data;
        return {
          ...state,
          templates: payload.items,
          totalTemplate: payload.totalItems,
          loading: false,
        };
      })
      .addCase(getTemplate.fulfilled, (state, action) => {
        state.template = action.payload.data;
        state.loading = false;
      })
      .addCase(createTemplate.fulfilled, (state, action) => {
        state.createSuccess = true;
        state.loading = false;
      })
      .addCase(updateTemplate.fulfilled, (state, action) => {
        state.updateSuccess = true;
        state.loading = false;
        updateNoGetList('templates', state, action);
      })
      .addCase(deleteTemplate.fulfilled, (state, action) => {
        state.updateSuccess = true;
        state.loading = false;
        deleteNoGetList('templates', state, action);
      })
      .addCase(createSite.fulfilled, (state, action) => {
        state.createSuccess = true;
        state.loading = false;
      })
      .addCase(updateSite.fulfilled, (state, action) => {
        state.updateSuccess = true;
        state.loading = false;
        updateNoGetList('sites', state, action);
      })
      .addCase(deleteSite.fulfilled, (state, action) => {
        state.updateSuccess = true;
        state.loading = false;
        deleteNoGetList('sites', state, action);
      })
      .addCase(getSite.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        site: action.payload.data,
      }))
      .addCase(getSites.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        sites: action.payload.data,
      }))
      .addCase(getAllSite.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        sites: action.payload.data,
      }))
      .addCase(deleteBankAccount.fulfilled, (state, action) => {
        state.updateSuccessBank = true;
        state.loading = false;
        deleteNoGetList('banks', state, action);
      })
      .addCase(createBankAccount.fulfilled, (state, action) => {
        state.createSuccessBank = true;
        state.loading = false;
      })
      .addCase(updateBankAccount.fulfilled, (state, action) => {
        state.updateSuccessBank = true;
        state.loading = false;
        updateNoGetList('banks', state, action);
      })
      .addCase(getPriorityLevelConfigs.fulfilled, (state, action) => {
        const payload = action.payload.data;
        return {
          ...state,
          priorityLevelConfig: payload.items,
          totalPriorityLevelConfig: payload.totalItems,
          loading: false,
        };
      })
      .addCase(deletePriorityLevelConfig.fulfilled, (state, action) => {
        deleteNoGetList('priorityLevelConfig', state, action);
      })
      .addCase(updatePriorityLevelConfig.fulfilled, (state, action) => {
        updateNoGetList('priorityLevelConfig', state, action);
      })
      .addCase(createPriorityLevelConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.createSuccessOther = true;
      })
      .addMatcher(isFulfilled(updatePriorityLevelConfig, deletePriorityLevelConfig), state => {
        state.loading = false;
        state.updateSuccessOther = true;
      })
      .addMatcher(
        isRejected(
          getAllSite,
          getSites,
          getTemplates,
          getBankAccounts,
          getSite,
          updateSite,
          getPriorityLevelConfigs,
          updatePriorityLevelConfig,
          createPriorityLevelConfig,
          createTemplate,
          updateTemplate,
          deleteTemplate,
          getTemplate,
          createSite,
          createBankAccount,
          updateBankAccount,
          deleteBankAccount
        ),
        state => ({
          ...state,
          loading: false,
          updateSuccess: false,
          updateSuccessBank: false,
          updateSuccessOther: false,
          createSuccess: false,
          createSuccessBank: false,
          createSuccessOther: false,
        })
      )
      .addMatcher(
        isPending(
          getAllSite,
          getSites,
          getBankAccounts,
          getTemplates,
          getSite,
          updateSite,
          getPriorityLevelConfigs,
          updatePriorityLevelConfig,
          createPriorityLevelConfig,
          createTemplate,
          updateTemplate,
          deleteTemplate,
          getTemplate,
          createSite,
          createBankAccount,
          updateBankAccount,
          deleteBankAccount
        ),
        state => ({
          ...state,
          loading: true,
          createSuccess: false,
          updateSuccess: false,
          updateSuccessBank: false,
          updateSuccessOther: false,
          createSuccessBank: false,
          createSuccessOther: false,
        })
      );
  },
});

export const {
  reset,
  setSiteId,
  setSite,
  resetSite,
  resetBanks,
  resetSites,
  resetPriorityLevelConfigs,
  resetTemplates,
  resetTemplate,
  resetUpdateBanks,
  resetUpdateOtherSetting,
} = SiteSlice.actions;

// Reducer
export default SiteSlice.reducer;
