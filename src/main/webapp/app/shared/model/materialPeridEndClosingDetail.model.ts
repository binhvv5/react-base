/**
 * @ Author: Pham Duc Luu
 * @ Create Time: 2021-12-28 13:28:53
 * @ Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IMaterial } from './material.model';

export interface IMaterialPeriodEndClosingDetail {
  id?: string;
  month?: string;
  material?: IMaterial;
  materialId?: string;
  materialCode?: string;
  materialName?: string;
  materialUnit?: string;
  materialClassName?: string;
  materialCategoryName?: string;
  quantityStartPeriod?: number;
  totalAmountStartPeriod?: number;
  priceStartPeriod?: number;
  totalAmountIn?: number;
  priceIn?: number;
  quantityInFromPI?: number;
  quantityInFromIO?: number;
  totalAmountOut?: number;
  priceOut?: number;
  quantityOutUsage?: number;
  quantityOutOthers?: number;
  quantityEndPeriod?: number;
  totalAmountEndPeriod?: number;
  priceEndPeriod?: number;

  totalQuantityIn?: number;
  totalQuantityOut?: number;
}

export const defaultValue: Readonly<IMaterialPeriodEndClosingDetail> = {
  id: null,
  month: TEXT_EMPTY,
  material: null,
  materialId: TEXT_EMPTY,
  materialCode: TEXT_EMPTY,
  materialName: TEXT_EMPTY,
  materialUnit: TEXT_EMPTY,
  materialClassName: TEXT_EMPTY,
  materialCategoryName: TEXT_EMPTY,
};
