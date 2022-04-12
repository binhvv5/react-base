import { NEWS_GROUP_STATUS } from 'app/config/constant/enum';

export enum PRIVILEGE_ENUM {
  CREATE,
  UPDATE,
  DELETE,
  GET,
  VIEW_DASHBOARD,
}

export enum MODULE_ENUM {
  PERMISSION,
  AMENITY,
  AMENITY_BOOK,
  BANK_ACCOUNT,
  BANK_TRANSFER_TRANSACTION,
  BLOCK,
  BLOCK_UNIT,
  COMPLAINT,
  COMPLAINT_TYPE,
  DEPARTMENT,
  EVENT,
  FACILITY,
  FACILITY_FORM_CHECKLIST,
  FACILITY_EXECUTE_CHECKLIST,
  FACILITY_MEASURE_FORM,
  FACILITY_MEASURE_FORM_RESULT,
  FACILITY_TYPE,
  FEE,
  FEE_TYPE_CONFIG,
  HANDBOOK,
  HANDBOOK_CATEGORY,
  HEADCOUNT_CONFIG,
  KEY_CARD,
  METER,
  METER_READING,
  NEWS,
  NEWS_GROUP,
  NOTIFICATION_CONFIG,
  PARENT_BANK_ACCOUNT,
  PARKING,
  PAYMENT_GATEWAY_CONFIG,
  PAYMENT_TRANSACTION,
  PHONE_BOOK,
  PHONE_BOOK_CATEGORY,
  PRICE_LIST_CONFIG,
  PRIORITY_LEVEL_CONFIG,
  SERVICE,
  SERVICE_BOOK,
  SUPPLIER,
  TASK,
  TEMPLATE,
  USER,
  VEHICLE_TYPE,
  VIRTUAL_BANK_ACCOUNT,
  VISITOR,
  WAREHOUSE,
  MATERIAL,
  MATERIAL_PURCHASE_REQUEST,
  MATERIAL_PURCHASE_ORDER,
  MATERIAL_RECEIPT,
  MATERIAL_IN_OUT_STOCK,
  MATERIAL_OPEN_CLOSE_PERIOD,
  MATERIAL_STOCK_TAKE,
  MATERIAL_STOCK_STATUS,
  MATERIAL_STOCK_IN_OUT,
  MATERIAL_GENERAL_INVENTORY,
}

