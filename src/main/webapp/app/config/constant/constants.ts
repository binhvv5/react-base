const config = {
  VERSION: process.env.VERSION,
};

export default config;

export const SERVER_API_URL = process.env.SERVER_API_URL;

export const ROLES = {
  INFOCITY_ADMIN: 'INFOCITY_ADMIN',
  ORG_ADMIN: 'ORG_ADMIN',
  ORG_SUPER_MANAGER: 'ORG_SUPER_MANAGER',
  ORG_MANAGER: 'ORG_MANAGER',
  ORG_STAFF: 'ORG_STAFF',
  RESIDENT: 'RESIDENT',
};

export const USER_TYPE = {
  MANAGER: 1,
  RESIDENT: 2,
};

export const ROLE_TITLE = {
  // ORG_ADMIN: 'role.admin',
  ORG_SUPER_MANAGER: 'role.super.manager',
  ORG_MANAGER: 'role.manager',
  ORG_STAFF: 'role.staff',
};

export const messages = {
  DATA_ERROR_ALERT: 'Internal Error',
};

export const IMAGE_TYPES = ['gif', 'jpeg', 'png', 'jpg', 'bmp'];

export const OPTIONS = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1024,
  useWebWorker: true,
};

export const LOCALE = 'locale';
export const DEFAULT_LOCALE = 'vi';
export const ACCESS_TOKEN = 'access-token';
export const REFRESH_TOKEN = 'refresh-token';
export const X_SITE_ID = 'X-Site-Id';
export const SITE_INFO = 'X-Site';
export const APP_DATE_FORMAT = 'DD.MM.YYYY HH:mm';
export const APP_DATE_MONTH_YEAR_FORMAT = 'MM-YYYY';
export const APP_DATE_YEAR_MONTH_FORMAT = 'YYYYMM';
export const APP_TIME_FORMAT = 'HH:mm';
export const SERVER_TIME_FORMAT = 'HH:mm:ss';
export const FORMAT_YYYY_MM_DD = 'YYYY-MM-DD';
export const FORMAT_YYYY_MM = 'YYYY-MM';
export const FORMAT_SS = 'ss';
export const APP_TIMESTAMP_FORMAT = 'DD.MM.YYYY HH:mm';
export const APP_LOCAL_DATE_FORMAT = 'DD.MM.YYYY';
export const APP_LOCAL_DATETIME_FORMAT = 'YYYY-MM-DDTHH:mm';
export const APP_DATETIME_FORMAT_ES = 'YYYY-MM-DDTHH:mm:ss';
export const APP_LOCAL_DATETIME_FORMAT_Z = 'YYYY-MM-DDTHH:mm Z';
export const APP_WHOLE_NUMBER_FORMAT = '0,0';
export const APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT = '0,0.[00]';
export const LOGIN_PAGE = '/account/login';
export const ANTD_ASC = 'ascend';

export const SIDER_WIDTH_COLLAPSED = 80;
export const SIDER_WIDTH_NOT_COLLAPSED = 256;
export const DISTANCE_DRAWER = 24;

export const MONTH_UNIT = 'month';
export const VND = 'vnđ';
export const SPACE = ' ';

export const PATTERN_USERNAME = /^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$/;

export const PHONE_REGEXP = /^((\(([+]?)\d{2,3}\))?)([.-]?)([0-9 ])*$/;

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const VIEW_ALL = 'ALL';

export const URL_NOT_INCLUDE_SITE = ['infocity/api/user/manager'];

// Text empty
export const TEXT_EMPTY = '';

export const EXPRESSION = {
  EQ: 1, // equal
  LT: 2, // less than
  LE: 3, // less than or equal
  GT: 4, // greater than
  GE: 5, // greater than or equal
  PREFIX_LIKE: 6, // prefix like
  SUFFIX_LIKE: 7, // prefix like
  LIKE: 8, // like
  IN: 9, // in
  NE: 10, // not equal
};

