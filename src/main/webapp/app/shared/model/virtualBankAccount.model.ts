import { IParentBankAccount } from './parentBankAccount.model';
import { IBlock } from './block.model';
import { IBlockUnit } from './blockUnit.model';
import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IVirtualBankAccount {
  id?: string;
  accountNo?: string;
  issueDate?: any | null;
  blockUnit?: IBlockUnit;
  block?: IBlock;
  parentBankAccount?: IParentBankAccount;
  balance?: number | null;
}

export const defaultValue: Readonly<IVirtualBankAccount> = {
  id: TEXT_EMPTY,
  accountNo: TEXT_EMPTY,
  issueDate: null,
};
