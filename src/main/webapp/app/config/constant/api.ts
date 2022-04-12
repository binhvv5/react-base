/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-09-16 23:58:21
 * @Project: InfoCity
 */

export const SERVER_API_URL = process.env.SERVER_API_URL;
export const SERVER_FILE_URL = process.env.SERVER_FILE_URL;

const PRE_FIX = 'infocity/api/';

export const IMAGE_URL = SERVER_FILE_URL + '/infocity/api/file/image/';

export const NOTIFICATION_API = 'notification/api/fcmDeviceToken';

export const API_GET_TENANT_INFO = 'api/public/get-tenant-info';
export const APT_GET_INFO = 'management/info';

// Api file
export const APT_POST_FILE = PRE_FIX + 'file/upload';
export const APT_DELETE_FILE = PRE_FIX + 'file/delete';
export const APT_POST_FILE_EDITOR = SERVER_FILE_URL + PRE_FIX + 'file/upload';

// Api user
export const APT_POST_SIGNIN = PRE_FIX + 'user/signin';
export const API_GET_ACCOUNT = PRE_FIX + 'user/view';
export const API_CHANGE_PASSWORD = PRE_FIX + 'user/changePassword';
export const API_GET_ACCESS_TOKEN = SERVER_API_URL + PRE_FIX + 'user/getTokenFromRefreshToken';
export const API_REVOKE_ACCESS_TOKEN = PRE_FIX + 'user/getTokenFromRefreshToken';
export const API_GET_LIST_MANAGER = PRE_FIX + 'user/manager/find';
export const API_POST_CREATE_MANAGER = PRE_FIX + 'user/manager';
export const API_PUT_UPDATE_MANAGER = PRE_FIX + 'user/manager';
export const API_GET_DETAIL_MANAGER = PRE_FIX + 'user/manager/view';
export const API_DELETE_USER = PRE_FIX + 'user';
export const API_RESIDENT = PRE_FIX + 'user/resident';
export const API_GET_LIST_RESIDENT = PRE_FIX + 'user/resident/find';
export const API_GET_DETAIL_RESIDENT = PRE_FIX + 'user/resident/view';
export const API_GET_RESIDENT_BY_IDS = PRE_FIX + 'user/resident/viewByIds';
export const API_GET_MANAGER_BY_IDS = PRE_FIX + 'user/manager/viewByIds';
export const API_FORGET_PASSWORD = PRE_FIX + 'user/forgetPassword';
export const API_RENEW_PASSWORD = PRE_FIX + 'user/renewPassword';

// Api site
export const API_GET_LIST_SITE = PRE_FIX + 'site';
export const API_CREATE_SITE = PRE_FIX + 'site';
export const API_UPDATE_SITE = PRE_FIX + 'site';
export const API_DELETE_SITE = PRE_FIX + 'site';
export const API_GET_ALL_SITE = PRE_FIX + 'site/getAll';
export const API_GET_SITE = PRE_FIX + 'site/view';

// Api icon store
export const API_ICON_STORE = PRE_FIX + 'iconStore';
export const API_GET_LIST_ICON_STORE = PRE_FIX + 'iconStore/find';
export const API_GET_ICON_STORE = PRE_FIX + 'iconStore/view';

// Api for department
export const APT_GET_LIST_DEPARTMENT = PRE_FIX + 'department';
export const APT_POST_CREATE_DEPARTMENT = PRE_FIX + 'department';
export const APT_PUT_UPDATE_DEPARTMENT = PRE_FIX + 'department';
export const APT_DELETE_DEPARTMENT = PRE_FIX + 'department';

// Api for complex assignment
export const APT_POST_UPDATE_SITE_ASSIGNMENT = PRE_FIX + 'siteAssignment';

// Api bank
export const APT_BANK_ACCOUNT = PRE_FIX + 'bankAccount';
export const APT_GET_LIST_BANK_ACCOUNT = PRE_FIX + 'bankAccount/find';

