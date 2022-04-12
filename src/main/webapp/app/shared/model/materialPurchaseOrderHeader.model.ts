/**
 * @ Author: Pham Duc Luu
 * @ Create Time: 2021-11-09 09:16:16
 * @ Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IMaterialPurchaseOrderDetail } from './materialPurchaseOrderDetail.model';
import { ISupplier } from './supplier.model';

export interface IMaterialPurchaseOrderHeader {
  id?: string;
  code?: string;
  orderDate?: any;
  estimatedDeliveryDate?: any;
  supplier?: ISupplier;
  supplierId?: string;
  supplierName?: string;
  content?: string;
  totalBaseAmount?: number;
  totalTaxAmount?: number;
  taxAmount?: number;
  totalAmount?: number;
  materialPurchaseOrderDetails: IMaterialPurchaseOrderDetail[];
  status?: number;
}

export const defaultValue: Readonly<IMaterialPurchaseOrderHeader> = {
  id: TEXT_EMPTY,
  code: TEXT_EMPTY,
  orderDate: null,
  estimatedDeliveryDate: null,
  supplier: null,
  supplierId: TEXT_EMPTY,
  supplierName: TEXT_EMPTY,
  content: TEXT_EMPTY,
  totalBaseAmount: 0,
  totalTaxAmount: 0,
  taxAmount: 0,
  totalAmount: 0,
  materialPurchaseOrderDetails: [],
  status: 1,
};
