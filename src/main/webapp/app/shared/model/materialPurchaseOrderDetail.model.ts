/**
 * @ Author: Pham Duc Luu
 * @ Create Time: 2021-11-09 09:16:51
 * @ Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IMaterial } from './material.model';
import { IMaterialPurchaseOrderHeader } from './materialPurchaseOrderHeader.model';

export interface IMaterialPurchaseOrderDetail {
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
  materialPurchaseOrderHeaderId?: string;
  materialPurchaseRequestDetailId?: string;
  isUpdated?: boolean;
  status?: number;

  // For searching on material purchase order
  materialPurchaseRequestHeaderCode?: string;

  // For searching on material receipt
  materialPurchaseOrderHeader?: IMaterialPurchaseOrderHeader;
  materialPurchaseOrderHeaderCode?: string;
  supplierName?: string;
  orderDate?: any;
  fulfilledQuantity?: number;
  outstandingQuantity?: number;
  isParent?: boolean;
  children?: IMaterialPurchaseOrderDetail[];
  uniqueId?: string;

  // for getting
  pOHeaderCode?: string;
}

export const defaultValue: Readonly<IMaterialPurchaseOrderDetail> = {
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
  materialPurchaseOrderHeaderId: null,
  materialPurchaseOrderHeader: null,
  materialPurchaseOrderHeaderCode: TEXT_EMPTY,
  materialPurchaseRequestDetailId: null,
  fulfilledQuantity: 0,
  outstandingQuantity: 0,
  isUpdated: false,
  isParent: false,
};
