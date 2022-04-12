import { TEXT_EMPTY } from 'app/config/constant/constants';
import { PAYMENT_STATUS_ENUM } from 'app/config/constant/enum';
import {defaultFeeDebt, IFeeDebt} from 'app/shared/model/feeDebt.model';
import { IBlock } from 'app/shared/model/block.model';
import { IBlockUnit } from 'app/shared/model/blockUnit.model';
import { IUser } from 'app/shared/model/user.model';
import {IFeeInfo} from "app/shared/model/feeInfo.model";
import {convertDateToDDMMYYYY, convertToMonthYear} from "app/shared/util/date-utils";

export interface IFeeAggregation {
  id?: string;
  monthYear?: string;
  fromDate?: string;
  toDate?: string;
  amount?: number;
  amountPaid?: number;
  feeType?: number;
  paymentStatus?: number;
  type?: number;
  direction?: number;

  // external fields
  feeDebt?: IFeeDebt;
  uniqueId?: number;
  block?: IBlock;
  blockUnit?: IBlockUnit;
  residentName?: string;
  resident?: IUser;
  children?: IFeeAggregation[];
  adjustList?: IFeeInfo[];
  isParent?: boolean;
  showName?: boolean;
  showStatus?: boolean;
}

export const defaultFeeAggregation: IFeeAggregation = {
  id: TEXT_EMPTY,
  monthYear: convertToMonthYear(new Date()),
  fromDate: convertDateToDDMMYYYY(new Date()),
  toDate: convertDateToDDMMYYYY(new Date()),
  amount: 0,
  paymentStatus: PAYMENT_STATUS_ENUM.UN_PAID,
  direction: 1,

  // external fields
  uniqueId: 0,
  residentName: TEXT_EMPTY,
  children: [],
  feeDebt: defaultFeeDebt,
};
