import { IVirtualBankAccount } from 'app/shared/model/virtualBankAccount.model';
import { IBlock } from 'app/shared/model/block.model';
import { IBlockUnit } from 'app/shared/model/blockUnit.model';
import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IBankTransferTransaction {
  id?: string;
  type?: number;
  amount?: number;
  transactionNo?: string;
  accountNo?: string | null;
  accountName?: string | null;
  remarks?: string;
  remarksEnglish?: string;
  date?: string;
  time?: string;
  mapped?: number;
  enable?: number;

  // external fields
  block?: IBlock;
  blockUnit?: IBlockUnit;
  amountRemaining?: number;
  virtualBankAccount?: IVirtualBankAccount;
  virtualBankAccountName?: string;
  blockName?: string;
  blockUnitName?: string;
}

export const defaultBankTransferTransaction: IBankTransferTransaction = {
  id: TEXT_EMPTY,
  type: 0,
  amount: 0,
  date: TEXT_EMPTY,
  time: TEXT_EMPTY,
  remarks: TEXT_EMPTY,
  remarksEnglish: TEXT_EMPTY,
  transactionNo: TEXT_EMPTY,
  accountNo: TEXT_EMPTY,
  accountName: TEXT_EMPTY,
};

export interface IPaymentGatewayTransaction {
  id?: string;
  partner?: number;
  partnerTransactionId?: string;
  transactionStatus?: number;
  createdDate?: string;
}
