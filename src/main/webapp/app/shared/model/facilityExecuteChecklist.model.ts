/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-23 14:22:11
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IFacilityChecklistStepResult } from './facilityChecklistStepResult.model';
import { IFacilityFormChecklist } from './facilityFormChecklist.model';
import { IUser } from './user.model';

export interface IFacilityExecuteChecklist {
  id?: string;
  code?: string;
  facilityFormChecklist?: IFacilityFormChecklist;
  checkDate?: any | null;
  staffInChargeId?: string;
  request?: string;
  area?: string;
  facilityChecklistStepResults?: IFacilityChecklistStepResult[];

  title?: string;
  facilityName?: string;
  checkCycle?: number | null;
  pass?: number | null;
  improved?: number | null;
  failed?: number | null;
  notYet?: number | null;
  facilityFormChecklistId?: string;
  staffInCharge?: IUser | null;
}

export const defaultValue: Readonly<IFacilityExecuteChecklist> = {
  id: TEXT_EMPTY,
  code: TEXT_EMPTY,
  facilityFormChecklist: null,
  checkDate: null,
  staffInChargeId: TEXT_EMPTY,
  request: TEXT_EMPTY,
  area: TEXT_EMPTY,
  facilityChecklistStepResults: [],

  title: TEXT_EMPTY,
  facilityName: TEXT_EMPTY,
  checkCycle: null,
  pass: 0,
  improved: 0,
  failed: 0,
  notYet: 0,
  facilityFormChecklistId: TEXT_EMPTY,
  staffInCharge: null,
};
