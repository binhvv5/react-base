export enum WEEK {
  MONTHDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

export const WEEK_TYPES = [
  {
    value: WEEK.MONTHDAY,
    label: 'WEEK.MONTHDAY',
  },
  {
    value: WEEK.TUESDAY,
    label: 'WEEK.TUESDAY',
  },
  {
    value: WEEK.WEDNESDAY,
    label: 'WEEK.WEDNESDAY',
  },
  {
    value: WEEK.THURSDAY,
    label: 'WEEK.THURSDAY',
  },
  {
    value: WEEK.FRIDAY,
    label: 'WEEK.FRIDAY',
  },
  {
    value: WEEK.SATURDAY,
    label: 'WEEK.SATURDAY',
  },
  {
    value: WEEK.SUNDAY,
    label: 'WEEK.SUNDAY',
  },
];

export enum ANTD_TAG_COLOR {
  MAGENTA = 'magenta',
  RED = 'red',
  VOLCANO = 'volcano',
  ORANGE = 'orange',
  GOLD = 'gold',
  LIME = 'lime',
  GREEN = 'green',
  CYAN = 'cyan',
  BLUE = 'blue',
  GEEK_BLUE = 'geekblue',
  PURPLE = 'purple',
}

export enum NEWS_GROUP_STATUS {
  ALL,
  ACTIVE,
  INACTIVE,
}

export const NEWS_GROUP_STATUS_TYPES = [
  {
    value: NEWS_GROUP_STATUS.ALL,
    text: 'general.resident-news.status-all',
    tagColor: '',
  },
  {
    value: NEWS_GROUP_STATUS.ACTIVE,
    text: 'general.resident-news.status-active',
    tagColor: ANTD_TAG_COLOR.GREEN,
  },
  {
    value: NEWS_GROUP_STATUS.INACTIVE,
    text: 'general.resident-news.status-inactive',
    tagColor: ANTD_TAG_COLOR.VOLCANO,
  },
];

export const ERRROR = {
  11: 'msg.11',
  12: 'msg.12',
  21: 'msg.21',
  28: 'msg.28',
  29: 'msg.29',
  33: 'msg.33',
  34: 'msg.34',
  35: 'msg.35',
  36: 'msg.36',
  70: 'msg.70',
  38: 'msg.38',
  59: 'msg.59',
  76: 'msg.76',
  45: 'msg.45',
  40: 'msg.40',
  32: 'msg.32',
  44: 'msg.44',
};

export enum IMAGE_STATUS_ENUM {
  ERROR = 'error',
  SUCCESS = 'success',
  DONE = 'done',
  UPLOADING = 'uploading',
  REMOVED = 'removed',
}

export const SUCCESS = {
  UPDATED: 'success.updated',
  DELETED: 'success.deleted',
  SEND_REQUIRED: 'success.send-required',
};

export const NOTIFYCATION_TYPE = {
  MESSAGING: 1,
  EMAIL: 2,
  SMS: 3,
};

export const NOTIFYCATION_LABEL = [
  {
    value: NOTIFYCATION_TYPE.MESSAGING,
    text: 'general.notify.notifyApp',
  },
  {
    value: NOTIFYCATION_TYPE.EMAIL,
    text: 'general.notify.notifyEmail',
  },
];

const REPONSE_THROUGH_MOBILE = 1;
const REPONSE_DIRECT = 2;
export const METHOD_RESPONSE = [
  {
    value: REPONSE_THROUGH_MOBILE,
    text: 'methodResponse.app',
  },
  {
    value: REPONSE_DIRECT,
    text: 'methodResponse.direct',
  },
];

export enum AMENITY_STATUS {
  UN_CONFIRM = 1,
  CONFIRMED = 2,
  REFUSED = 3,
  CANCELED = 4,
  WAITING_PAY = 5,
  PAID = 6,
}

export const AMENITY_STATUS_TYPES = [
  {
    value: AMENITY_STATUS.UN_CONFIRM,
    text: 'general.amenity.status.un_confirm',
  },
  {
    value: AMENITY_STATUS.CONFIRMED,
    text: 'general.amenity.status.confirmed',
  },
  {
    value: AMENITY_STATUS.REFUSED,
    text: 'general.amenity.status.refused',
  },
  {
    value: AMENITY_STATUS.CANCELED,
    text: 'general.amenity.status.canceled',
  },
  {
    value: AMENITY_STATUS.WAITING_PAY,
    text: 'general.amenity.status.waiting-pay',
  },
  {
    value: AMENITY_STATUS.PAID,
    text: 'general.amenity.status.paid',
  },
];

export enum AMENITY_ORDER_METHOD {
  THROUGH_MOBILE = 1,
  DIRECT = 2,
}

export const AMENITY_ORDER_METHOD_TYPES = [
  {
    value: AMENITY_ORDER_METHOD.THROUGH_MOBILE,
    text: 'general.amenity.order-method-types.through-mobile',
  },
  {
    value: AMENITY_ORDER_METHOD.DIRECT,
    text: 'general.amenity.order-method-types.direct',
  },
];

export enum AMENITY_PAYMENT_METHOD {
  CASH = 1,
  ONLINE = 2,
  TRANSFER = 3,
}

export const AMENITY_PAYMENT_METHOD_TYPES = [
  {
    value: AMENITY_PAYMENT_METHOD.CASH,
    text: 'general.amenity.payment-method-types.cash',
  },
  {
    value: AMENITY_PAYMENT_METHOD.ONLINE,
    text: 'general.amenity.payment-method-types.online',
  },
  {
    value: AMENITY_PAYMENT_METHOD.TRANSFER,
    text: 'general.amenity.payment-method-types.transfer',
  },
];

const DATE_CYCLE = 1;
const WEEK_CYCLE = 2;
const MONTH_CYCLE = 3;
const QUARTER_CYCLE = 4;
const HALF_A_YEAR_CYCLE = 5;
const YEAR_CYCLE = 6;
export const CHECK_CYCLE = [
  {
    value: DATE_CYCLE,
    text: 'checkCycle.date',
  },
  {
    value: WEEK_CYCLE,
    text: 'checkCycle.week',
  },
  {
    value: MONTH_CYCLE,
    text: 'checkCycle.month',
  },
  {
    value: QUARTER_CYCLE,
    text: 'checkCycle.quarter',
  },
  {
    value: HALF_A_YEAR_CYCLE,
    text: 'checkCycle.halfYear',
  },
  {
    value: YEAR_CYCLE,
    text: 'checkCycle.year',
  },
];

export enum PRICE_LIST_CONFIG_TYPE {
  ALL = 0,
  ELECTRIC = 1,
  WATER = 2,
  TRASH = 3,
  MANAGE = 4,
  PARKING = 5,
  OTHER = 6,
}

export const PRICE_LIST_CONFIG_TYPES = [
  {
    value: PRICE_LIST_CONFIG_TYPE.ALL,
    text: 'system.price-list-config.price-list-config-type.all',
  },
  {
    value: PRICE_LIST_CONFIG_TYPE.ELECTRIC,
    text: 'system.price-list-config.price-list-config-type.electric',
    tagColor: ANTD_TAG_COLOR.RED,
  },
  {
    value: PRICE_LIST_CONFIG_TYPE.WATER,
    text: 'system.price-list-config.price-list-config-type.water',
    tagColor: ANTD_TAG_COLOR.VOLCANO,
  },
  {
    value: PRICE_LIST_CONFIG_TYPE.TRASH,
    text: 'system.price-list-config.price-list-config-type.trash',
    tagColor: ANTD_TAG_COLOR.LIME,
  },
  {
    value: PRICE_LIST_CONFIG_TYPE.MANAGE,
    text: 'system.price-list-config.price-list-config-type.manage',
    tagColor: ANTD_TAG_COLOR.GREEN,
  },
  {
    value: PRICE_LIST_CONFIG_TYPE.PARKING,
    text: 'system.price-list-config.price-list-config-type.parking',
    tagColor: ANTD_TAG_COLOR.GOLD,
  },
];

export enum CHARGE_UNIT_TYPE {
  BY_BLOCK_UNIT = 1,
  BY_PEOPLE = 2,
  BY_BLOCK_UNIT_AREA = 3,
}

export const CHARGE_UNIT_TYPES = [
  {
    value: CHARGE_UNIT_TYPE.BY_BLOCK_UNIT,
    text: 'system.price-list-config.charge-unit-types.block-unit',
    unit: 'unit.vnd-block',
  },
  {
    value: CHARGE_UNIT_TYPE.BY_PEOPLE,
    text: 'system.price-list-config.charge-unit-types.people',
    unit: 'unit.vnd-person',
  },
  {
    value: CHARGE_UNIT_TYPE.BY_BLOCK_UNIT_AREA,
    text: 'system.price-list-config.charge-unit-types.block-unit-area',
    unit: 'unit.vnd-m2',
  },
];

export enum FEE_TYPE_READER_FILTER {
  ELECTRIC = 1,
  WATER = 2,
}

export const FEE_TYPE_READER_FILTER_TYPES = [
  {
    value: FEE_TYPE_READER_FILTER.ELECTRIC,
    text: 'system.price-list-config.price-list-config-type.electric',
  },
  {
    value: FEE_TYPE_READER_FILTER.WATER,
    text: 'system.price-list-config.price-list-config-type.water',
  },
];

export enum SETTING_HEADCOUNT_ENUM {
  WATER = 2,
  TRASH = 3,
}

export const SETTING_HEADCOUNT_TYPES = [
  {
    value: SETTING_HEADCOUNT_ENUM.WATER,
    text: 'system.price-list-config.setting-headcount-water',
    tagColor: ANTD_TAG_COLOR.ORANGE,
  },
  {
    value: SETTING_HEADCOUNT_ENUM.TRASH,
    text: 'system.price-list-config.setting-headcount-trash',
    tagColor: ANTD_TAG_COLOR.LIME,
  },
];

export const PASSED = 1;
export const IMPROVED = 2;
export const FAILED = 3;
export const RESULTS_CHECK = [
  {
    value: PASSED,
    text: 'resultsCheck.pass',
  },
  {
    value: IMPROVED,
    text: 'resultsCheck.improved',
  },
  {
    value: FAILED,
    text: 'resultsCheck.failed',
  },
];

export const LOCATION = {
  INSIDE: 1,
  OUTSIDE: 2,
};

export const RESULTS_LOCATION = [
  {
    value: LOCATION.INSIDE,
    text: 'material.warehouse.inside',
  },
  {
    value: LOCATION.OUTSIDE,
    text: 'material.warehouse.outside',
  },
];

export enum READER_TYPE {
  ELECTRIC = 1,
  WATER = 2,
  ELECTRIC_EVN = 3,
}

export const READER_TYPE_FILTER = [
  {
    value: READER_TYPE.ELECTRIC,
    text: 'cost.elect-water.reader-type.electric',
  },
  {
    value: READER_TYPE.WATER,
    text: 'cost.elect-water.reader-type.water',
  },
  // {
  //   value: READER_TYPE.ELECTRIC_EVN,
  //   text: 'cost.elect-water.reader-type.electric-EVN',
  // },
];

export const MEASURE_UNIT_CONFIG_TYPE = {
  MEASURE: 1,
  STATUS: 2,
};

export const MEASURE_UNIT_CONFIG_TYPES = [
  {
    value: MEASURE_UNIT_CONFIG_TYPE.STATUS,
    text: 'measure-type.status',
  },
  {
    value: MEASURE_UNIT_CONFIG_TYPE.MEASURE,
    text: 'measure-type.measure',
  },
];

export enum READING_STATUS {
  NOT_READ = 0,
  NEW = 1,
  LOCKED = 2,
  COMPLETED = 3,
}

export const READING_STATUS_TYPES = [
  {
    value: READING_STATUS.NOT_READ,
    text: 'cost.elect-water.reading-status.not-read',
  },
  {
    value: READING_STATUS.NEW,
    text: 'cost.elect-water.reading-status.new',
  },
  {
    value: READING_STATUS.LOCKED,
    text: 'cost.elect-water.reading-status.locked',
  },
  {
    value: READING_STATUS.COMPLETED,
    text: 'cost.elect-water.reading-status.completed',
  },
];

export const MATERIAL_TYPE = {
  CLASS: 1,
  CATEGORY: 2,
};

export const MATERIAL_TYPES = [
  {
    value: MATERIAL_TYPE.CLASS,
    text: 'material.register.material-type.popup.class',
  },
  {
    value: MATERIAL_TYPE.CATEGORY,
    text: 'material.register.material-type.popup.category',
  },
];

export const CALCULATE_CONSUMPTION = [
  {
    value: true,
    text: 'calculate-consumption.yes',
  },
  {
    value: false,
    text: 'calculate-consumption.no',
  },
];

const INPUT_TYPE_NUMBER = 1;
const INPUT_TYPE_TIME = 2;
const INPUT_TYPE_PERCENT = 3;
export const MEASURE_INPUT_TYPE = [
  {
    value: INPUT_TYPE_NUMBER,
    text: 'measure-input-type.number',
  },
  {
    value: INPUT_TYPE_TIME,
    text: 'measure-input-type.time',
  },
  {
    value: INPUT_TYPE_PERCENT,
    text: 'measure-input-type.percen',
  },
];

const MANUAL = 1;
const AUTOMATION = 2;
export const FIX_TIME = 3;
export const FILL_OUT_TIME_TYPE = [
  {
    value: MANUAL,
    text: 'fill-out-time-type.manual',
  },
  {
    value: AUTOMATION,
    text: 'fill-out-time-type.automation',
  },
  {
    value: FIX_TIME,
    text: 'fill-out-time-type.fix-time',
  },
];

export enum FEE_STATUS {
  NOT_SAVE = 1,
  SAVED = 2,
}

export const FEE_STATUS_TYPES = [
  {
    value: FEE_STATUS.NOT_SAVE,
    text: 'cost.management-fee.status.not-save',
    tagColor: ANTD_TAG_COLOR.ORANGE,
  },
  {
    value: FEE_STATUS.SAVED,
    text: 'cost.management-fee.status.saved',
    tagColor: ANTD_TAG_COLOR.LIME,
  },
];

export const HAVE_KEY_CARD = 1;
export const NOT_HAVE_KEY_CARD = 2;
export const KEY_CARD_STATUS = [
  {
    value: HAVE_KEY_CARD,
    text: 'keyCard.have',
  },
  {
    value: NOT_HAVE_KEY_CARD,
    text: 'keyCard.notYet',
  },
];

const RETURN_METHOD_LEAVE = 1;
const RETURN_METHOD_LOST = 2;
const RETURN_METHOD_BROKEN = 3;
const RETURN_METHOD_CHANGE = 4;
const RETURN_METHOD_OTHER = 5;
export const METHOD_RETURN_TYPE = [
  {
    value: RETURN_METHOD_LEAVE,
    text: 'returnMethod.leave',
  },
  {
    value: RETURN_METHOD_LOST,
    text: 'returnMethod.lost',
  },
  {
    value: RETURN_METHOD_BROKEN,
    text: 'returnMethod.broken',
  },
  {
    value: RETURN_METHOD_CHANGE,
    text: 'returnMethod.change',
  },
  {
    value: RETURN_METHOD_OTHER,
    text: 'returnMethod.other',
  },
];

export enum BLOCK_UNIT_LEVEL_ENUM {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
}

export const BLOCK_UNIT_LEVEL = [
  {
    value: BLOCK_UNIT_LEVEL_ENUM.ONE,
    title: 'blockUnitLevel.1',
  },
  {
    value: BLOCK_UNIT_LEVEL_ENUM.TWO,
    title: 'blockUnitLevel.2',
  },
  {
    value: BLOCK_UNIT_LEVEL_ENUM.THREE,
    title: 'blockUnitLevel.3',
  },
  {
    value: BLOCK_UNIT_LEVEL_ENUM.FOUR,
    title: 'blockUnitLevel.4',
  },
  {
    value: BLOCK_UNIT_LEVEL_ENUM.FIVE,
    title: 'blockUnitLevel.5',
  },
  {
    value: BLOCK_UNIT_LEVEL_ENUM.SIX,
    title: 'blockUnitLevel.6',
  },
  {
    value: BLOCK_UNIT_LEVEL_ENUM.SEVEN,
    title: 'blockUnitLevel.7',
  },
  {
    value: BLOCK_UNIT_LEVEL_ENUM.EIGHT,
    title: 'blockUnitLevel.8',
  },
  {
    value: BLOCK_UNIT_LEVEL_ENUM.NINE,
    title: 'blockUnitLevel.9',
  },
];

export const METER_TYPE = {
  ELECTRICITY: 1,
  WATER: 2,
};

export const METER_TYPES = [
  {
    value: METER_TYPE.ELECTRICITY,
    text: 'meter.electrial',
  },
  {
    value: METER_TYPE.WATER,
    text: 'meter.water',
  },
];

export const VEHICLE_GROUPS = [
  {
    value: 1,
    text: 'vehicle.bike',
  },
  {
    value: 2,
    text: 'vehicle.motorcycle',
  },
  {
    value: 3,
    text: 'vehicle.car',
  },
  {
    value: 4,
    text: 'vehicle.other',
  },
];

export const PARKING_STATUS_ENUM = {
  HAVE_SLOT: 1,
  WAITING: 2,
};

export const PARKING_STATUS = [
  {
    value: PARKING_STATUS_ENUM.HAVE_SLOT,
    text: 'parking.status.haveSlot',
  },
  {
    value: PARKING_STATUS_ENUM.WAITING,
    text: 'parking.status.waiting',
  },
];

const APARTMENT_TYPE_ENUM = {
  HOME: 1,
  RENT_HOUSE: 2,
};

export const APARTMENT_TYPES = [
  {
    value: APARTMENT_TYPE_ENUM.HOME,
    text: 'apartment.home',
  },
  {
    value: APARTMENT_TYPE_ENUM.RENT_HOUSE,
    text: 'apartment.rentHouse',
  },
];

const ACCESS_CARD = 1;
export const PARKING_CARD = 2;
const ELEVATOR = 3;
export const KEY_CARD_TYPE = [
  {
    value: ACCESS_CARD,
    text: 'key.accessCard',
    color: 'magenta',
  },
  {
    value: PARKING_CARD,
    text: 'key.parking',
    color: 'lime',
  },
  {
    value: ELEVATOR,
    text: 'key.elevator',
    color: 'geekblue',
  },
];

const enum KEY_CARD_ENUM {
  NEW = 1,
  ADDITIONAL = 2,
  CHANGE = 3,
  OTHER = 4,
}

export const KEY_CARD_TYPE_ISSUE = [
  {
    value: KEY_CARD_ENUM.NEW,
    text: 'keyIssue.new',
  },
  {
    value: KEY_CARD_ENUM.ADDITIONAL,
    text: 'keyIssue.additional',
  },
  {
    value: KEY_CARD_ENUM.CHANGE,
    text: 'keyIssue.change',
  },
  {
    value: KEY_CARD_ENUM.OTHER,
    text: 'keyIssue.other',
  },
];

export const GENDER_SUPPORT = [1, 2];

export const GENDER = {
  1: 'gender.male',
  2: 'gender.female',
};

export const GENDERS = [
  {
    value: 1,
    text: 'gender.male',
  },
  {
    value: 2,
    text: 'gender.female',
  },
];

export enum BLOCK_UNIT_ENUM {
  APARTMENT = 1,
  SHOP = 2,
  OFFICE = 3,
  BIZCENTER = 4,
}

export const BLOCK_UNIT_TYPE = [
  {
    value: BLOCK_UNIT_ENUM.APARTMENT,
    title: 'block.apartment',
    color: 'orange',
  },
  {
    value: BLOCK_UNIT_ENUM.SHOP,
    title: 'block.shop',
    color: 'geekblue',
  },
  {
    value: BLOCK_UNIT_ENUM.OFFICE,
    title: 'block.office',
    color: 'cyan',
  },
  {
    value: BLOCK_UNIT_ENUM.BIZCENTER,
    title: 'block.bizcenter',
    color: 'blue',
  },
];

const OFFICE_TYPE = 1;
const NOMAL_TYPE = 2;
export const BLOCK_TYPE = [
  {
    value: OFFICE_TYPE,
    text: 'system.block.tab-block.type.office',
  },
  {
    value: NOMAL_TYPE,
    text: 'system.block.tab-block.type.nomal',
  },
];

export const ACTIVE_STATUS = [
  {
    value: true,
    title: 'status.active',
    key: 'active',
    color: 'green',
  },
  {
    value: false,
    title: 'status.inactive',
    key: 'inactive',
    color: 'volcano',
  },
];

export const PR_STATUS = {
  NOT_YET_PROCESSED: 1,
  PROCESSING: 2,
  COMPLETE: 3,
};

export const PR_STATUSES = [
  {
    value: PR_STATUS.NOT_YET_PROCESSED,
    text: 'material.purchase-request.notYetProcessed',
    color: 'default',
  },
  {
    value: PR_STATUS.PROCESSING,
    text: 'material.purchase-request.processing',
    color: 'blue',
  },
  {
    value: PR_STATUS.COMPLETE,
    text: 'material.purchase-request.complete',
    color: 'success',
  },
];

export enum FEE_CALCULATE_METHOD_TYPE {
  FREE = 1,
  DAY_COUNT = 2,
  HALF_MONTH = 3,
  FULL_MONTH = 4,
}

export const FEE_CALCULATE_METHOD = [
  {
    value: FEE_CALCULATE_METHOD_TYPE.FREE,
    text: 'fee-calculate-method.free',
  },
  {
    value: FEE_CALCULATE_METHOD_TYPE.DAY_COUNT,
    text: 'fee-calculate-method.day-count',
  },
  {
    value: FEE_CALCULATE_METHOD_TYPE.HALF_MONTH,
    text: 'fee-calculate-method.half-month',
  },
  {
    value: FEE_CALCULATE_METHOD_TYPE.FULL_MONTH,
    text: 'fee-calculate-method.full-month',
  },
];

export enum PARKING_FEE_CALCULATE_METHOD {
  BY_DATE = 1,
  BY_MONTH = 2,
  BY_QUARTER = 3,
  FREE = 4,
}

export const PARKING_FEE_CALCULATE_METHOD_TYPES = [
  {
    value: PARKING_FEE_CALCULATE_METHOD.BY_DATE,
    text: 'global.field.price-by-date',
  },
  {
    value: PARKING_FEE_CALCULATE_METHOD.BY_MONTH,
    text: 'global.field.price-by-month',
  },
  {
    value: PARKING_FEE_CALCULATE_METHOD.BY_QUARTER,
    text: 'global.field.price-by-quarter',
  },
  {
    value: PARKING_FEE_CALCULATE_METHOD.FREE,
    text: 'global.field.price-free',
  },
];

export enum PAYMENT_STATUS_ENUM {
  UN_PAID = 1,
  PAYING = 2,
  PAID = 3,
}

export const PAYMENT_STATUS = [
  {
    value: PAYMENT_STATUS_ENUM.UN_PAID,
    text: 'payment-status.not-pay',
    tagColor: ANTD_TAG_COLOR.ORANGE,
  },
  {
    value: PAYMENT_STATUS_ENUM.PAYING,
    text: 'payment-status.paying',
    tagColor: ANTD_TAG_COLOR.GOLD,
  },
  {
    value: PAYMENT_STATUS_ENUM.PAID,
    text: 'payment-status.paid',
    tagColor: ANTD_TAG_COLOR.GREEN,
  },
];

export const PO_STATUS = {
  NEW: 1,
  OUTSTANDING: 2,
  COMPLETE: 3,
  CANCELLED: 4,
};

export const PO_STATUSES = [
  {
    value: PO_STATUS.NEW,
    text: 'material.purchase-order.new',
    color: 'default',
  },
  {
    value: PO_STATUS.OUTSTANDING,
    text: 'material.purchase-order.outstanding',
    color: 'blue',
  },
  {
    value: PO_STATUS.COMPLETE,
    text: 'material.purchase-order.complete',
    color: 'success',
  },
  {
    value: PO_STATUS.CANCELLED,
    text: 'material.purchase-order.cancelled',
    color: 'success',
  },
];

export const MATERIAL_PRICE_TYPE = {
  NET_PRICE: 0,
  GROSS_PRICE: 1,
};

export const MATERIAL_VOUCHER_TYPE = {
  IN: 1,
  OUT: 2,
};

export const MATERIAL_VOUCHER_TYPES = [
  {
    value: MATERIAL_VOUCHER_TYPE.IN,
    text: 'material.in-out-stock.in',
  },
  {
    value: MATERIAL_VOUCHER_TYPE.OUT,
    text: 'material.in-out-stock.out',
  },
];

export const MATERIAL_SUBJECT_TYPE = {
  USAGE: 1,
  TRANSFER: 2,
  OTHERS_OUT: 3,
  RETURN: 4,
  OTHERS_IN: 5,
};

export const TYPE_RESET_PASSWORD = {
  EMAIL: 1,
  PHONE_NUMBER: 2,
};

export const RESET_PASSWORD = [
  {
    value: TYPE_RESET_PASSWORD.PHONE_NUMBER,
    text: 'reset.type.phone-number',
  },
  {
    value: TYPE_RESET_PASSWORD.EMAIL,
    text: 'reset.type.email',
  },
];

export const MATERIAL_SUBJECT_TYPES = [
  {
    value: MATERIAL_SUBJECT_TYPE.USAGE,
    text: 'material.in-out-stock.usage',
  },
  {
    value: MATERIAL_SUBJECT_TYPE.TRANSFER,
    text: 'material.in-out-stock.transfer',
  },
  {
    value: MATERIAL_SUBJECT_TYPE.OTHERS_OUT,
    text: 'material.in-out-stock.others',
  },
  {
    value: MATERIAL_SUBJECT_TYPE.RETURN,
    text: 'material.in-out-stock.return',
  },
  {
    value: MATERIAL_SUBJECT_TYPE.OTHERS_IN,
    text: 'material.in-out-stock.others',
  },
];

export const MATERIAL_SUBJECT_TYPE_IN = {
  RETURN: 4,
  OTHERS_IN: 5,
};

export const MATERIAL_SUBJECT_TYPE_INS = [
  {
    value: MATERIAL_SUBJECT_TYPE.RETURN,
    text: 'material.in-out-stock.return',
  },
  {
    value: MATERIAL_SUBJECT_TYPE.OTHERS_IN,
    text: 'material.in-out-stock.others',
  },
];

export const MATERIAL_SUBJECT_TYPE_OUT = {
  USAGE: 1,
  TRANSFER: 2,
  OTHERS_OUT: 3,
};

export const MATERIAL_SUBJECT_TYPE_OUTS = [
  {
    value: MATERIAL_SUBJECT_TYPE.USAGE,
    text: 'material.in-out-stock.usage',
  },
  {
    value: MATERIAL_SUBJECT_TYPE.TRANSFER,
    text: 'material.in-out-stock.transfer',
  },
  {
    value: MATERIAL_SUBJECT_TYPE.OTHERS_OUT,
    text: 'material.in-out-stock.others',
  },
];

export enum PAYMENT_TYPE_ENUM {
  AMOUNT = 1,
  PRE_AMOUNT = 2,
}

export const PAYMENT_TYPES = [
  {
    value: PAYMENT_TYPE_ENUM.AMOUNT,
    text: 'cost.payment-transaction.amount',
  },
  {
    value: PAYMENT_TYPE_ENUM.PRE_AMOUNT,
    text: 'cost.payment-transaction.pre-amount',
  },
];

export enum BANK_TRANSACTION_TYPE_ENUM {
  ALL = 0,
  NORMAL = 1,
  VIRTUAL_ACCOUNT = 2,
}

export const BANK_TRANSACTION_TYPES = [
  {
    value: BANK_TRANSACTION_TYPE_ENUM.ALL,
    text: 'cost.payment-transaction.bank-transfer-type.all',
  },
  {
    value: BANK_TRANSACTION_TYPE_ENUM.NORMAL,
    text: 'cost.payment-transaction.bank-transfer-type.transfer-money',
  },
  {
    value: BANK_TRANSACTION_TYPE_ENUM.VIRTUAL_ACCOUNT,
    text: 'cost.payment-transaction.bank-transfer-type.payment-gateway',
  },
];

export enum TRANSACTION_TYPE_ENUM {
  ALL = 0,
  CASH = 1,
  TRANSFER_MONEY = 2,
  PAYMENT_GATEWAY = 3,
}

export const TRANSACTION_TYPES = [
  {
    value: TRANSACTION_TYPE_ENUM.ALL,
    text: 'cost.payment-transaction.bank-transfer-type.all',
  },
  {
    value: TRANSACTION_TYPE_ENUM.CASH,
    text: 'cost.payment-transaction.bank-transfer-type.cash',
    tagColor: ANTD_TAG_COLOR.ORANGE,
  },
  {
    value: TRANSACTION_TYPE_ENUM.TRANSFER_MONEY,
    text: 'cost.payment-transaction.bank-transfer-type.transfer-money',
    tagColor: ANTD_TAG_COLOR.GREEN,
  },
  {
    value: TRANSACTION_TYPE_ENUM.PAYMENT_GATEWAY,
    text: 'cost.payment-transaction.bank-transfer-type.payment-gateway',
    tagColor: ANTD_TAG_COLOR.BLUE,
  },
];

export enum BANK_TRANSFER_STATUS_ENUM {
  ALL = 0,
  MAPPED = 1,
  NOT_MAP = 2,
  LOCKED = 3,
}

export const BANK_TRANSFER_STATUS = [
  {
    value: BANK_TRANSFER_STATUS_ENUM.ALL,
    text: 'cost.payment-transaction.bank-transfer-status.all',
  },
  {
    value: BANK_TRANSFER_STATUS_ENUM.MAPPED,
    text: 'cost.payment-transaction.bank-transfer-status.mapped',
  },
  {
    value: BANK_TRANSFER_STATUS_ENUM.NOT_MAP,
    text: 'cost.payment-transaction.bank-transfer-status.not-map',
  },
  {
    value: BANK_TRANSFER_STATUS_ENUM.LOCKED,
    text: 'cost.payment-transaction.bank-transfer-status.locked',
  },
];

export enum PARTNER_TYPE_ENUM {
  MOMO = 1,
  PAYOO = 2,
}

export const PARTNER_TYPES = [
  {
    value: PARTNER_TYPE_ENUM.MOMO,
    text: 'Momo',
  },
  {
    value: PARTNER_TYPE_ENUM.PAYOO,
    text: 'Payoo',
  },
];

export enum ENABLE_STATUS {
  INACTIVE = 0,
  ACTIVE = 1,
}

export const ENABLE_STATUSES = [
  {
    value: ENABLE_STATUS.INACTIVE,
    text: 'material.register.material.popup.inactive',
  },
  {
    value: ENABLE_STATUS.ACTIVE,
    text: 'material.register.material.popup.active',
  },
];

export enum DATE_TYPE {
  DATE = 0,
  MONTH = 1,
}

export enum PO_DETAIL_STATUS {
  OUTSTANDING = 1,
  COMPLETE = 2,
}

export enum BANK_SERVICE_TYPE {
  VIRTUAL_ACCOUNT = 1,
  AUTOMATIC_TRANSFER = 2,
}

export const BANK_SERVICE = [
  {
    value: BANK_SERVICE_TYPE.VIRTUAL_ACCOUNT,
    text: 'bank-service-type.virtual-account',
  },
  {
    value: BANK_SERVICE_TYPE.AUTOMATIC_TRANSFER,
    text: 'bank-service-type.automatic-transfer',
  },
];

export enum CLOSING_ACTION_TYPE {
  CLOSED = 1,
  OPEN = 2,
}

export const CLOSING_ACTION_TYPES = [
  {
    value: CLOSING_ACTION_TYPE.CLOSED,
    text: 'material.open-close-period.closed',
  },
  {
    value: CLOSING_ACTION_TYPE.OPEN,
    text: 'material.open-close-period.open',
  },
];

export enum ADJUST_AMOUNT_TYPE {
  UP = 1,
  DOWN = -1,
}

export const ADJUST_AMOUNT_TYPES = [
  {
    value: ADJUST_AMOUNT_TYPE.UP,
    text: 'cost.payment-transaction.adjust-amount-type.up',
  },
  {
    value: ADJUST_AMOUNT_TYPE.DOWN,
    text: 'cost.payment-transaction.adjust-amount-type.down',
  },
];

export enum FEE_INFO_TYPE_ENUM {
  NORMAL = 1,
  ADJUST = 2,
}

export enum STOCK_TAKE_STATUS {
  ACTIVE = 1,
  INACTIVE = 2,
}

export const STOCK_TAKE_STATUSES = [
  {
    value: STOCK_TAKE_STATUS.ACTIVE,
    text: 'material.stock-take.active',
  },
  {
    value: STOCK_TAKE_STATUS.INACTIVE,
    text: 'material.stock-take.inactive',
  },
];

export enum TEMPLATE_ENUM {
  EMAIL_OTP = 1,
  SMS_OTP = 2,
  EMAIL_FEE = 3,
  NOTIFICATION_FEE = 4,
  RECEIPT = 5,
  DEBIT_NOTE = 6,
}

export enum TYPE {
  PLAIN_TEXT = 1,
  HTML = 2,
}

export const CONTENT_TYPE = [
  {
    value: TYPE.PLAIN_TEXT,
    text: 'system.site-setting.template.content-type.plain-text',
  },
  {
    value: TYPE.HTML,
    text: 'system.site-setting.template.content-type.html',
  },
];

export const TEMPLATE_TYPE = [
  {
    value: TEMPLATE_ENUM.EMAIL_OTP,
    text: 'system.site-setting.template.select-type.email-otp',
    contentType: TYPE.HTML,
  },
  {
    value: TEMPLATE_ENUM.SMS_OTP,
    text: 'system.site-setting.template.select-type.sms-otp',
    contentType: TYPE.PLAIN_TEXT,
  },
  {
    value: TEMPLATE_ENUM.EMAIL_FEE,
    text: 'system.site-setting.template.select-type.email-fee',
    contentType: TYPE.HTML,
  },
  {
    value: TEMPLATE_ENUM.NOTIFICATION_FEE,
    text: 'system.site-setting.template.select-type.notification-fee',
    contentType: TYPE.HTML,
  },
  {
    value: TEMPLATE_ENUM.RECEIPT,
    text: 'system.site-setting.template.select-type.receipt',
    contentType: TYPE.HTML,
  },
  {
    value: TEMPLATE_ENUM.DEBIT_NOTE,
    text: 'system.site-setting.template.select-type.debit-note',
    contentType: TYPE.HTML,
  },
];

// content type = 1 (plain text) only key and text
export const TINY_EDITOR = {
  1: [
    {
      key: 'oTP',
      text: 'system.site-setting.template.menu-custom.email-otp',
      name: '${oTP}',
    },
  ],
  2: [
    {
      key: 'oTP',
      text: 'Mã OTP',
    },
  ],
  3: [
    {
      key: 'fullName',
      text: 'system.site-setting.template.menu-custom.email-fee.fullname',
      name: '${fullName}',
    },
    {
      key: 'blockUnitName',
      text: 'system.site-setting.template.menu-custom.email-fee.block-unit-name',
      name: '${blockUnit.name}',
    },
    {
      key: 'blockUnitSquare',
      text: 'system.site-setting.template.menu-custom.email-fee.block-unit-square',
      name: '${blockUnit.square}',
    },
    {
      key: 'monthYear',
      text: 'system.site-setting.template.menu-custom.email-fee.month-year',
      name: '${monthYear}',
    },
    {
      key: 'feeInfoManagementAmount',
      text: 'system.site-setting.template.menu-custom.email-fee.feeInfo-management-amount',
      name: '${feeInfo.management.amount}',
    },
    {
      key: 'feeInfoElectricityAmount',
      text: 'system.site-setting.template.menu-custom.email-fee.feeInfo-electricity-amount',
      name: '${feeInfo.electricity.amount}',
    },
    {
      key: 'feeInfoWaterAmount',
      text: 'system.site-setting.template.menu-custom.email-fee.feeInfo-water-amount',
      name: '${feeInfo.water.amount}',
    },
    {
      key: 'feeInfoParkingAmount',
      text: 'system.site-setting.template.menu-custom.noti-fee.feeInfo-parking-amount',
      name: '${feeInfo.parking.amount}',
    },
    {
      key: 'feeInfoExpire',
      text: 'system.site-setting.template.menu-custom.noti-fee.feeInfo-expire',
      name: '${feeInfo.expire}',
    },
    {
      key: 'feeInfoAmountPaid',
      text: 'system.site-setting.template.menu-custom.noti-fee.feeInfo-amount-paid',
      name: '${feeInfo.amountPaid}',
    },
    {
      key: 'feeInfoDebt',
      text: 'system.site-setting.template.menu-custom.noti-fee.feeInfo-debt',
      name: '${feeInfo.debt}',
    },
    {
      key: 'feeInfoTotalMonth',
      text: 'system.site-setting.template.menu-custom.noti-fee.feeInfo-total-month',
      name: '${feeInfo.totalMonth}',
    },
    {
      key: 'feeInfoTotal',
      text: 'system.site-setting.template.menu-custom.noti-fee.feeInfo-total',
      name: '${feeInfo.total}',
    },
  ],
  4: [
    {
      key: 'fullName',
      text: 'system.site-setting.template.menu-custom.noti-fee.fullname',
      name: '${fullName}',
    },
    {
      key: 'blockUnitName',
      text: 'system.site-setting.template.menu-custom.noti-fee.block-unit-name',
      name: '${blockUnit.name}',
    },
    {
      key: 'blockUnitSquare',
      text: 'system.site-setting.template.menu-custom.noti-fee.block-unit-square',
      name: '${blockUnit.square}',
    },
    {
      key: 'monthYear',
      text: 'system.site-setting.template.menu-custom.noti-fee.month-year',
      name: '${monthYear}',
    },
    {
      key: 'feeInfoManagementAmount',
      text: 'system.site-setting.template.menu-custom.noti-fee.feeInfo-management-amount',
      name: '${feeInfo.management.amount}',
    },
    {
      key: 'feeInfoElectricityAmount',
      text: 'system.site-setting.template.menu-custom.noti-fee.feeInfo-electricity-amount',
      name: '${feeInfo.electricity.amount}',
    },
    {
      key: 'feeInfoWaterAmount',
      text: 'system.site-setting.template.menu-custom.noti-fee.feeInfo-water-amount',
      name: '${feeInfo.water.amount}',
    },
    {
      key: 'feeInfoParkingAmount',
      text: 'system.site-setting.template.menu-custom.noti-fee.feeInfo-parking-amount',
      name: '${feeInfo.parking.amount}',
    },
    {
      key: 'feeInfoExpire',
      text: 'system.site-setting.template.menu-custom.noti-fee.feeInfo-expire',
      name: '${feeInfo.expire}',
    },
    {
      key: 'feeInfoAmountPaid',
      text: 'system.site-setting.template.menu-custom.noti-fee.feeInfo-amount-paid',
      name: '${feeInfo.amountPaid}',
    },
    {
      key: 'feeInfoDebt',
      text: 'system.site-setting.template.menu-custom.noti-fee.feeInfo-debt',
      name: '${feeInfo.debt}',
    },
    {
      key: 'feeInfoTotalMonth',
      text: 'system.site-setting.template.menu-custom.noti-fee.feeInfo-total-month',
      name: '${feeInfo.totalMonth}',
    },
    {
      key: 'feeInfoTotal',
      text: 'system.site-setting.template.menu-custom.noti-fee.feeInfo-total',
      name: '${feeInfo.total}',
    },
  ],
  5: [
    {
      key: 'payerFullName',
      text: 'system.site-setting.template.menu-custom.payer-fullname',
      name: '${payerFullName}',
    },
    {
      key: 'blockName',
      text: 'system.site-setting.template.menu-custom.block-name',
      name: '${resident.blockUnit.block.name}',
    },
    {
      key: 'blockUnitName',
      text: 'system.site-setting.template.menu-custom.block-unit-name',
      name: '${resident.blockUnit.name}',
    },
    {
      key: 'amount',
      text: 'system.site-setting.template.menu-custom.amount',
      name: '${amount}',
    },
    {
      key: 'collector',
      text: 'system.site-setting.template.menu-custom.collector',
      name: '${collector}',
    },
    {
      key: 'address',
      text: 'system.site-setting.template.menu-custom.address',
      name: '${address}',
    },
    {
      key: 'addressEnglish',
      text: 'system.site-setting.template.menu-custom.address-english',
      name: '${addressEnglish}',
    },
    {
      key: 'remarks',
      text: 'system.site-setting.template.menu-custom.remarks',
      name: '${remarks}',
    },
    {
      key: 'remarksEnglish',
      text: 'system.site-setting.template.menu-custom.remarks-english',
      name: '${remarksEnglish}',
    },
    {
      key: 'date',
      text: 'system.site-setting.template.menu-custom.date',
      name: '${date}',
    },
  ],
  6: [
    {
      key: 'customer',
      text: 'system.site-setting.template.menu-custom.customer',
      name: '${customer}',
    },
    {
      key: 'date',
      text: 'system.site-setting.template.menu-custom.date',
      name: '${date}',
    },
    {
      key: 'dateEnglish',
      text: 'system.site-setting.template.menu-custom.date-english',
      name: '${dateEnglish}',
    },
    {
      key: 'month',
      text: 'system.site-setting.template.menu-custom.month',
      name: '${month}',
    },
    {
      key: 'monthEnglish',
      text: 'system.site-setting.template.menu-custom.month-english',
      name: '${monthEnglish}',
    },
    {
      key: 'quantityManageFee',
      text: 'system.site-setting.template.menu-custom.manage-fee-quantity',
      name: '${quantityManageFee}',
    },
    {
      key: 'priceManageFee',
      text: 'system.site-setting.template.menu-custom.manage-fee-price',
      name: '${priceManageFee}',
    },
    {
      key: 'amountManageFee',
      text: 'system.site-setting.template.menu-custom.manage-fee-amount',
      name: '${amountManageFee}',
    },
    {
      key: 'paidManageFee',
      text: 'system.site-setting.template.menu-custom.manage-fee-paid',
      name: '${paidManageFee}',
    },
    {
      key: 'amountWater',
      text: 'system.site-setting.template.menu-custom.amount-water',
      name: '${amountWater}',
    },
    {
      key: 'paidWater',
      text: 'system.site-setting.template.menu-custom.paid-water',
      name: '${paidWater}',
    },
    {
      key: 'water',
      text: 'system.site-setting.template.menu-custom.water-from-to',
      name: '${water}',
      nameFrom: '${water.from}',
      nameTo: '${water.to}',
    },
    {
      key: 'quantityPriorMeter',
      text: 'system.site-setting.template.menu-custom.quantity-prior-meter',
      name: '${quantityPriorMeter}',
    },
    {
      key: 'pricePriorMeter',
      text: 'system.site-setting.template.menu-custom.price-prior-meter',
      name: '${pricePriorMeter}',
    },
    {
      key: 'amountPriorMeter',
      text: 'system.site-setting.template.menu-custom.amount-prior-meter',
      name: '${amountPriorMeter}',
    },
    {
      key: 'paidPriorMeter',
      text: 'system.site-setting.template.menu-custom.paid-prior-meter',
      name: '${paidPriorMeter}',
    },
    {
      key: 'quantityCurentMeter',
      text: 'system.site-setting.template.menu-custom.quantity-curent-meter',
      name: '${quantityCurentMeter}',
    },
    {
      key: 'priceCurentMeter',
      text: 'system.site-setting.template.menu-custom.price-curent-meter',
      name: '${priceCurentMeter}',
    },
    {
      key: 'amountCurentMeter',
      text: 'system.site-setting.template.menu-custom.amount-curent-meter',
      name: '${amountCurentMeter}',
    },
    {
      key: 'paidCurentMeter',
      text: 'system.site-setting.template.menu-custom.paid-curent-meter',
      name: '${paidCurentMeter}',
    },
    {
      key: 'quantityUsage',
      text: 'system.site-setting.template.menu-custom.quantity-usage',
      name: '${quantityUsage}',
    },
    {
      key: 'priceUsage',
      text: 'system.site-setting.template.menu-custom.price-usage',
      name: '${priceUsage}',
    },
    {
      key: 'amountUsage',
      text: 'system.site-setting.template.menu-custom.amount-usage',
      name: '${amountUsage}',
    },
    {
      key: 'paidUsage',
      text: 'system.site-setting.template.menu-custom.paid-usage',
      name: '${paidUsage}',
    },
    {
      key: 'quantityWater',
      text: 'system.site-setting.template.menu-custom.quantity-water',
      name: '${quantityWater}',
    },
    {
      key: 'priceWater',
      text: 'system.site-setting.template.menu-custom.price-water',
      name: '${priceWater}',
    },
    {
      key: 'amountWater',
      text: 'system.site-setting.template.menu-custom.amount-water',
      name: '${amountWater}',
    },
    {
      key: 'paidWater',
      text: 'system.site-setting.template.menu-custom.paid-water',
      name: '${paidWater}',
    },
    {
      key: 'amountOtherFee',
      text: 'system.site-setting.template.menu-custom.amount-other-fee',
      name: '${amountOtherFee}',
    },
    {
      key: 'paidOtherFee',
      text: 'system.site-setting.template.menu-custom.paid-other-fee',
      name: '${paidOtherFee}',
    },
    {
      key: 'quantityEnvironmentFee',
      text: 'system.site-setting.template.menu-custom.quantity-environment-fee',
      name: '${quantityEnvironmentFee}',
    },
    {
      key: 'priceEnvironmentFee',
      text: 'system.site-setting.template.menu-custom.price-environment-fee',
      name: '${priceEnvironmentFee}',
    },
    {
      key: 'amountEnvironmentFee',
      text: 'system.site-setting.template.menu-custom.amount-environment-fee',
      name: '${amountEnvironmentFee}',
    },
    {
      key: 'paidEnvironmentFee',
      text: 'system.site-setting.template.menu-custom.paid-environment-fee',
      name: '${paidEnvironmentFee}',
    },
    {
      key: 'quantityParkingFee',
      text: 'system.site-setting.template.menu-custom.quantity-parking-fee',
      name: '${quantityParkingFee}',
    },
    {
      key: 'priceParkingFee',
      text: 'system.site-setting.template.menu-custom.price-parking-fee',
      name: '${priceParkingFee}',
    },
    {
      key: 'amountParkingFee',
      text: 'system.site-setting.template.menu-custom.amount-parking-fee',
      name: '${amountParkingFee}',
    },
    {
      key: 'paidParkingFee',
      text: 'system.site-setting.template.menu-custom.paid-parking-fee',
      name: '${paidParkingFee}',
    },
    {
      key: 'amountTotal',
      text: 'system.site-setting.template.menu-custom.amount-total',
      name: '${amountTotal}',
    },
    {
      key: 'paidTotal',
      text: 'system.site-setting.template.menu-custom.paid-total',
      name: '${paidTotal}',
    },
    {
      key: 'amountTotalFee',
      text: 'system.site-setting.template.menu-custom.amount-total-fee',
      name: '${amountTotalFee}',
    },
    {
      key: 'paidTotalFee',
      text: 'system.site-setting.template.menu-custom.paid-total-fee',
      name: '${paidTotalFee}',
    },
  ],
};

export enum CUSTOMER_TYPE_ENUM {
  APARTMENT = 1,
  CONTRACT = 2,
}

export const CUSTOMER_TYPE = [
  {
    value: CUSTOMER_TYPE_ENUM.APARTMENT,
    text: 'customer-type.apartment',
  },
  {
    value: CUSTOMER_TYPE_ENUM.CONTRACT,
    text: 'customer-type.contract',
  },
];

export enum VISIT_TYPE_ENUM {
  VISIT = 1,
  MAINTENANCE = 2,
  DELIVERY = 3,
  OTHER = 4,
}

export const VISIT_TYPE = [
  {
    value: VISIT_TYPE_ENUM.VISIT,
    text: 'visit-type.visit',
  },
  {
    value: VISIT_TYPE_ENUM.MAINTENANCE,
    text: 'visit-type.maintenance',
  },
  {
    value: VISIT_TYPE_ENUM.DELIVERY,
    text: 'visit-type.delivery',
  },
  {
    value: VISIT_TYPE_ENUM.OTHER,
    text: 'visit-type.other',
  },
];

export const GRAPH_DATA = [
  {
    label: 'report.electric',
    value: 0,
    color: '#FF6868',
    feeType: PRICE_LIST_CONFIG_TYPE.ELECTRIC,
  },
  {
    label: 'report.water',
    value: 0,
    color: '#FC8559',
    feeType: PRICE_LIST_CONFIG_TYPE.WATER,
  },
  {
    label: 'report.manage',
    value: 0,
    color: '#4C84FF',
    feeType: PRICE_LIST_CONFIG_TYPE.MANAGE,
  },
  {
    label: 'report.parking',
    value: 0,
    color: '#00BE8D',
    feeType: PRICE_LIST_CONFIG_TYPE.PARKING,
  },
  {
    label: 'report.other',
    value: 0,
    color: '#775BFF',
    feeType: PRICE_LIST_CONFIG_TYPE.OTHER,
  },
];

export const GRAPH_DATA_CHART_BAR = [
  {
    label: 'report.electric',
    data: [],
    backgroundColor: '#FF6868',
    feeType: PRICE_LIST_CONFIG_TYPE.ELECTRIC,
  },
  {
    label: 'report.water',
    data: [],
    backgroundColor: '#fc8559',
    feeType: PRICE_LIST_CONFIG_TYPE.WATER,
  },
  {
    label: 'report.manage',
    data: [],
    backgroundColor: '#4c84ff',
    feeType: PRICE_LIST_CONFIG_TYPE.MANAGE,
  },
  {
    label: 'report.parking',
    data: [],
    backgroundColor: '#00be8d',
    feeType: PRICE_LIST_CONFIG_TYPE.PARKING,
  },
  {
    label: 'report.other',
    data: [],
    backgroundColor: '#775bff',
    feeType: PRICE_LIST_CONFIG_TYPE.OTHER,
  },
];

export enum WORK_ASSIGN_ENUM {
  WAITING = 1,
  WAITING_ACCEPT = 2,
  DOING = 3,
  REJECT = 4,
  WAITING_MANAGER_CONFIRM = 5,
  COMPLETED = 6,
  CANCELED = 7,
}

export const WORK_ASSIGNMENT_GRAPH_DATA = [
  {
    label: 'report.waiting',
    value: 0,
    color: '#ff6384',
    type: WORK_ASSIGN_ENUM.WAITING,
  },
  {
    label: 'report.waiting-accept',
    value: 0,
    color: '#ee2727',
    type: WORK_ASSIGN_ENUM.WAITING_ACCEPT,
  },
  {
    label: 'report.doing',
    value: 0,
    color: '#4C84FF',
    type: WORK_ASSIGN_ENUM.DOING,
  },
  {
    label: 'report.reject',
    value: 0,
    color: '#00BE8D',
    type: WORK_ASSIGN_ENUM.REJECT,
  },
  {
    label: 'report.waiting-manager-confirm',
    value: 0,
    color: '#26E5FF',
    type: WORK_ASSIGN_ENUM.WAITING_MANAGER_CONFIRM,
  },
  {
    label: 'report.completed',
    value: 0,
    color: '#FFCF26',
    type: WORK_ASSIGN_ENUM.COMPLETED,
  },
  {
    label: 'report.canceled',
    value: 0,
    color: '#cfcfcf',
    type: WORK_ASSIGN_ENUM.CANCELED,
  },
];

export enum COMPLAINT_ENUM {
  COMPLAINT = 1,
  INTERNAL = 2,
}

export const COMPLAINT_TYPES = [
  {
    text: 'report.complaint',
    value: COMPLAINT_ENUM.COMPLAINT,
  },
  {
    text: 'report.internal',
    value: COMPLAINT_ENUM.INTERNAL,
  },
];

export enum DASHBOARD_FILTER_ENUM {
  DAY = 'date',
  MONTH = 'month',
  YEAR = 'year',
}

export enum DASHBOARD_FILTER_COMPLAINT_ENUM {
  MONTH = 1,
  YEAR = 2,
}

export const DASHBOARD_FILTER = [
  {
    text: 'dashboard-filter.day',
    value: DASHBOARD_FILTER_ENUM.DAY,
  },
  {
    text: 'dashboard-filter.month',
    value: DASHBOARD_FILTER_ENUM.MONTH,
  },
  {
    text: 'dashboard-filter.year',
    value: DASHBOARD_FILTER_ENUM.YEAR,
  },
];

export enum ICON_STORE_TYPE_ENUM {
  AMENITY = 1,
  VEHICLE_TYPE = 2,
  SERVICE = 3,
}

export const ICON_STORE_TYPES = [
  {
    text: 'administration.icon-store.type.amenity',
    value: ICON_STORE_TYPE_ENUM.AMENITY,
    tagColor: ANTD_TAG_COLOR.GOLD,
  },
  {
    text: 'administration.icon-store.type.vehicle-type',
    value: ICON_STORE_TYPE_ENUM.VEHICLE_TYPE,
    tagColor: ANTD_TAG_COLOR.LIME,
  },
  {
    text: 'administration.icon-store.type.service',
    value: ICON_STORE_TYPE_ENUM.SERVICE,
    tagColor: ANTD_TAG_COLOR.CYAN,
  },
];

export enum EVENT_TYPE_ENUM {
  USERS = 'users',
  COMPLAINTS = 'complaints',
  AMENITY_BOOKS = 'amenityBooks',
  EVENTS = 'events',
}

export const EVENT_TYPE = [
  {
    text: 'dashboard.calendar.type.users',
    value: EVENT_TYPE_ENUM.USERS,
  },
  {
    text: 'dashboard.calendar.type.complaints',
    value: EVENT_TYPE_ENUM.COMPLAINTS,
  },
  {
    text: 'dashboard.calendar.type.amenity-books',
    value: EVENT_TYPE_ENUM.AMENITY_BOOKS,
  },
  {
    text: 'dashboard.calendar.type.events',
    value: EVENT_TYPE_ENUM.EVENTS,
  },
];
