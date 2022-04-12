import { createAsyncThunk, createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { apiClient } from 'app/config/client/api-client';
import {
  API_AMENITY_SUMMARY_REPORT,
  API_CREATE_AMENITY,
  API_CREATE_AMENITY_BOOK,
  API_DELETE_AMENITY,
  API_DELETE_AMENITY_BOOK,
  API_GET_DETAIL_AMENITY,
  API_GET_DETAIL_AMENITY_BOOK,
  API_GET_LIST_AMENITY,
  API_GET_LIST_AMENITY_BOOK,
  API_UPDATE_AMENITY,
  API_UPDATE_AMENITY_BOOK,
} from 'app/config/constant/api';
import { BLOCK_ID_KEY, BLOCK_UNIT_ID_KEY, EXPRESSION, NAME } from 'app/config/constant/constants';
import { defaultValue, defaultValueAmenityBook, IAmenity, IAmenityBook } from 'app/shared/model/amenity.model';
import { IFilter, IParam, IResultList, pagination } from 'app/shared/model/dto.model';
import { serializeAxiosError } from 'app/shared/reducers/reducer.utils';
import { deleteNoGetList, updateNoGetList } from '../components/crud-reducer/crud-reducer';

const initialState = {
  loading: false,
  amenityList: [] as ReadonlyArray<IAmenity>,
  amenity: defaultValue,
  amenityBook: defaultValueAmenityBook,
  amenityBookList: [] as ReadonlyArray<IAmenityBook>,
  totalItems: 0,
  totalAmenityBookItems: 0,
  updating: false,
  updateSuccess: false,
  createSuccess: false,
  createAmenitySuccess: false,
  reportSumary: {} as any,
};

// Async Actions
export const getAmenityList = createAsyncThunk('amenityManagement/fetch_amenities', async (param: IParam) => {
  return await apiClient.post<IResultList>(API_GET_LIST_AMENITY, requestGetList(param));
});

export const getDetailAmenity = createAsyncThunk('amenityManagement/get_amenity', async (id: string) => {
  const requestUrl = `${API_GET_DETAIL_AMENITY}/${id}`;
  return await apiClient.get<IAmenity>(requestUrl);
});

export const createAmenity = createAsyncThunk(
  'amenityManagement/add_amenity',
  async (amenity: IAmenity, thunkAPI) => {
    return await apiClient.post<IAmenity>(API_CREATE_AMENITY, amenity);
  },
  { serializeError: serializeAxiosError }
);

export const updateAmenity = createAsyncThunk(
  'userManagement/update_amenity',
  async (amenity: IAmenity) => {
    return await apiClient.put<IAmenity>(API_UPDATE_AMENITY, amenity);
  },
  { serializeError: serializeAxiosError }
);

export const deleteAmenity = createAsyncThunk(
  'amenityManagement/delete_amenity',
  async (id: string, thunkAPI) => {
    const bodyFormData = new FormData();
    bodyFormData.append('id', id);
    return await apiClient.delete<IAmenity>(API_DELETE_AMENITY, {
      data: bodyFormData,
    });
  },
  { serializeError: serializeAxiosError }
);

// Amenity Book
export const getAmenityBookList = createAsyncThunk('amenityManagement/fetch_amenity_book_list', async (param: IParam) => {
  return await apiClient.post<IResultList>(API_GET_LIST_AMENITY_BOOK, requestGetList(param));
});

export const getDetailAmenityBook = createAsyncThunk('amenityManagement/get_amenity_book', async (id: string) => {
  const requestUrl = `${API_GET_DETAIL_AMENITY_BOOK}/${id}`;
  return await apiClient.get<IAmenityBook>(requestUrl);
});

export const createAmenityBook = createAsyncThunk(
  'amenityManagement/add_amenity_book',
  async (amenityBook: IAmenityBook, thunkAPI) => {
    return await apiClient.post<IAmenityBook>(API_CREATE_AMENITY_BOOK, amenityBook);
  },
  { serializeError: serializeAxiosError }
);

export const summaryReport = createAsyncThunk(
  'amenityManagement/summary-report',
  async () => await apiClient.get<IAmenityBook>(API_AMENITY_SUMMARY_REPORT),
  { serializeError: serializeAxiosError }
);

export const updateAmenityBook = createAsyncThunk(
  'userManagement/update_amenity_book',
  async (amenityBook: IAmenityBook, thunkAPI) => {
    return await apiClient.put<IAmenityBook>(API_UPDATE_AMENITY_BOOK, amenityBook);
  },
  { serializeError: serializeAxiosError }
);

export const deleteAmenityBook = createAsyncThunk(
  'amenityManagement/delete_amenity_book',
  async (id: string, thunkAPI) => {
    const bodyFormData = new FormData();
    bodyFormData.append('id', id);
    return await apiClient.delete<IAmenityBook>(API_DELETE_AMENITY_BOOK, {
      data: bodyFormData,
    });
  },
  { serializeError: serializeAxiosError }
);

export type AmenityManagementState = Readonly<typeof initialState>;

export const amenityManagementSlice = createSlice({
  name: 'amenityManagement',
  initialState: initialState as AmenityManagementState,
  reducers: {
    reset() {
      return initialState;
    },
    resetAmenity(state) {
      return {
        ...state,
        amenity: defaultValue,
        updateSuccess: false,
        createAmenitySuccess: false,
      };
    },
    resetAmenityList(state) {
      return {
        ...state,
        serviceFacilities: [],
        updateSuccess: false,
      };
    },
    resetAmenityBook(state) {
      return {
        ...state,
        amenityBook: defaultValueAmenityBook,
        updateSuccess: false,
        createSuccess: false,
      };
    },
    resetAmenityBookList(state) {
      return {
        ...state,
        amenityBookList: [],
        updateSuccess: false,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAmenityList.fulfilled, (state, action) => {
        state.loading = false;
        state.amenityList = action.payload.data.items;
        state.totalItems = action.payload.data.totalItems;
      })
      .addCase(getDetailAmenity.fulfilled, (state, action) => {
        state.loading = false;
        state.amenity = action.payload.data;
      })
      .addCase(createAmenity.fulfilled, (state, action) => {
        state.loading = false;
        state.createAmenitySuccess = true;
      })
      .addCase(updateAmenity.fulfilled, (state, action) => {
        state.loading = false;
        state.updateSuccess = true;
        updateNoGetList('amenityList', state, action);
      })
      .addCase(deleteAmenity.fulfilled, (state, action) => {
        state.loading = false;
        state.updateSuccess = true;
        deleteNoGetList('amenityList', state, action);
      })
      .addCase(getAmenityBookList.fulfilled, (state, action) => {
        state.loading = false;
        state.amenityBookList = action.payload.data.items;
        state.totalAmenityBookItems = action.payload.data.totalItems;
      })
      .addCase(getDetailAmenityBook.fulfilled, (state, action) => {
        state.loading = false;
        state.amenityBook = action.payload.data;
      })
      .addCase(createAmenityBook.fulfilled, (state, action) => {
        state.loading = false;
        state.createSuccess = true;
      })
      .addCase(updateAmenityBook.fulfilled, (state, action) => {
        state.loading = false;
        state.updateSuccess = true;
        updateNoGetList('amenityBookList', state, action);
      })
      .addCase(deleteAmenityBook.fulfilled, (state, action) => {
        state.loading = false;
        state.updateSuccess = true;
        deleteNoGetList('amenityBookList', state, action);
      })
      .addCase(summaryReport.fulfilled, (state, action) => {
        state.loading = false;
        state.reportSumary = action.payload.data;
      })
      .addCase(summaryReport.pending, state => {
        state.loading = true;
      })
      .addCase(summaryReport.rejected, (state, action) => {
        state.loading = false;
        state.reportSumary = {};
      })
      .addMatcher(isPending(getAmenityBookList), state => {
        state.updateSuccess = false;
        state.loading = true;
      })
      .addMatcher(isRejected(getAmenityBookList), state => {
        state.loading = false;
        state.updating = false;
        state.updateSuccess = false;
      })
      .addMatcher(isPending(getAmenityList), state => {
        state.updateSuccess = false;
        state.loading = true;
      })
      .addMatcher(isRejected(getAmenityList), state => {
        state.loading = false;
        state.updating = false;
        state.updateSuccess = false;
      });
  },
});

export const { reset, resetAmenity, resetAmenityList, resetAmenityBook, resetAmenityBookList } = amenityManagementSlice.actions;

// Reducer
export default amenityManagementSlice.reducer;

const requestGetList = (param: IParam) => {
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

  if (param.blockId) {
    const filter: IFilter = {
      field: BLOCK_ID_KEY,
      value: param.blockId,
      expression: EXPRESSION.EQ,
    };
    filterList.push(filter);
  }

  if (param.blockUnitId) {
    const filterBlockUnit: IFilter = {
      field: BLOCK_UNIT_ID_KEY,
      value: param.blockUnitId,
      expression: EXPRESSION.EQ,
    };
    filterList.push(filterBlockUnit);
  }

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

  return request;
};
