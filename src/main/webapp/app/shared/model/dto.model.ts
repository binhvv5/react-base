import { DEFAULT_SIZE, TEXT_EMPTY } from 'app/config/constant/constants';

export interface ICreateSiteAssignment {
  userId?: string;
  siteId?: string;
}

export interface IMeterAssignment {
  meterId?: string;
  blockUnitId?: string;
}

export interface IErrorResponse {
  errorCode?: number | null;
  errorMessage?: string | '';
  timestamp?: string | '';
}

export interface IFilter {
  field: string;
  value: string | number | any;
  expression: number;
}

export interface ISort {
  field?: string;
  asc?: boolean;
}

export interface IPagination {
  size?: number;
  page?: number;
  filters?: IFilter[];
  sorts?: ISort[];
}

export const defaultPagination: Readonly<IPagination> = {
  size: DEFAULT_SIZE,
  page: 0,
  filters: [],
  sorts: [],
};

export const pagination: Readonly<IPagination> = {
  filters: [],
  sorts: [],
};

export interface IResultList {
  totalUnreads: number;
  currentPage: number;
  items: any[];
  totalItems: number;
  totalPages: number;
}

export interface IParam {
  // common param
  page?: number;
  pageSize?: number;
  sorts?: ISort[];
  blockUnitId?: string;
  blockUnitType?: number;
  blockId?: string;
  searchValue?: string;
  feeType?: number;
  feeTypes?: number[];
  type?: number;
  vehicleTypeId?: string;

  // external param
  types?: number;
  meterType?: number;
  meterCode?: string;
  monthYear?: string;
  facilityMeasureFormId?: string;
  toDateTime?: any;
  fromDateTime?: any;
  fromDate?: any;
  toDate?: any;
  parkingStatus?: number;
  residentId?: string;
  residentName?: string;
  bookDate?: any;
  serviceName?: string;
  warehouseId?: string;
  date?: any;
  materialClassId?: string;
  materialCategoryId?: string;
  enable?: any;
  groupStatus?;
  paymentStatus?: number;
  paymentStatuses?: number[];
  listObjectId?: [];
  otherListObjectId?: [];
  status?: number;
  method?: number;
  materialId?: string;
  listObject?: any;
  parentBankAccountId?: string;
  fullname?: string;
  fromMonth?: string;
  toMonth?: string;
  groupType?: number;
  id?: string;
  readAll?: boolean;
}

export interface IFile {
  fileId: string;
  fileName: string;
}

export const IFileDefaultValue: Readonly<IFile> = {
  fileId: TEXT_EMPTY,
  fileName: TEXT_EMPTY,
};

export interface IGrantBlockUnitDTO {
  blockId?: string;
  blockUnitId?: string;
  id?: string;
}

export interface IPaymentChart {
  label?: string;
  value?: number;
  color?: string;
  feeType?: number;
  data?: number[];
  backgroundColor?: string;
}