export const MODULE_TYPES = [
  {
    value: MODULE_ENUM.PERMISSION,
    text: 'administration.site-management.module.permission',
  },
  {
    value: MODULE_ENUM.AMENITY,
    text: 'administration.site-management.module.amenity',
  },
  {
    value: MODULE_ENUM.AMENITY_BOOK,
    text: 'administration.site-management.module.amenity-book',
  },
  {
    value: MODULE_ENUM.BANK_ACCOUNT,
    text: 'administration.site-management.module.bank-account',
  },
  {
    value: MODULE_ENUM.BANK_TRANSFER_TRANSACTION,
    text: 'administration.site-management.module.bank-transfer-transaction',
  },
  {
    value: MODULE_ENUM.BLOCK,
    text: 'administration.site-management.module.block',
  },
  {
    value: MODULE_ENUM.BLOCK_UNIT,
    text: 'administration.site-management.module.block-unit',
  },
  {
    value: MODULE_ENUM.COMPLAINT,
    text: 'administration.site-management.module.complaint',
  },
  {
    value: MODULE_ENUM.COMPLAINT_TYPE,
    text: 'administration.site-management.module.complaint-type',
  },
  {
    value: MODULE_ENUM.DEPARTMENT,
    text: 'administration.site-management.module.department',
  },
  {
    value: MODULE_ENUM.EVENT,
    text: 'administration.site-management.module.event',
  },
  {
    value: MODULE_ENUM.FACILITY,
    text: 'administration.site-management.module.facility',
  },
  {
    value: MODULE_ENUM.FACILITY_FORM_CHECKLIST,
    text: 'administration.site-management.module.facility-form-checklist',
  },
  {
    value: MODULE_ENUM.FACILITY_EXECUTE_CHECKLIST,
    text: 'administration.site-management.module.facility-execute-checklist',
  },
  {
    value: MODULE_ENUM.FACILITY_MEASURE_FORM,
    text: 'administration.site-management.module.facility-measure-form',
  },
  {
    value: MODULE_ENUM.FACILITY_MEASURE_FORM_RESULT,
    text: 'administration.site-management.module.facility-measure-form-result',
  },
  {
    value: MODULE_ENUM.FACILITY_TYPE,
    text: 'administration.site-management.module.facility-type',
  },
  {
    value: MODULE_ENUM.FEE,
    text: 'administration.site-management.module.fee',
  },
  {
    value: MODULE_ENUM.FEE_TYPE_CONFIG,
    text: 'administration.site-management.module.fee-type-config',
  },
  {
    value: MODULE_ENUM.HANDBOOK,
    text: 'administration.site-management.module.handbook',
  },
  {
    value: MODULE_ENUM.HANDBOOK_CATEGORY,
    text: 'administration.site-management.module.handbook-category',
  },
  {
    value: MODULE_ENUM.HEADCOUNT_CONFIG,
    text: 'administration.site-management.module.headcount-config',
  },
  {
    value: MODULE_ENUM.KEY_CARD,
    text: 'administration.site-management.module.key-card',
  },
  {
    value: MODULE_ENUM.METER,
    text: 'administration.site-management.module.meter',
  },
  {
    value: MODULE_ENUM.METER_READING,
    text: 'administration.site-management.module.meter-reading',
  },
  {
    value: MODULE_ENUM.NEWS,
    text: 'administration.site-management.module.news',
  },
  {
    value: MODULE_ENUM.NEWS_GROUP,
    text: 'administration.site-management.module.news-group',
  },
  {
    value: MODULE_ENUM.NOTIFICATION_CONFIG,
    text: 'administration.site-management.module.notification-config',
  },
  {
    value: MODULE_ENUM.PARENT_BANK_ACCOUNT,
    text: 'administration.site-management.module.parent-bank-account',
  },
  {
    value: MODULE_ENUM.PARKING,
    text: 'administration.site-management.module.parking',
  },
  {
    value: MODULE_ENUM.PAYMENT_GATEWAY_CONFIG,
    text: 'administration.site-management.module.payment-gateway-config',
  },
  {
    value: MODULE_ENUM.PAYMENT_TRANSACTION,
    text: 'administration.site-management.module.payment-transaction',
  },
  {
    value: MODULE_ENUM.PHONE_BOOK,
    text: 'administration.site-management.module.phone-book',
  },
  {
    value: MODULE_ENUM.PHONE_BOOK_CATEGORY,
    text: 'administration.site-management.module.phone-book-category',
  },
  {
    value: MODULE_ENUM.PRICE_LIST_CONFIG,
    text: 'administration.site-management.module.price-list-config',
  },
  {
    value: MODULE_ENUM.PRIORITY_LEVEL_CONFIG,
    text: 'administration.site-management.module.priority-level-config',
  },
  {
    value: MODULE_ENUM.SERVICE,
    text: 'administration.site-management.module.service',
  },
  {
    value: MODULE_ENUM.SERVICE_BOOK,
    text: 'administration.site-management.module.service-book',
  },
  {
    value: MODULE_ENUM.SUPPLIER,
    text: 'administration.site-management.module.supplier',
  },
  {
    value: MODULE_ENUM.TASK,
    text: 'administration.site-management.module.task',
  },
  {
    value: MODULE_ENUM.TEMPLATE,
    text: 'administration.site-management.module.template',
  },
  {
    value: MODULE_ENUM.USER,
    text: 'administration.site-management.module.user',
  },
  {
    value: MODULE_ENUM.VEHICLE_TYPE,
    text: 'administration.site-management.module.vehicle-type',
  },
  {
    value: MODULE_ENUM.VIRTUAL_BANK_ACCOUNT,
    text: 'administration.site-management.module.virtual-bank-account',
  },
  {
    value: MODULE_ENUM.VISITOR,
    text: 'administration.site-management.module.visitor',
  },
  {
    value: MODULE_ENUM.WAREHOUSE,
    text: 'administration.site-management.module.warehouse',
  },
  {
    value: MODULE_ENUM.MATERIAL,
    text: 'administration.site-management.module.material',
  },
  {
    value: MODULE_ENUM.MATERIAL_PURCHASE_REQUEST,
    text: 'administration.site-management.module.material-purchase-request',
  },
  {
    value: MODULE_ENUM.MATERIAL_PURCHASE_ORDER,
    text: 'administration.site-management.module.material-purchase-order',
  },
  {
    value: MODULE_ENUM.MATERIAL_RECEIPT,
    text: 'administration.site-management.module.material-receipt',
  },
  {
    value: MODULE_ENUM.MATERIAL_IN_OUT_STOCK,
    text: 'administration.site-management.module.material-in-out-stock',
  },
  {
    value: MODULE_ENUM.MATERIAL_OPEN_CLOSE_PERIOD,
    text: 'administration.site-management.module.material-open-close-period',
  },
  {
    value: MODULE_ENUM.MATERIAL_STOCK_TAKE,
    text: 'administration.site-management.module.material-stock-take',
  },
  {
    value: MODULE_ENUM.MATERIAL_STOCK_STATUS,
    text: 'administration.site-management.module.material-stock-status',
  },
  {
    value: MODULE_ENUM.MATERIAL_STOCK_IN_OUT,
    text: 'administration.site-management.module.material-stock-in-out',
  },
  {
    value: MODULE_ENUM.MATERIAL_GENERAL_INVENTORY,
    text: 'administration.site-management.module.material-general-inventory',
  },
];

