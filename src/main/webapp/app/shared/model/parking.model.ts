/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-04 22:18:46
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IKeyCard } from './keyCard.model';
import { IUser } from './user.model';
import { IPriceListConfig } from 'app/shared/model/priceListConfig.model';
import { IVehicleType } from 'app/shared/model/vehicleType.model';

export interface IParking {
  id: string;
  resident: IUser | null;
  fromDate: Date | null;
  toDate: Date | null;
  phone: string;
  numberPlate: string;
  producer: string;
  slot: string;
  status: number;
  note: string;
  keyCard: IKeyCard | null;
  vehicleType?: IVehicleType;
}

export const defaultValue: Readonly<IParking> = {
  id: TEXT_EMPTY,
  resident: null,
  fromDate: null,
  toDate: null,
  phone: TEXT_EMPTY,
  numberPlate: TEXT_EMPTY,
  producer: TEXT_EMPTY,
  slot: TEXT_EMPTY,
  status: null,
  note: TEXT_EMPTY,
  keyCard: null,
};

export interface IParkingCustomize {
  id?: string;
  blockUnitName?: string;
  phone?: string;
  blockName?: string;
  blockUnitId?: string;
  blockId?: string;
  fromDate?: any | null;
  toDate?: any | null;
  residentName?: string;
  residentId?: string;
  vehicleTypeId?: string;
  numberPlate?: string;
  producer?: string;
  slot?: string;
  note?: string;
  status?: number;
  cardStatus?: boolean;
  keyCardName?: string;
  keyCardCode?: string;
  keyCardStatus?: number;
  keyCardId?: string;
  parkingFeeConfigId?: string;
  priceListConfigId?: string;
  resident?: IUser;
  keyCard?: any;
  vehicleType?: any;
}
