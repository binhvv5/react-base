/**
 * @ Author: Pham Duc Luu
 * @ Create Time: 2021-11-03 13:06:36
 * @ Project: InfoCity
 */

import { IMaterial } from './material.model';
import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IMaterialPurchaseRequestHeader } from './materialPurchaseRequestHeader.model';

export interface IMaterialPurchaseRequestDetail {
  id?: string;
  orderNo?: number | null;
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

  // For searching on Order
  materialPurchaseRequestHeaderId?: string;
  materialPurchaseRequestHeader?: IMaterialPurchaseRequestHeader;
  materialPurchaseRequestHeaderCode?: string;
  requestedDate?: string;
  requestedBy?: string;
  departmentName?: string;
  isUpdated?: boolean;
  selected?: boolean;
  isParent?: boolean;
  children?: IMaterialPurchaseRequestDetail[];
  uniqueId?: string;

  // for getting
  pRHeaderCode?: string;
}

export const defaultValue: Readonly<IMaterialPurchaseRequestDetail> = {
  id: TEXT_EMPTY,
  orderNo: null,
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
  materialPurchaseRequestHeaderId: TEXT_EMPTY,
  materialPurchaseRequestHeader: null,
  materialPurchaseRequestHeaderCode: TEXT_EMPTY,
  isUpdated: false,
  isParent: false,
};
