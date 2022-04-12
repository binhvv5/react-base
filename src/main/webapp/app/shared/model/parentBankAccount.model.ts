import { TEXT_EMPTY } from './../../config/constant/constants';
import { IBank } from './bank.model';

export interface IParentBankAccount {
  bank: IBank;
  bankId: string;
  id?: string;
  serviceType?: number;
  bankCustomerCode?: string;
  bankAccount?: string;
  accountName?: string;
  vanCode?: string;
}

export const defaultValue: Readonly<IParentBankAccount> = {
  id: TEXT_EMPTY,
  serviceType: null,
  bankCustomerCode: TEXT_EMPTY,
  bankAccount: TEXT_EMPTY,
  accountName: TEXT_EMPTY,
  vanCode: TEXT_EMPTY,
  bank: null,
  bankId: TEXT_EMPTY,
};
