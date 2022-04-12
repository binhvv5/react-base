import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IUser } from 'app/shared/model/user.model';
import { IBankTransferTransaction, IPaymentGatewayTransaction } from 'app/shared/model/bankTransferTransaction.model';

export interface IPaymentTransaction {
  id?: string;
  feeType?: number;
  method?: number;
  amount?: number;
  direction?: number;
  date?: string;
  payerFullName?: string;
  address?: string;
  addressEnglish?: string;
  remarks?: string;
  remarksEnglish?: string;

  // external fields
  residentId?: string;
  resident?: IUser;
  bankTransferTransaction?: IBankTransferTransaction;
  paymentGatewayTransaction?: IPaymentGatewayTransaction;
}

export const defaultPaymentTransaction: IPaymentTransaction = {
  id: TEXT_EMPTY,
  feeType: 0,
  method: 0,
  amount: 0,
  direction: 0,
  date: TEXT_EMPTY,
  payerFullName: TEXT_EMPTY,
  address: TEXT_EMPTY,
  addressEnglish: TEXT_EMPTY,
  remarks: TEXT_EMPTY,
  remarksEnglish: TEXT_EMPTY,
};