// Api parent bank account
export const APT_PARENT_BANK_ACCOUNT = PRE_FIX + 'parentBankAccount';
export const APT_GET_LIST_PARENT_BANK_ACCOUNT = PRE_FIX + 'parentBankAccount/find';
export const APT_GET_PARENT_BANK_ACCOUNT = PRE_FIX + 'parentBankAccount/view';

// Api bank
export const APT_BANK = PRE_FIX + 'bank';
export const APT_GET_LIST_BANK = PRE_FIX + 'bank/find';
export const APT_GET_BANK = PRE_FIX + 'bank/view';

// Api template
export const APT_TEMPLATE = PRE_FIX + 'template';
export const APT_TEMPLATE_VIEW = PRE_FIX + 'template/view';
export const APT_GET_LIST_TEMPLATE = PRE_FIX + 'template/find';

// Api block
export const API_BLOCK = PRE_FIX + 'block';
export const API_LIST_BLOCK = PRE_FIX + 'block/find';

// Api block unit
export const API_GET_LIST_BLOCK_UNIT = PRE_FIX + 'blockUnit/find';
export const API_BLOCK_UNIT = PRE_FIX + 'blockUnit';
export const API_BLOCK_UNIT_DETAIL = PRE_FIX + 'blockUnit/view';
export const API_BLOCK_UNIT_SUMMARY_REPORT = PRE_FIX + 'blockUnit/dashboard/summary';

// Api meter
export const APT_GET_LIST_METER = PRE_FIX + 'meter/find';
export const APT_METER = PRE_FIX + 'meter';

// Api meter assignment
export const APT_GET_METER_ASSIGNMENT = PRE_FIX + 'meterAssignment';

// Api parking fee config
export const APT_PARKING_FEE_CONFIG = PRE_FIX + 'parkingFeeConfig';

// Api parking fee config
export const APT_PARKING = PRE_FIX + 'parking';
export const APT_GET_PARKINGS = PRE_FIX + 'parking/find';
export const APT_GET_PARKING_DETAIL = PRE_FIX + 'parking/view';
export const APT_GET_PARKING_SUMMARY_REPORT = PRE_FIX + 'parking/dashboard/summary';

// Api vehicle type
export const API_VEHICLE_TYPE = PRE_FIX + 'vehicleType';
export const APT_GET_VEHICLE_TYPE_LIST = PRE_FIX + 'vehicleType/find';
export const APT_GET_VEHICLE_TYPE_DETAIL = PRE_FIX + 'vehicleType/view';

// Api key card
export const API_KEY_CARD = PRE_FIX + 'keyCard';
export const API_GET_KEY_CARD = PRE_FIX + 'keyCard/find';
export const API_GET_KEY_CARD_DETAIL = PRE_FIX + 'keyCard/view';

// Api service facility
export const API_GET_LIST_AMENITY = PRE_FIX + 'amenity/find';
export const API_GET_DETAIL_AMENITY = PRE_FIX + 'amenity/view';
export const API_CREATE_AMENITY = PRE_FIX + 'amenity';
export const API_UPDATE_AMENITY = PRE_FIX + 'amenity';
export const API_DELETE_AMENITY = PRE_FIX + 'amenity';
export const API_GET_LIST_AMENITY_BOOK = PRE_FIX + 'amenityBook/find';
export const API_GET_DETAIL_AMENITY_BOOK = PRE_FIX + 'amenityBook/view';
export const API_CREATE_AMENITY_BOOK = PRE_FIX + 'amenityBook';
export const API_UPDATE_AMENITY_BOOK = PRE_FIX + 'amenityBook';
export const API_DELETE_AMENITY_BOOK = PRE_FIX + 'amenityBook';
export const API_AMENITY_SUMMARY_REPORT = PRE_FIX + 'amenityBook/dashboard/summary';

// Api notification config
export const API_GET_LIST_NOTIFICATION_CONFIG = PRE_FIX + 'notificationConfig/find';
export const API_NOTIFICATION_CONFIG = PRE_FIX + 'notificationConfig';
export const API_DETAIL_NOTIFICATION_CONFIG = PRE_FIX + 'notificationConfig/view';

