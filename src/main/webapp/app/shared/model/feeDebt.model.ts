import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IFeeInfo } from 'app/shared/model/feeInfo.model';
import { IUser } from 'app/shared/model/user.model';
import { IPaymentTransaction } from 'app/shared/model/paymentTransaction.model';

export interface IFeeDebt {
  id?: string;
  amount?: number; // Số phát sinh tác động vào phí
  amountCredit?: number; // Tiền dư sau giao dịch
  amountDedit?: number; // Tiền còn nợ sau giao dịch
  amountForFee?: number; // Số tiền giảm trừ hoặc tăng cho phí
  direction?: number; // Chiều phát sinh giảm hoặc tăng (1, -1)
  totalDebt?: number; // Số nợ hiện tại
  preTotalDebt?: number; // Số nợ trước giao dịch
  createdDate?: string;
  createdBy?: IUser;
  feeType?: number;
  status?: number;
  feeInfo?: IFeeInfo;
  paymentTransaction?: IPaymentTransaction;

  // external field
  uniqueId?: number;
  isParent?: boolean;
  children?: IFeeDebt[];
  monthYear?: string;
}

export const defaultFeeDebt: Readonly<IFeeDebt> = {
  id: TEXT_EMPTY,
  amount: 0,
  direction: 1,
  totalDebt: 0,
  preTotalDebt: 0,
};
