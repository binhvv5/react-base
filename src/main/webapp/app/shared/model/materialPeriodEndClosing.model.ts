/**
 * @ Author: Pham Duc Luu
 * @ Create Time: 2021-12-27 10:15:35
 * @ Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IUser } from './user.model';

export interface IMaterialPeriodEndClosing {
  id?: string;
  month?: string;
  actionType?: number;
  isPriced?: boolean;
  lastModifiedBy?: string;
  lastModifiedByObject?: IUser;
  lastModifiedByName?: string;
  lastModifiedDate?: any;

  lastClosedMonth?: any;
  firstOpenMonth?: any;
}

export const defaultValue: Readonly<IMaterialPeriodEndClosing> = {
  id: null,
  month: TEXT_EMPTY,
  actionType: null,
  isPriced: false,
  lastModifiedByObject: null,
  lastModifiedBy: TEXT_EMPTY,
  lastModifiedByName: TEXT_EMPTY,
  lastModifiedDate: null,
};
