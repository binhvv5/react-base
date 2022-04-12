/**
 * @ Author: Pham Duc Luu
 * @ Create Time: 2021-11-26 09:19:23
 * @ Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IMaterial } from './material.model';

export interface IMaterialInOutStockDetail {
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
  materialInOutStockHeaderId?: string;
  quantityStockBefore?: number;
  quantityStockAfter?: number;

  // using when adding a new item
  isChanging?: boolean;
  isUpdated?: boolean;

  deletingVouchers?: string;
  initialQuantity?: number;
}

export const defaultValue: Readonly<IMaterialInOutStockDetail> = {
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
  materialInOutStockHeaderId: null,
  quantityStockBefore: 0,
  quantityStockAfter: 0,
  isUpdated: false,
  isChanging: false,
};
