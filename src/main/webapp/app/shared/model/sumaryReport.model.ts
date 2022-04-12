import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface ISumaryReport {
  id?: string;
  date?: any;
  parentBankAccountId?: string;
  totalTransaction?: number;
  totalAmount?: number;
  parentAccountName?: string;
}

export const defaultValue: Readonly<ISumaryReport> = {
  date: null,
  parentBankAccountId: TEXT_EMPTY,
  totalTransaction: 0,
  totalAmount: 0,
  parentAccountName: TEXT_EMPTY,
};
