/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-08-25 21:59:33
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IBlock } from './block.model';
import { IBlockUnit } from './blockUnit.model';
import { IDepartment } from './department.model';

export interface IUser {
  id?: string;
  activated?: boolean;
  username?: string;
  fullName?: string;
  phone?: string;
  email?: string;
  birthday?: any | null;
  gender?: number | null;
  avatar?: string;
  role?: string;
  startDate?: any | null;
  endDate?: any | null;
  receivingDate?: any | null;
  deliveryDate?: any | null;
  password?: string;
  identityCard?: string;
  type?: string;
  language?: string;
  position?: string;
  department?: IDepartment | null;
  useMobileApp?: boolean;
  chatWithResident?: boolean;
  relationshipWithHost?: string;
  permanentAddress?: string;
  siteAssignments?: any[];
  permissions?: Map<number, number>;

  // for resident
  apartmentType?: number | null;
  blockUnit?: IBlockUnit | null;
  block?: IBlock | null;

  // for logic
  departmentId?: string;
  siteIds?: string[];
  blockUnitName?: string;
  blockName?: string;
  blockUnitId?: string;
  blockId?: string;
}

export const defaultValue: Readonly<IUser> = {
  id: TEXT_EMPTY,
  activated: false,
  username: TEXT_EMPTY,
  relationshipWithHost: TEXT_EMPTY,
  permanentAddress: TEXT_EMPTY,
  fullName: TEXT_EMPTY,
  phone: TEXT_EMPTY,
  email: TEXT_EMPTY,
  birthday: null,
  gender: null,
  role: TEXT_EMPTY,
  startDate: null,
  endDate: null,
  receivingDate: null,
  deliveryDate: null,
  password: TEXT_EMPTY,
  type: TEXT_EMPTY,
  language: TEXT_EMPTY,
  position: TEXT_EMPTY,
  identityCard: TEXT_EMPTY,
  department: null,
  useMobileApp: true,
  chatWithResident: true,
  siteAssignments: [],
  avatar: null,

  // for resident
  apartmentType: null,
  blockUnit: null,
  block: null,

  // for logic
  departmentId: TEXT_EMPTY,
  siteIds: [],
  blockUnitName: TEXT_EMPTY,
  blockName: TEXT_EMPTY,
  blockUnitId: TEXT_EMPTY,
  blockId: TEXT_EMPTY,
};
