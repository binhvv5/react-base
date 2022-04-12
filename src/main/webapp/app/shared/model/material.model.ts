/**
 * @ Author: Pham Duc Luu
 * @ Create Time: 2021-10-28 10:29:19
 * @ Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IMaterialType } from './material.type.model';

export interface IMaterial {
  id?: string;
  code?: string;
  nameEnglish?: string;
  name?: string;
  specification?: string;
  unit?: string;
  containTax?: boolean;
  unitPrice?: number;
  tax?: number;
  materialClass?: IMaterialType;
  materialClassId?: string;
  materialClassName?: string;
  materialCategory?: IMaterialType;
  materialCategoryId?: string;
  materialCategoryName?: string;
  enable?: boolean;

  materialCode?: string;
  materialName?: string;
  materialNameEnglish?: string;
  materialSpec?: string;
  materialUnit?: string;

  // For calculation on processing
  baseAmount?: number;
  taxAmount?: number;
  amount?: number;
}

export const defaultValue: Readonly<IMaterial> = {
  id: TEXT_EMPTY,
  code: TEXT_EMPTY,
  nameEnglish: TEXT_EMPTY,
  name: TEXT_EMPTY,
  specification: TEXT_EMPTY,
  unit: TEXT_EMPTY,
  containTax: true,
  unitPrice: 0,
  tax: null,
  materialClass: null,
  materialClassId: TEXT_EMPTY,
  materialClassName: TEXT_EMPTY,
  materialCategory: null,
  materialCategoryId: TEXT_EMPTY,
  materialCategoryName: TEXT_EMPTY,
  enable: true,
};