// Api resident news
export const API_GET_LIST_RESIDENT_NEWS = PRE_FIX + 'news/find';
export const API_GET_DETAIL_RESIDENT_NEWS = PRE_FIX + 'news/view';
export const API_CREATE_RESIDENT_NEWS = PRE_FIX + 'news';
export const API_UPDATE_RESIDENT_NEWS = PRE_FIX + 'news';
export const API_DELETE_RESIDENT_NEWS = PRE_FIX + 'news';

export const API_GET_LIST_RESIDENT_NEWS_GROUP = PRE_FIX + 'newsGroup/find';
export const API_GET_DETAIL_RESIDENT_NEWS_GROUP = PRE_FIX + 'newsGroup/view';
export const API_CREATE_RESIDENT_NEWS_GROUP = PRE_FIX + 'newsGroup';
export const API_UPDATE_RESIDENT_NEWS_GROUP = PRE_FIX + 'newsGroup';
export const API_DELETE_RESIDENT_NEWS_GROUP = PRE_FIX + 'newsGroup';

// Api complain
export const API_GET_LIST_COMPLAIN = PRE_FIX + 'complaint/find';
export const API_GET_DETAIL_COMPLAIN = PRE_FIX + 'complaint/view';
export const API_COMPLAIN = PRE_FIX + 'complaint';
export const API_COMPLAIN_DASHBOARD = PRE_FIX + 'complaint/dashboard/summary';

// Api complain type
export const API_GET_LIST_COMPLAIN_TYPE = PRE_FIX + 'complaintType/find';
export const API_COMPLAIN_TYPE = PRE_FIX + 'complaintType';

// Api facility type
export const API_GET_LIST_FACILITY_TYPE = PRE_FIX + 'facilityType/find';
export const API_FACILITY_TYPE = PRE_FIX + 'facilityType';

// Api facility type
export const API_GET_LIST_FACILITY_MAINTENANCE = PRE_FIX + 'facilityMaintenance/find';
export const API_FACILITY_MAINTENANCE = PRE_FIX + 'facilityMaintenance';
export const API_GET_DEATIL_FACILITY_MAINTENANCE = PRE_FIX + 'facilityMaintenance/view';

// Api facility
export const API_GET_LIST_FACILITY = PRE_FIX + 'facility/find';
export const API_FACILITY = PRE_FIX + 'facility';
export const API_GET_DEATIL_FACILITY = PRE_FIX + 'facility/view';

// Api facility form
export const API_GET_LIST_FACILITY_FORM_CHECK_LIST = PRE_FIX + 'facilityFormChecklist/find';
export const API_FACILITY_FORM_CHECK_LIST = PRE_FIX + 'facilityFormChecklist';
export const API_GET_DEATIL_FACILITY_FORM_CHECK_LIST = PRE_FIX + 'facilityFormChecklist/view';

// Api facility measure form
export const API_GET_LIST_FACILITY_MEASURE_FORM = PRE_FIX + 'facilityMeasureForm/find';
export const API_FACILITY_MEASURE_FORM = PRE_FIX + 'facilityMeasureForm';
export const API_GET_DEATIL_FACILITY_MEASURE_FORM = PRE_FIX + 'facilityMeasureForm/view';

// Api facility measure unit
export const API_GET_LIST_MEASURE_UNIT = PRE_FIX + 'measureUnit/find';
export const API_MEASURE_UNIT = PRE_FIX + 'measureUnit';
export const API_GET_DEATIL_MEASURE_UNIT = PRE_FIX + 'measureUnit/view';

// Api facility measure unit
export const API_GET_LIST_MEASURE_RESULT_TABLE = PRE_FIX + 'facilityMeasureResultTable/find';
export const API_GET_DEATIL_MEASURE_RESULT_TABLE = PRE_FIX + 'facilityMeasureResultTable/view';
export const API_MEASURE_RESULT_TABLE = PRE_FIX + 'facilityMeasureResultTable';

// Property level config
export const API_PRIORITY_LEVEL_CONFIG = PRE_FIX + 'priorityLevelConfig';
export const API_GET_LIST_PRIORITY_LEVEL_CONFIG = PRE_FIX + 'priorityLevelConfig/find';

