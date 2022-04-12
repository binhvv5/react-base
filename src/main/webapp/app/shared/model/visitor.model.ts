import { IBlockUnit } from './blockUnit.model';
/**
 * @ Author: cuongnm
 * @ Create Time: 2022-01-06 14:26:50
 * @ Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IVisitor {
  id?: string;
  identityCard?: string;
  fullName?: string;
  phone?: string;
  address?: string;
  gender?: number | null;
  nationality?: string;
  blockUnit?: IBlockUnit;
  blockName?: string;
  blockUnitName?: string;
  blockUnitId?: string;
  blockId?: string;
  birthday?: any | null;
}

export const defaultValue: Readonly<IVisitor> = {
  id: TEXT_EMPTY,
  identityCard: TEXT_EMPTY,
  fullName: TEXT_EMPTY,
  phone: TEXT_EMPTY,
  address: TEXT_EMPTY,
  gender: null,
  nationality: TEXT_EMPTY,
};
