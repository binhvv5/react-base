/**
 * @ Author: Pham Duc Luu
 * @ Create Time: 2022-01-05 14:48:29
 * @ Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { STOCK_TAKE_STATUS } from 'app/config/constant/enum';
import { IMaterialStockTakingDetail } from './materialStockTakingDetail.model';
import { IUser } from './user.model';

export interface IMaterialStockTakingHeader {
  id?: string;
  code?: string;
  stockTakeDate?: any;
  isAdjusted?: boolean;
  status?: number;
  storeman?: IUser;
  storemanId?: string;
  storemanName?: string;
  materialStockTakingDetails: IMaterialStockTakingDetail[];

  disable?: boolean;
  isAllowToChangeAdjust?: boolean;
}

export const defaultValue: Readonly<IMaterialStockTakingHeader> = {
  id: null,
  code: TEXT_EMPTY,
  stockTakeDate: null,
  isAdjusted: false,
  status: STOCK_TAKE_STATUS.ACTIVE,
  storeman: null,
  storemanId: null,
  storemanName: TEXT_EMPTY,
  materialStockTakingDetails: [],
  disable: false,
  isAllowToChangeAdjust: false,
};
