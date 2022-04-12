import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IMaterial } from './material.model';
import { IWarehouse } from './warehouse.model';

export interface IMaterialReceiptDetail {
  id?: string;
  quantity?: number;
  unitPrice?: number;
  baseAmount?: number;
  taxAmount?: number;
  amount?: number;
  remarks?: string;
  material?: IMaterial;
  materialId?: string;
  materialCode?: string;
  materialNameEnglish?: string;
  materialName?: string;
  materialSpec?: string;
  materialUnit?: string;
  warehouse?: IWarehouse;
  warehouseId?: string;
  warehouseName?: string;
  quantityStockBefore?: number;
  quantityStockAfter?: number;
  availableQuantity?: number;
  materialReceiptHeaderId?: string;
  materialPurchaseOrderDetailId?: string;
  outstandingQuantity?: number;
  active?: boolean;

  // For searching on material receipt
  materialPurchaseOrderHeaderCode?: string;
  taxRate?: number;
  isUpdated?: boolean;
  isNew?: boolean;

  deletingVouchers?: string;
  initialQuantity?: number;
}

export const defaultValue: Readonly<IMaterialReceiptDetail> = {
  id: null,
  quantity: 0,
  unitPrice: 0,
  baseAmount: 0,
  taxAmount: null,
  amount: 0,
  remarks: TEXT_EMPTY,
  material: null,
  materialId: TEXT_EMPTY,
  materialCode: TEXT_EMPTY,
  materialNameEnglish: TEXT_EMPTY,
  materialName: TEXT_EMPTY,
  materialSpec: TEXT_EMPTY,
  materialUnit: TEXT_EMPTY,
  warehouse: null,
  warehouseId: null,
  warehouseName: TEXT_EMPTY,
  quantityStockBefore: 0,
  quantityStockAfter: 0,
  availableQuantity: 0,
  materialReceiptHeaderId: null,
  materialPurchaseOrderDetailId: null,
  outstandingQuantity: 0,
  isUpdated: false,
  isNew: false,
};
