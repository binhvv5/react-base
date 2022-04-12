import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IConfigParkingPrice, IConfigPrice } from 'app/shared/model/priceListConfig.model';
import { IParam } from 'app/shared/model/dto.model';
import { IParking } from 'app/shared/model/parking.model';
import { IFeeDebt } from 'app/shared/model/feeDebt.model';
import { IUser } from 'app/shared/model/user.model';
import { IBankTransferTransaction } from 'app/shared/model/bankTransferTransaction.model';
import { IBlock } from 'app/shared/model/block.model';
import { IBlockUnit } from 'app/shared/model/blockUnit.model';
import { IVehicleType } from 'app/shared/model/vehicleType.model';

export interface IFeeInfo {
  id?: string;
  monthYear?: string;
  fromDate?: string;
  toDate?: string;
  amount?: number;
  amountPaid?: number;
  paymentStatus?: number;
  type?: number;
  feeType?: number;
  unitPrice?: number;
  configPrice?: IConfigPrice;

  // management fee
  square?: number;

  // trash fee
  chargeType?: number;
  numberOfPeople?: number;

  // elect water fee
  headcountApplyTime?: string;
  amountDetailByLevel?: IConfigPrice[];
  configLevel?: string;
  rangeMeter?: string;
  meterValueUsed?: number;
  children?: IFeeInfo[];

  // parking fee
  parking?: IParking;

  // fee aggregation
  feeDebts?: IFeeDebt[];

  // external fields
  uniqueId?: number;
  blockUnit?: IBlockUnit;
  status?: number;
  resident?: IUser;
  residents?: IUser[];
  amountReceived?: number;
  currentDebt?: number;
  isParent?: boolean;
  parentId?: string | number;
  parentFromTable?: IFeeInfo;
  disabled?: boolean;
  containTax?: boolean;
  direction?: number;
  tax?: number;
  bankTransfer?: IBankTransferTransaction;
}

export const defaultFeeInfo: Readonly<IFeeInfo> = {
  id: null,
  monthYear: TEXT_EMPTY,
  fromDate: TEXT_EMPTY,
  toDate: TEXT_EMPTY,
  amount: 0,
  amountPaid: 0,
  direction: 1,

  // management fee
  square: null,

  // trash fee
  chargeType: null,
  numberOfPeople: null,

  // fee aggregation
  feeDebts: [],

  // external fields
  uniqueId: 0,
  children: [],
  status: 1,
};

export interface requestSaveFee {
  feeType: number;
  monthYear: string;
  blockUnitIds: string[];

  // external fields
  requestGetList?: IParam;
  mapBlockUnitIdGrantResident?: any;
}
