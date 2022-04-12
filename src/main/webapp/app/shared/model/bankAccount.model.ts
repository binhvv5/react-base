/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-03 00:25:14
 * @Project: InfoCity
 */

export interface IBankAccount {
  id?: string;
  accountNo?: string;
  accountName?: string;
  branchName?: string;
  bankCode?: string;
  bankName?: string;
  accountingSerialNumber?: string;
}

export const defaultValue: Readonly<IBankAccount> = {
  id: '',
  accountNo: '',
  accountName: '',
  branchName: '',
  bankCode: '',
  bankName: '',
  accountingSerialNumber: '',
};