// Api facility execute checklist
export const API_GET_LIST_FACILITY_EXECUTE_CHECKLIST = PRE_FIX + 'facilityExecuteChecklist/find';
export const API_FACILITY_EXECUTE_CHECKLIST = PRE_FIX + 'facilityExecuteChecklist';
export const API_GET_DEATIL_FACILITY_EXECUTE_CHECKLIST = PRE_FIX + 'facilityExecuteChecklist/view';
export const API_UPDATE_FACILITY_CHECKLIST_STEP = PRE_FIX + 'facilityChecklistStep';

// Api facility form step
export const API_GET_LIST_FACILITY_FORM_CHECK_LIST_STEP = PRE_FIX + 'facilityChecklistStep/find';
export const API_FACILITY_FORM_CHECK_LIST_STEP = PRE_FIX + 'facilityChecklistStep';
export const API_GET_DEATIL_FACILITY_FORM_CHECK_LIST_STEP = PRE_FIX + 'facilityChecklistStep/view';

// Api Price list config
export const API_GET_PRICE_LIST_CONFIG_LIST = PRE_FIX + 'priceListConfig/find';
export const API_GET_PRICE_LIST_CONFIG_DETAIL = PRE_FIX + 'priceListConfig/view';
export const API_CREATE_PRICE_LIST_CONFIG = PRE_FIX + 'priceListConfig';
export const API_UPDATE_PRICE_LIST_CONFIG = PRE_FIX + 'priceListConfig';
export const API_DELETE_PRICE_LIST_CONFIG = PRE_FIX + 'priceListConfig';

// Api Headcount config
export const API_GET_HEAD_COUNT_CONFIG_LIST = PRE_FIX + 'headcountConfig/find';
export const API_GET_HEAD_COUNT_CONFIG_DETAIL = PRE_FIX + 'headcountConfig/view';
export const API_CREATE_HEAD_COUNT_CONFIG = PRE_FIX + 'headcountConfig';
export const API_UPDATE_HEAD_COUNT_CONFIG = PRE_FIX + 'headcountConfig';
export const API_DELETE_HEAD_COUNT_CONFIG = PRE_FIX + 'headcountConfig';

// Warehouse
export const API_GET_LIST_WAREHOUSE = PRE_FIX + 'warehouse/find';
export const API_WAREHOUSE = PRE_FIX + 'warehouse';
export const API_GET_WAREHOURSE = PRE_FIX + 'warehouse/view';

// Api Meter reading
export const API_GET_METER_READING_LIST = PRE_FIX + 'meterReading/find';
export const API_GET_METER_READING_DETAIL = PRE_FIX + 'meterReading/view';
export const API_CREATE_METER_READING = PRE_FIX + 'meterReading';
export const API_UPDATE_METER_READING = PRE_FIX + 'meterReading';
export const API_DELETE_METER_READING = PRE_FIX + 'meterReading';
export const API_IMPORT_METER_READING = PRE_FIX + 'meterReading/createFromExcel';

// Api Supplier
export const API_GET_LIST_SUPPLIER = PRE_FIX + 'supplier/find';
export const API_SUPPLIER = PRE_FIX + 'supplier';
export const API_GET_SUPPLIER = PRE_FIX + 'supplier/view';

// Api Material Type
export const API_GET_LIST_MATERIAL_TYPE = PRE_FIX + 'materialType/find';
export const API_MATERIAL_TYPE = PRE_FIX + 'materialType';
export const API_GET_MATERIAL_TYPE = PRE_FIX + 'materialType/view';

// Api Material
export const API_GET_LIST_MATERIAL = PRE_FIX + 'material/find';
export const API_MATERIAL = PRE_FIX + 'material';
export const API_GET_MATERIAL = PRE_FIX + 'material/view';

