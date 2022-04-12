import { TEXT_EMPTY } from 'app/config/constant/constants';
import { PRICE_LIST_CONFIG_TYPE } from 'app/config/constant/enum';
import { IVehicleType } from 'app/shared/model/vehicleType.model';

export interface IFeeTypeConfig {
  id?: string;
  feeType?: number | null;
  dueDate?: number | null;
  monthGap?: number | null;
  billIssueMonth?: number | null;
  calculateMethod?: number | null;
  vehicleTypeId?: string;
  vehicleType?: IVehicleType;
  rule?: IRuleParkingFeeConfig;
}

export const defaultValue: Readonly<IFeeTypeConfig> = {
  id: TEXT_EMPTY,
  feeType: PRICE_LIST_CONFIG_TYPE.ELECTRIC,
  dueDate: null,
  monthGap: null,
  billIssueMonth: null,
  calculateMethod: null,
};

export interface IRuleParkingFeeConfig {
  checkin: any;
  checkout: any;
  combineInOut: any;
}
