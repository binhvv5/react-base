/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-26 13:39:26
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IFacilityMeasureItemConfig } from './facilityMeasureItemConfig.model';
import { IShiftInfo } from './shiftInfo.model';

export interface IFacilityMeasureForm {
  id?: string;
  title?: string;
  no?: string;
  description?: string;
  startDate?: any | null;
  endDate?: any | null;
  shiftsInfo?: IShiftInfo[];
  facilityMeasureItemConfigs?: IFacilityMeasureItemConfig[];
  frequencyType?: number | null;
  requireShift?: boolean;
}

export const defaultValue: Readonly<IFacilityMeasureForm> = {
  id: TEXT_EMPTY,
  title: TEXT_EMPTY,
  no: TEXT_EMPTY,
  description: TEXT_EMPTY,
  startDate: null,
  endDate: null,
  shiftsInfo: [],
  facilityMeasureItemConfigs: [],
  frequencyType: null,
  requireShift: false,
};
