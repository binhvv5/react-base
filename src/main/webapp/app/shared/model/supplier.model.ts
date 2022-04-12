/**
 * @ Author: Pham Duc Luu
 * @ Create Time: 2021-10-27 09:59:12
 * @ Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface ISupplier {
  id?: string;
  code?: string;
  name?: string;
  taxCode?: string;
  address?: string;
  country?: string;
  province?: string;
  bankName?: string;
  branchName?: string;
  accountNo?: string;
  accountHolder?: string;
  contactName?: string;
  location?: string;
  phone?: string;
  email?: string;
  fax?: string;
  note?: string;
}

export const defaultValue: Readonly<ISupplier> = {
  id: TEXT_EMPTY,
  code: TEXT_EMPTY,
  name: TEXT_EMPTY,
  taxCode: TEXT_EMPTY,
  address: TEXT_EMPTY,
  country: TEXT_EMPTY,
  province: TEXT_EMPTY,
  bankName: TEXT_EMPTY,
  branchName: TEXT_EMPTY,
  accountNo: TEXT_EMPTY,
  accountHolder: TEXT_EMPTY,
  contactName: TEXT_EMPTY,
  location: TEXT_EMPTY,
  phone: TEXT_EMPTY,
  email: TEXT_EMPTY,
  fax: TEXT_EMPTY,
  note: TEXT_EMPTY,
};
