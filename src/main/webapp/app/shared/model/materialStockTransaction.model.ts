/**
 * @ Author: Pham Duc Luu
 * @ Create Time: 2021-11-26 13:29:39
 * @ Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IMaterial } from './material.model';
import { IWarehouse } from './warehouse.model';

export interface IMaterialStockTransaction {
  id?: string;
  material?: IMaterial;
  materialId?: string;
  materialCode?: string;
  materialNameEnglish?: string;
  materialName?: string;
  materialSpec?: string;
  materialUnit?: string;
  quantity?: number;

  materialClassName?: string;
  materialCategoryName?: string;
  warehouse?: IWarehouse;
  warehouseId?: string;
  warehouseName?: string;
  quantityBeforeStock?: number;
  quantityIn?: number;
  quantityOut?: number;
  quantityAfterStock?: number;
  quantitySystem?: number;
  quantityActual?: number;
  quantityDiff?: number;
}

export const defaultValue: Readonly<IMaterialStockTransaction> = {
  id: null,
  material: null,
  materialId: null,
  materialCode: TEXT_EMPTY,
  materialNameEnglish: TEXT_EMPTY,
  materialName: TEXT_EMPTY,
  materialSpec: TEXT_EMPTY,
  materialUnit: TEXT_EMPTY,
  quantity: 0,
  quantitySystem: 0,
  quantityActual: 0,
  quantityDiff: 0,
};