export const BLOCK_ID_KEY = 'blockId';
export const BLOCK_UNIT_ID_KEY = 'blockUnitId';
export const FIELD_BLOCK_UNIT_TYPE = 'blockUnitType';
export const FILE = 'file';
export const TITLE = 'title';
export const NAME = 'name';
export const CONTENT = 'content';
export const ACCOUNT_NAME = 'accountName';
export const ACCOUNT_NO = 'accountNo';
export const BANK_CODE = 'bankCode';
export const BANK_NAME = 'bankName';
export const FEE_TYPE = 'feeType';
export const CODE = 'code';
export const FIELD_METER_TYPE = 'meterCode';
export const FIELD_METER_CODE = 'meterType';
export const FIELD_MONTH_YEAR = 'monthYear';
export const FIELD_TITLE = 'title';
export const FIELD_CONTENT = 'content';
export const FIELD_TYPE = 'type';
export const FIELD_STATUS = 'status';
export const FACILITY_MEASURE_FORM_ID = 'facilityMeasureFormId';
export const FROM_DATE_TIME = 'fromDateTime';
export const TO_DATE_TIME = 'toDateTime';
export const FROM_DATE = 'fromDate';
export const TO_DATE = 'toDate';
export const MATERIAL_PURCHASE_REQUEST_HEADER_CODE = 'materialPurchaseRequestHeaderCode';
export const MATERIAL_PURCHASE_ORDER_HEADER_CODE = 'materialPurchaseOrderHeaderCode';
export const VEHICLE_TYPE_NAME_FIELD = 'vehicleTypeName';
export const VEHICLE_TYPE_ID_FIELD = 'vehicleTypeId';
export const STATUS_FIELD = 'status';
export const FULL_NAME_FIELD = 'fullName';
export const ID_FIELD = 'id';
export const SERVICE_NAME_FIELD = 'serviceName';
export const BOOK_DATE_FIELD = 'bookDate';
export const MATERIAL_CODE = 'materialCode';
export const MATERIAL_NAME = 'materialName';
export const MATERIAL_ID = 'materialId';
export const WAREHOUSE_ID = 'warehouseId';
export const VOUCHER_DATE = 'voucherDate';
export const PHONE_CATEGORY_NAME = 'name';
export const PHONE_NAME = 'name';
export const PHONE_NUMBER = 'phone';
export const MATERIAL_CLASS_ID = 'materialClassId';
export const MATERIAL_CATEGORY_ID = 'materialCategoryId';
export const ENABLE = 'enable';
export const ENABLE_FIELD = 'enable';
export const REQUESTED_DATE = 'requestedDate';
export const ORDER_DATE = 'orderDate';
export const RECEIPT_DATE = 'receiptDate';
export const FIELD_MAPPED = 'mapped';
export const FIELD_DATE = 'date';
export const FIELD_METHOD = 'method';
export const FIELD_PAYMENT_TRANSACTION_ID = 'paymentTransactionId';
export const FIELD_PARENT_BANK_ACCOUNT_ID = 'parentBankAccountId';
export const MONTH = 'month';
export const FIELD_RESIDENT_ID = 'residentId';
export const FIELD_PAYMENT_STATUS = 'paymentStatus';
export const FIELD_CREATED_DATE = 'createdDate';
export const STOCK_TAKE_DATE = 'stockTakeDate';
export const FIELD_FEE_INFO_ID = 'feeInfoId';

export const LOCALES_SUPPOST = {
  vi: 'vi',
  ko: 'ko',
  en: 'en',
};

