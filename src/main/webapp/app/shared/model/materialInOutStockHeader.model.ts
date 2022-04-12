/**
 * @ Author: Pham Duc Luu
 * @ Create Time: 2021-11-26 09:18:49
 * @ Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IMaterialInOutStockDetail } from './materialInOutStockDetail.model';
import { IUser } from './user.model';
import { IWarehouse } from './warehouse.model';

export interface IMaterialInOutStockHeader {
  id?: string;
  code?: string;
  voucherDate?: any;
  voucherType?: number;
  subjectType?: number;
  processedBy?: IUser;
  processedById?: string;
  processedByName?: string;
  fromWarehouse?: IWarehouse;
  fromWarehouseId?: string;
  fromWarehouseName?: string;
  toWarehouse?: IWarehouse;
  toWarehouseId?: string;
  toWarehouseName?: string;
  content?: string;
  status?: string;
  totalBaseAmount?: number;
  totalTaxAmount?: number;
  totalAmount?: number;
  materialInOutStockDetails: IMaterialInOutStockDetail[];

  deletingVouchers?: string;
}

export const defaultValue: Readonly<IMaterialInOutStockHeader> = {
  id: null,
  code: TEXT_EMPTY,
  voucherDate: null,
  voucherType: 2,
  subjectType: 1,
  processedBy: null,
  processedById: TEXT_EMPTY,
  processedByName: TEXT_EMPTY,
  fromWarehouse: null,
  fromWarehouseId: null,
  fromWarehouseName: TEXT_EMPTY,
  toWarehouse: null,
  toWarehouseId: null,
  toWarehouseName: TEXT_EMPTY,
  content: TEXT_EMPTY,
  status: TEXT_EMPTY,
  totalBaseAmount: 0,
  totalTaxAmount: 0,
  totalAmount: 0,
  materialInOutStockDetails: [],
};