const permissionMapper = new Map();

permissionMapper.set(MODULE_ENUM.PERMISSION, [PRIVILEGE_ENUM.UPDATE]);

permissionMapper.set(MODULE_ENUM.AMENITY, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.AMENITY_BOOK, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
  PRIVILEGE_ENUM.VIEW_DASHBOARD,
]);

permissionMapper.set(MODULE_ENUM.BANK_ACCOUNT, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.BANK_TRANSFER_TRANSACTION, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
  PRIVILEGE_ENUM.VIEW_DASHBOARD,
]);

permissionMapper.set(MODULE_ENUM.BLOCK, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.BLOCK_UNIT, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
  PRIVILEGE_ENUM.VIEW_DASHBOARD,
]);

permissionMapper.set(MODULE_ENUM.COMPLAINT, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
  PRIVILEGE_ENUM.VIEW_DASHBOARD,
]);

permissionMapper.set(MODULE_ENUM.COMPLAINT_TYPE, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.DEPARTMENT, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.EVENT, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
  PRIVILEGE_ENUM.VIEW_DASHBOARD,
]);

permissionMapper.set(MODULE_ENUM.FACILITY, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.FACILITY_FORM_CHECKLIST, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.FACILITY_EXECUTE_CHECKLIST, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.FACILITY_MEASURE_FORM, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.FACILITY_MEASURE_FORM_RESULT, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.FACILITY_TYPE, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.FEE, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
  PRIVILEGE_ENUM.VIEW_DASHBOARD,
]);

permissionMapper.set(MODULE_ENUM.FEE_TYPE_CONFIG, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.HANDBOOK, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.HANDBOOK_CATEGORY, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.HEADCOUNT_CONFIG, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.KEY_CARD, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.METER, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.METER_READING, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.NEWS, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.NEWS_GROUP, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.NOTIFICATION_CONFIG, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.PARENT_BANK_ACCOUNT, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.PARKING, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
  PRIVILEGE_ENUM.VIEW_DASHBOARD,
]);

permissionMapper.set(MODULE_ENUM.PAYMENT_GATEWAY_CONFIG, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.PAYMENT_TRANSACTION, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.PHONE_BOOK, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.PHONE_BOOK_CATEGORY, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.PRICE_LIST_CONFIG, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.PRIORITY_LEVEL_CONFIG, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.SERVICE, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.SERVICE_BOOK, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.SUPPLIER, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.TASK, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.TEMPLATE, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.USER, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.VEHICLE_TYPE, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.VIRTUAL_BANK_ACCOUNT, [PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE]);

permissionMapper.set(MODULE_ENUM.VISITOR, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.WAREHOUSE, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.MATERIAL, [PRIVILEGE_ENUM.GET, PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE, PRIVILEGE_ENUM.DELETE]);

permissionMapper.set(MODULE_ENUM.MATERIAL_PURCHASE_REQUEST, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.MATERIAL_PURCHASE_ORDER, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.MATERIAL_RECEIPT, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.MATERIAL_IN_OUT_STOCK, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.MATERIAL_OPEN_CLOSE_PERIOD, [PRIVILEGE_ENUM.CREATE, PRIVILEGE_ENUM.UPDATE]);

permissionMapper.set(MODULE_ENUM.MATERIAL_STOCK_TAKE, [
  PRIVILEGE_ENUM.GET,
  PRIVILEGE_ENUM.CREATE,
  PRIVILEGE_ENUM.UPDATE,
  PRIVILEGE_ENUM.DELETE,
]);

permissionMapper.set(MODULE_ENUM.MATERIAL_STOCK_STATUS, [PRIVILEGE_ENUM.GET]);

permissionMapper.set(MODULE_ENUM.MATERIAL_STOCK_IN_OUT, [PRIVILEGE_ENUM.GET]);

permissionMapper.set(MODULE_ENUM.MATERIAL_GENERAL_INVENTORY, [PRIVILEGE_ENUM.GET]);

export const PERMISSION_MAPPER = permissionMapper;

