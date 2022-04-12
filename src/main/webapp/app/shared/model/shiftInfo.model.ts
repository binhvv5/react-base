import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IShiftInfo {
  id?: string; // fake id
  name?: string;
  endTime?: any | null;
  orderNo?: number | null;
  startTime?: any | null;
  fillOutTime?: any | null;
  fillOutTimeType?: number | null;
}

export const defaultValue: Readonly<IShiftInfo> = {
  id: TEXT_EMPTY,
  name: TEXT_EMPTY,
  endTime: null,
  orderNo: null,
  startTime: null,
  fillOutTime: null,
  fillOutTimeType: null,
};
