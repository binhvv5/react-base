/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-20 23:32:09
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IFacilityChecklistStep {
  id?: string;
  orderNo?: number | null;
  name?: string;
  activity?: string;
  note?: string;
  facilityFormChecklistId?: string;
}

export const defaultValue: Readonly<IFacilityChecklistStep> = {
  id: TEXT_EMPTY,
  orderNo: null,
  name: TEXT_EMPTY,
  activity: TEXT_EMPTY,
  note: TEXT_EMPTY,
  facilityFormChecklistId: TEXT_EMPTY,
};
