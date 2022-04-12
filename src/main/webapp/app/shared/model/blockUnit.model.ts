/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-03 16:59:02
 * @Project: InfoCity
 */

import { IBlock } from './block.model';
import { IMeterAssignment } from './meterAssignment.model';
import { IFeeInfo } from 'app/shared/model/feeInfo.model';
import { IUser } from 'app/shared/model/user.model';
import { IHeadcountConfig } from 'app/shared/model/headcount.model';

export interface IBlockUnit {
  id?: string;
  name?: string;
  blockId?: string;
  blockName?: string;
  floor?: number;
  square?: number;
  numberOfRoom?: number;
  type?: number;
  level?: number;
  block?: IBlock | null;
  freeFromDate?: any;
  freeToDate?: any;

  // external fields
  meterIds?: string[];
  meterAssignments?: IMeterAssignment[];
  feeInfos?: IFeeInfo[];
  headcountConfigs?: IHeadcountConfig[];
  residents?: IUser[];
}

export const defaultValue: Readonly<IBlockUnit> = {
  id: '',
  name: '',
  blockId: '',
  floor: null,
  square: 0,
  numberOfRoom: 0,
  type: null,
  level: null,
  block: null,
  freeFromDate: '',
  freeToDate: '',
  meterAssignments: [],
  meterIds: [],
  residents: [],

  // external fields
  feeInfos: [],
};