export enum GROUP_MODULE_ENUM {
  SYSTEM,
  GENERAL,
  COST,
  RENT,
  FACILITY,
  MATERIAL,
  BANK,
  COMPLAIN,
}

export const GROUP_MODULE_TYPES = [
  {
    id: GROUP_MODULE_ENUM.SYSTEM,
    values: [
      MODULE_ENUM.PERMISSION,
      MODULE_ENUM.BANK_ACCOUNT,
      MODULE_ENUM.PRICE_LIST_CONFIG,
      MODULE_ENUM.PRIORITY_LEVEL_CONFIG,
      MODULE_ENUM.TEMPLATE,
      MODULE_ENUM.USER,
      MODULE_ENUM.BLOCK,
      MODULE_ENUM.BLOCK_UNIT,
      MODULE_ENUM.PHONE_BOOK,
      MODULE_ENUM.PHONE_BOOK_CATEGORY,
    ],
    text: 'system.title',
  },
  {
    id: GROUP_MODULE_ENUM.GENERAL,
    values: [
      MODULE_ENUM.AMENITY,
      MODULE_ENUM.AMENITY_BOOK,
      MODULE_ENUM.DEPARTMENT,
      MODULE_ENUM.EVENT,
      MODULE_ENUM.HANDBOOK,
      MODULE_ENUM.HANDBOOK_CATEGORY,
      MODULE_ENUM.KEY_CARD,
      MODULE_ENUM.NEWS,
      MODULE_ENUM.NEWS_GROUP,
      MODULE_ENUM.NOTIFICATION_CONFIG,
      MODULE_ENUM.SERVICE,
      MODULE_ENUM.SERVICE_BOOK,
      MODULE_ENUM.VISITOR,
      MODULE_ENUM.PARKING,
      MODULE_ENUM.VEHICLE_TYPE,
    ],
    text: 'general.title',
  },
  {
    id: GROUP_MODULE_ENUM.COST,
    values: [
      MODULE_ENUM.BANK_TRANSFER_TRANSACTION,
      MODULE_ENUM.FEE,
      MODULE_ENUM.FEE_TYPE_CONFIG,
      MODULE_ENUM.HEADCOUNT_CONFIG,
      MODULE_ENUM.METER,
      MODULE_ENUM.METER_READING,
    ],
    text: 'cost.title',
  },
  {
    id: GROUP_MODULE_ENUM.RENT,
    values: [],
    text: 'rent.title',
  },
  {
    id: GROUP_MODULE_ENUM.FACILITY,
    values: [
      MODULE_ENUM.FACILITY,
      MODULE_ENUM.FACILITY_FORM_CHECKLIST,
      MODULE_ENUM.FACILITY_EXECUTE_CHECKLIST,
      MODULE_ENUM.FACILITY_MEASURE_FORM,
      MODULE_ENUM.FACILITY_MEASURE_FORM_RESULT,
      MODULE_ENUM.FACILITY_TYPE,
      MODULE_ENUM.SUPPLIER,
    ],
    text: 'facility.title',
  },
  {
    id: GROUP_MODULE_ENUM.MATERIAL,
    values: [
      MODULE_ENUM.WAREHOUSE,
      MODULE_ENUM.MATERIAL,
      MODULE_ENUM.MATERIAL_PURCHASE_REQUEST,
      MODULE_ENUM.MATERIAL_PURCHASE_ORDER,
      MODULE_ENUM.MATERIAL_RECEIPT,
      MODULE_ENUM.MATERIAL_IN_OUT_STOCK,
      MODULE_ENUM.MATERIAL_OPEN_CLOSE_PERIOD,
      MODULE_ENUM.MATERIAL_STOCK_TAKE,
      MODULE_ENUM.MATERIAL_STOCK_STATUS,
      MODULE_ENUM.MATERIAL_STOCK_IN_OUT,
      MODULE_ENUM.MATERIAL_GENERAL_INVENTORY,
    ],
    text: 'material.title',
  },
  {
    id: GROUP_MODULE_ENUM.BANK,
    values: [
      MODULE_ENUM.PARENT_BANK_ACCOUNT,
      MODULE_ENUM.PAYMENT_GATEWAY_CONFIG,
      MODULE_ENUM.PAYMENT_TRANSACTION,
      MODULE_ENUM.VIRTUAL_BANK_ACCOUNT,
    ],
    text: 'bank.title',
  },
  {
    id: GROUP_MODULE_ENUM.COMPLAIN,
    values: [MODULE_ENUM.COMPLAINT, MODULE_ENUM.COMPLAINT_TYPE],
    text: 'complain.title',
  },
];