// Api fee
export const API_GET_FEE_AGGREGATION_LIST = PRE_FIX + 'fee/findAggregation';
export const API_GET_DETAIL_DEBT_BY_FEE_INFO = PRE_FIX + 'feeDebt/find';
export const API_GET_FEE_INFO_LIST = PRE_FIX + 'fee/findByCriteria';
export const API_GET_FEE_LIST = PRE_FIX + 'fee/find';
export const API_GET_FEE_DETAIL = PRE_FIX + 'fee/view';
export const API_ADJUST_FEE = PRE_FIX + 'fee/adjust';
export const API_SAVE_FEE = PRE_FIX + 'fee';
export const API_UPDATE_FEE = PRE_FIX + 'fee';
export const API_DELETE_FEE = PRE_FIX + 'fee';
export const API_SEND_NOTI_FEE = PRE_FIX + 'fee/pushNotification';
export const API_FEE_REPORRT = PRE_FIX + 'fee/dashboard/summary';
export const API_FEE_REPORRT_BY_MONTH = PRE_FIX + 'fee/dashboard/summaryByMonth';

// Api Report fee
export const API_GET_REPORT_DEBT_BY_UNIT_LIST = PRE_FIX + 'report';
export const API_GET_REPORT_PAYMENT_APP_LIST = PRE_FIX + 'report';

// Api Report fee
export const API_GET_HISTORY_FEE_LIST = PRE_FIX + 'historyFee';

// Api Payment transaction
export const API_CREATE_PAYMENT_TRANSACTION = PRE_FIX + 'paymentTransaction';
export const API_GET_PAYMENT_TRANSACTION_LIST = PRE_FIX + 'paymentTransaction/find';
export const API_GET_DETAIL_PAYMENT_TRANSACTION = PRE_FIX + 'feeDebt/find';
export const API_FEE_DEBT_REPORRT_BY_MONTH = PRE_FIX + 'feeDebt/dashboard/summary';
export const API_MAP_BANK_TRANSFER = PRE_FIX + 'paymentTransaction/mapBankTransfer';
export const API_GET_BANK_TRANSFER_SUMARY_REPORT = PRE_FIX + 'bankTransferTransaction/sumaryReport';
export const API_GET_BANK_TRANSFER_TRANSACTION_LIST = PRE_FIX + 'bankTransferTransaction/find';
export const API_UPLOAD_TRANSFER_TRANSACTION = PRE_FIX + 'bankTransferTransaction/createFromExcel';
export const API_PRINT_RECEIPT = PRE_FIX + 'paymentTransaction/getReceipt';

// Api complaint report
export const API_COMPLAINT_REPORT = PRE_FIX + 'complaint/report';

// Api Material Purchase Request Header
export const API_GET_LIST_MATERIAL_PURCHASE_REQUEST_HEADER = PRE_FIX + 'materialPurchaseRequestHeader/find';
export const API_GET_LIST_INCOMPLETE_MATERIAL_PURCHASE_REQUEST_HEADER = PRE_FIX + 'materialPurchaseRequestHeader/findFull';
export const API_GET_NEXT_MATERIAL_PURCHASE_REQUEST_HEADER_CODE = PRE_FIX + 'materialPurchaseRequestHeader/getNextCode';
export const API_MATERIAL_PURCHASE_REQUEST_HEADER = PRE_FIX + 'materialPurchaseRequestHeader';
export const API_GET_MATERIAL_PURCHASE_REQUEST_HEADER = PRE_FIX + 'materialPurchaseRequestHeader/view';

// Api Material Purchase Request Detail
export const API_GET_LIST_MATERIAL_PURCHASE_REQUEST_DETAIL = PRE_FIX + 'materialPurchaseRequestDetail/find';
export const API_MATERIAL_PURCHASE_REQUEST_DETAIL = PRE_FIX + 'materialPurchaseRequestDetail';
export const API_GET_MATERIAL_PURCHASE_REQUEST_DETAIL = PRE_FIX + 'materialPurchaseRequestDetail/view';

// Api Material Purchase Order Header
export const API_GET_LIST_MATERIAL_PURCHASE_ORDER_HEADER = PRE_FIX + 'materialPurchaseOrderHeader/find';
export const API_GET_LIST_INCOMPLETE_MATERIAL_PURCHASE_ORDER_HEADER = PRE_FIX + 'materialPurchaseOrderHeader/findFull';
export const API_GET_NEXT_MATERIAL_PURCHASE_ORDER_HEADER_CODE = PRE_FIX + 'materialPurchaseOrderHeader/getNextCode';
export const API_MATERIAL_PURCHASE_ORDER_HEADER = PRE_FIX + 'materialPurchaseOrderHeader';
export const API_GET_MATERIAL_PURCHASE_ORDER_HEADER = PRE_FIX + 'materialPurchaseOrderHeader/view';

