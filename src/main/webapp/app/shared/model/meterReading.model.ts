import { TEXT_EMPTY } from 'app/config/constant/constants';
import { READING_STATUS_TYPES } from 'app/config/constant/enum';
import { IParam } from 'app/shared/model/dto.model';
import { IBlockUnit } from './blockUnit.model';
import { IUser } from './user.model';

export interface IMeterReading {
  id?: string;
  monthYear?: string;
  lastReadDate?: string;
  readDate?: string;
  lastMeterValue?: number;
  meterValue?: number;
  meterValueUsed?: number;
  status?: number;
  isNewestReading?: boolean;

  // external fields
  meterId?: string;
  blockUnit?: IBlockUnit;
  resident?: IUser;
  code?: string;
  type?: number;
  maxValue?: number;
  isParent?: boolean;
  children?: any[];
  uniqueId?: string | number;
  params?: IParam;
}

export const defaultMeterReading: Readonly<IMeterReading> = {
  id: TEXT_EMPTY,
  monthYear: TEXT_EMPTY,
  lastReadDate: TEXT_EMPTY,
  readDate: TEXT_EMPTY,
  lastMeterValue: 0,
  meterValue: 0,
  meterValueUsed: 0,
  status: 0,
  isNewestReading: false,

  // external fields
  code: TEXT_EMPTY,
  type: 0,
  maxValue: 0,
};
