import { TEXT_EMPTY } from 'app/config/constant/constants';
import { BLOCK_UNIT_ENUM, BLOCK_UNIT_LEVEL_ENUM, CHARGE_UNIT_TYPE, PRICE_LIST_CONFIG_TYPE } from 'app/config/constant/enum';
import { IVehicleType } from 'app/shared/model/vehicleType.model';

export interface IConfigPrice {
  unitPrice?: number;

  // elect, water
  amount?: number;
  minValueApply?: number;
  maxValueApply?: any;
  meterValueUsed?: number;

  uniqueId?: number;
}

export const defaultConfigLevel: Readonly<IConfigPrice> = {
  minValueApply: 1,
  maxValueApply: null,
  unitPrice: 0,
  meterValueUsed: 0,
};

export interface IConfigParkingPrice {
  vehicleTypeName?: string;
  priceByDate?: number;
  priceByMonth?: number;
  priceByQuarter?: number;
  uniqueId?: number;
}

export const defaultConfigParkingPrice: Readonly<IConfigParkingPrice> = {
  priceByDate: 0,
  priceByMonth: 0,
  priceByQuarter: 0,
  uniqueId: 0,
};

export interface IPriceListConfig {
  id?: string;
  feeType?: number;
  fromMonth?: string;
  toMonth?: string;
  blockUnitType?: number;
  blockUnitLevel?: number;
  chargeUnitType?: number;
  containTax?: boolean;
  tax?: number;
  config?: any;
  vehicleTypeId?: string;
  vehicleType?: IVehicleType;
  unitPrice?: number;
  note?: string;

  // external
  uniqueId?: number;
  children?: IPriceListConfig[];
  isParent?: boolean;
  isUsing?: boolean;
}

export const defaultPriceListConfig: IPriceListConfig = {
  id: TEXT_EMPTY,
  feeType: PRICE_LIST_CONFIG_TYPE.ELECTRIC,
  fromMonth: TEXT_EMPTY,
  toMonth: TEXT_EMPTY,
  blockUnitType: BLOCK_UNIT_ENUM.APARTMENT,
  blockUnitLevel: BLOCK_UNIT_LEVEL_ENUM.ONE,
  chargeUnitType: CHARGE_UNIT_TYPE.BY_BLOCK_UNIT,
  containTax: false,
  tax: 0,
  // parkingPrice: defaultConfigParkingPrice,
  // vehicleTypeName: TEXT_EMPTY,
  unitPrice: 0,
  note: TEXT_EMPTY,
};