// Api Material Purchase Order Detail
export const API_GET_LIST_MATERIAL_PURCHASE_ORDER_DETAIL = PRE_FIX + 'materialPurchaseOrderDetail/find';
export const API_MATERIAL_PURCHASE_ORDER_DETAIL = PRE_FIX + 'materialPurchaseOrderDetail';
export const API_GET_MATERIAL_PURCHASE_ORDER_DETAIL = PRE_FIX + 'materialPurchaseOrderDetail/view';

// Api fee type config
export const API_GET_LIST_FEE_TYPE_CONFIG = PRE_FIX + 'feeTypeConfig/find';
export const API_FEE_TYPE_CONFIG = PRE_FIX + 'feeTypeConfig';
export const API_GET_DEATIL_FEE_TYPE_CONFIG = PRE_FIX + '​feeTypeConfig/view';

// Api fee service book
export const API_GET_LIST_SERVICE_BOOK = PRE_FIX + 'serviceBook/find';
export const API_FEE_SERVICE_BOOK = PRE_FIX + 'serviceBook';
export const API_GET_DEATIL_SERVICE_BOOK = PRE_FIX + 'serviceBook/view';

// Api fee service
export const API_GET_LIST_SERVICE = PRE_FIX + 'service/find';
export const API_FEE_SERVICE = PRE_FIX + 'service';
export const API_GET_DEATIL_SERVICE = PRE_FIX + 'service/view';

// Api Material Receipt Header
export const API_GET_LIST_MATERIAL_RECEIPT_HEADER = PRE_FIX + 'materialReceiptHeader/find';
export const API_GET_NEXT_MATERIAL_RECEIPT_HEADER_CODE = PRE_FIX + 'materialReceiptHeader/getNextCode';
export const API_MATERIAL_RECEIPT_HEADER = PRE_FIX + 'materialReceiptHeader';
export const API_GET_MATERIAL_RECEIPT_HEADER = PRE_FIX + 'materialReceiptHeader/view';

// Api Material Receipt Detail
export const API_GET_LIST_MATERIAL_RECEIPT_DETAIL = PRE_FIX + 'materialReceiptDetail/find';
export const API_MATERIAL_RECEIPT_DETAIL = PRE_FIX + 'materialReceiptDetail';
export const API_GET_MATERIAL_RECEIPT_DETAIL = PRE_FIX + 'materialReceiptDetail/view';

// Api Material In Out Stock Header
export const API_GET_LIST_MATERIAL_IN_OUT_STOCK_HEADER = PRE_FIX + 'materialInOutStockHeader/find';
export const API_GET_NEXT_MATERIAL_IN_OUT_STOCK_HEADER_CODE = PRE_FIX + 'materialInOutStockHeader/getNextCode';
export const API_MATERIAL_IN_OUT_STOCK_HEADER = PRE_FIX + 'materialInOutStockHeader';
export const API_GET_MATERIAL_IN_OUT_STOCK_HEADER = PRE_FIX + 'materialInOutStockHeader/view';

// Api Material In Out Stock Detail
export const API_GET_LIST_MATERIAL_IN_OUT_STOCK_DETAIL = PRE_FIX + 'materialInOutStockDetail/find';
export const API_MATERIAL_IN_OUT_STOCK_DETAIL = PRE_FIX + 'materialInOutStockDetail';
export const API_GET_MATERIAL_IN_OUT_STOCK_DETAIL = PRE_FIX + 'materialInOutStockDetail/view';

// Api Material Stock Transaction
export const API_GET_LIST_MATERIAL_STOCK_TRANSACTION = PRE_FIX + 'materialStockTransaction/find';
export const API_GET_LIST_ALL_MATERIAL_STOCK_TRANSACTION = PRE_FIX + 'materialStockTransaction/findAll';