export const BREADCRUMBS_MAP = {
  'Site-setting': 'breadcrumb.Site-setting',
  Home: 'breadcrumb.Home',
  'Price-list': 'breadcrumb.Price-list',
  Block: 'breadcrumb.Block',
  Manager: 'breadcrumb.Manager',
  Department: 'breadcrumb.Department',
  Resident: 'breadcrumb.Resident',
  Keycard: 'breadcrumb.Keycard',
  Parking: 'breadcrumb.Parking',
  Amenity: 'breadcrumb.Amenity',
  Notify: 'breadcrumb.Notify',
  'Resident-news': 'breadcrumb.Resident-news',
  'Elect-water-read': 'breadcrumb.Elect-water-read',
  'Elect-water-fee': 'breadcrumb.Elect-water-fee',
  Form: 'breadcrumb.Form',
  Checking: 'breadcrumb.Checking',
  Register: 'breadcrumb.Register',
  Management: 'breadcrumb.Management',
  System: 'breadcrumb.System',
  General: 'breadcrumb.General',
  Cost: 'breadcrumb.Cost',
  Facility: 'breadcrumb.Facility',
  Complain: 'breadcrumb.Complain',
  'Measure-form': 'breadcrumb.Measure-form',
  Warehouse: 'breadcrumb.Warehouse',
  Supplier: 'breadcrumb.Supplier',
  Material: 'breadcrumb.Material',
  'Trash-fee': 'breadcrumb.Trash-fee',
  'Management-fee': 'breadcrumb.Management-fee',
  'Measure-result': 'breadcrumb.Measure-result',
  Report: 'breadcrumb.Report',
  'Purchase-request': 'breadcrumb.Purchase-request',
  'Purchase-order': 'breadcrumb.Purchase-order',
  'Parking-fee': 'breadcrumb.Parking-fee',
  Services: 'breadcrumb.Services',
  Receipt: 'breadcrumb.Receipt',
  'Other-setting': 'breadcrumb.Other-setting',
  'Fee-aggregation': 'breadcrumb.Fee-aggregation',
  'Payment-transaction': 'breadcrumb.Payment-transaction',
  'Report-fee': 'breadcrumb.Report-fee',
  'History-fee': 'breadcrumb.History-fee',
  'In-out-stock': 'breadcrumb.In-out-stock',
  'Stock-status': 'breadcrumb.Stock-status',
  'In-out-status': 'breadcrumb.In-out-status',
  'Phone-setting': 'breadcrumb.Phone-setting',
  Maintenance: 'breadcrumb.Maintenance',
  'Open-close-period': 'breadcrumb.Open-close-period',
  'General-inventory': 'breadcrumb.General-inventory',
  Bank: 'breadcrumb.Bank',
  'Manage-root-bank': 'breadcrumb.Manage-root-bank',
  'Virtual-account': 'breadcrumb.Virtual-account',
  'Collect-virtual-accounts': 'breadcrumb.Collect-virtual-accounts',
  'Stock-take': 'breadcrumb.Stock-take',
  'Virtual-account-transaction': 'breadcrumb.Virtual-account-transaction',
  'Manage-visitor': 'breadcrumb.Manage-visitor',
  Handbook: 'breadcrumb.Handbook',
  Account: 'breadcrumb.Account',
  Password: 'breadcrumb.Password',
  Settings: 'breadcrumb.Settings',
  'Report-all': 'breadcrumb.Report-all',
  Chart: 'breadcrumb.Chart',
  'Register-material': 'breadcrumb.Register-material',
};

export const DEFAULT_SIZE = 15;
export const MAX_VALUE_APPLY_READ = '∞';

export const NOTIFICATION = {
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
};

export const MIN_DATE_SERVER = '000001';
export const MAX_DATE_SERVER = '999912';

export const FROM_DATE_SERVER = '0000-01-01';
export const TO_DATE_SERVER = '9999-12-31';

export const MAX_PERCENT = 100;
export const DEFAULT_PERCENT = 10;

export const DEFAULT_NAME_IMAGE = 'image.png';
export const ACCEPT_FILE = '.xlsx, .xls, .doc, .docx, .txt, .pdf';
export const ACCEPT_IMAGE = 'image/gif, image/jpeg, image/png';

export const MAX_RECORD_EXCEL_DOWNLOAD = 5000;
export const DEFAULT_SHEET_NAME = 'sheet 1';
export const DEFAULT_EXCEL_EXTENTION = '.xlsx';
