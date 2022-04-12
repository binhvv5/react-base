/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-30 23:49:20
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IFacilityMeasureForm } from './facilityMeasureForm.model';
import { IShiftInfo } from './shiftInfo.model';

export interface IFacilityMeasureResultTable {
  id?: string;
  facilityMeasureForm?: IFacilityMeasureForm;
  facilityMeasureFormId?: string;
  shiftInfo?: IShiftInfo;
  shiftName?: string;
  time?: any | null;
  result?: any | null;
  note?: string;
  formTitle?: string;

  endTime?: any | null;
  startTime?: any | null;
}

export const defaultValue: Readonly<IFacilityMeasureResultTable> = {
  id: TEXT_EMPTY,
  facilityMeasureForm: null,
  facilityMeasureFormId: TEXT_EMPTY,
  shiftInfo: null,
  shiftName: TEXT_EMPTY,
  time: null,
  result: null,
  note: TEXT_EMPTY,
  formTitle: TEXT_EMPTY,
};
