/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-23 14:29:14
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IFacilityChecklistStep } from './facilityChecklistStep.model';

export interface IFacilityChecklistStepResult {
  id?: string;
  measureValue?: string;
  result?: number;
  note?: string;
  facilityChecklistStep?: IFacilityChecklistStep;
  facilityChecklistStepId?: string;
  stepOrderNo?: number | null;
  stepName?: string;
  stepActivity?: string;
}

export const defaultValue: Readonly<IFacilityChecklistStepResult> = {
  id: TEXT_EMPTY,
  measureValue: TEXT_EMPTY,
  result: null,
  note: TEXT_EMPTY,
  facilityChecklistStep: null,
  facilityChecklistStepId: TEXT_EMPTY,
  stepOrderNo: null,
  stepName: TEXT_EMPTY,
  stepActivity: TEXT_EMPTY,
};
