/**
 * @ Author: Pham Duc Luu
 * @ Create Time: 2022-01-05 14:51:01
 * @ Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IMaterial } from './material.model';
import { IWarehouse } from './warehouse.model';

export interface IMaterialStockTakingDetail {
  id?: string;
  quantitySystem?: number;
  quantityActual?: number;
  quantityDiff?: number;
  material?: IMaterial;
  materialId?: string;
  materialCode?: string;
  materialName?: string;
  materialNameEnglish?: string;
  materialSpec?: string;
  materialUnit?: string;
  warehouse?: IWarehouse;
  warehouseId?: string;
  warehouseName?: string;
  remarks?: string;

  isUpdated?: boolean;
}

export const defaultValue: Readonly<IMaterialStockTakingDetail> = {
  id: null,
  quantitySystem: 0,
  quantityActual: 0,
  quantityDiff: 0,
  material: null,
  materialId: null,
  materialCode: TEXT_EMPTY,
  materialName: TEXT_EMPTY,
  materialNameEnglish: TEXT_EMPTY,
  materialSpec: TEXT_EMPTY,
  materialUnit: TEXT_EMPTY,
  warehouse: null,
  warehouseId: null,
  warehouseName: TEXT_EMPTY,
  remarks: TEXT_EMPTY,

  isUpdated: false,
};
