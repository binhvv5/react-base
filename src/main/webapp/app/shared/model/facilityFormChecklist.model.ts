/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-20 23:34:52
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IFacility } from './facility.model';
import { IFacilityChecklistStep } from './facilityChecklistStep.model';

export interface IFacilityFormChecklist {
  id?: string;
  title?: string;
  facilityId?: string;
  facilityName?: string;
  facility?: IFacility;
  checkCycle?: number | null;
  note?: string;
  facilityChecklistSteps: IFacilityChecklistStep[];
}

export const defaultValue: Readonly<IFacilityFormChecklist> = {
  id: TEXT_EMPTY,
  title: TEXT_EMPTY,
  facilityId: TEXT_EMPTY,
  facility: null,
  facilityName: TEXT_EMPTY,
  checkCycle: null,
  note: TEXT_EMPTY,
  facilityChecklistSteps: [],
};