// Api Phone Book Controller
export const API_GET_PHONE_BOOK = PRE_FIX + 'phoneBook/find';
export const API_PHONE_BOOK = PRE_FIX + 'phoneBook';

export const API_GET_PHONE_BOOK_CATEGORY = PRE_FIX + 'phoneBookCategory/find';
export const API_PHONE_BOOK_CATEGORY = PRE_FIX + 'phoneBookCategory';

export const API_GET_LIST_MATERIAL_IN_OUT_STOCK = PRE_FIX + 'materialStockTransaction/findInRange';

// Api Material Period End Closing
export const API_GET_LIST_MATERIAL_PERIOD_END_CLOSING = PRE_FIX + 'materialPeriodEndClosing/find';
export const API_GET_LAST_MATERIAL_PERIOD_END_CLOSING = PRE_FIX + 'materialPeriodEndClosing/findLastActive';
export const API_MATERIAL_PERIOD_END_CLOSING = PRE_FIX + 'materialPeriodEndClosing';
export const API_PRICE_LAST_MATERIAL_PERIOD_END_CLOSING = PRE_FIX + 'materialPeriodEndClosing/price';
export const API_GET_LIST_MATERIAL_PERIOD_END_CLOSING_DETAIL = PRE_FIX + 'materialPeriodEndClosingDetail/find';

// Api bank account
export const API_GET_LIST_VITUAL_BANK_ACCOUNT = PRE_FIX + 'virtualBankAccount/find';
export const API_GET_VITUAL_BANK_ACCOUNT = PRE_FIX + 'virtualBankAccount/view';
export const API_GRANT_BLOCK_UNIT = PRE_FIX + 'virtualBankAccount/grantBlockUnit';

// Api Material Stock Taking Header
export const API_GET_LIST_MATERIAL_STOCK_TAKING_HEADER = PRE_FIX + 'materialStockTakingHeader/find';
export const API_GET_NEXT_MATERIAL_STOCK_TAKING_HEADER_CODE = PRE_FIX + 'materialStockTakingHeader/getNextCode';
export const API_MATERIAL_STOCK_TAKING_HEADER = PRE_FIX + 'materialStockTakingHeader';
export const API_GET_MATERIAL_STOCK_TAKING_HEADER = PRE_FIX + 'materialStockTakingHeader/view';

// Api Material Stock Taking Detail
export const API_MATERIAL_STOCK_TAKING_DETAIL = PRE_FIX + 'materialStockTakingDetail';

// Api bank account
export const API_GET_LIST_VISITOR = PRE_FIX + 'visitor/find';
export const API_GET_VISITOR = PRE_FIX + 'visitor/view';
export const API_VISITOR = PRE_FIX + 'visitor';

// Api hand book category
export const API_GET_HANDBOOK_CATEGORIES = PRE_FIX + 'handbookCategory/find';
export const API_GET_HANDBOOK_CATEGORY = PRE_FIX + 'handbookCategory/view';
export const API_HANDBOOK_CATEGORY = PRE_FIX + 'handbookCategory';

// Api hand book
export const API_GET_LIST_HANDBOOK = PRE_FIX + 'handbook/find';
export const API_GET_HANDBOOK = PRE_FIX + 'handbook/view';
export const API_HANDBOOK = PRE_FIX + 'handbook';

// Api event

export const API_GET_CALENDAR_DASHBOARD = PRE_FIX + 'event/dashboard';
export const API_GET_CALENDAR = PRE_FIX + 'event/view';
export const API_CREATE_CALENDAR = PRE_FIX + 'event';
export const API_UPDATE_CALENDAR = PRE_FIX + 'event';
export const API_DELETE_CALENDAR = PRE_FIX + 'event';

// Api work assignment
export const API_ASSIGNMENT_SUMMARY_REPORT = PRE_FIX + 'workAssignment/dashboard/summary';

// Api notification
export const API_GET_NOTIFICATION = PRE_FIX + 'notification/find';
export const API_UPDATE_NOTIFICATION = PRE_FIX + 'notification';
