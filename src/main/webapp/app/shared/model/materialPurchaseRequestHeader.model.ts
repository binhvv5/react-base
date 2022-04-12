/**
 * @ Author: Pham Duc Luu
 * @ Create Time: 2021-11-03 13:06:04
 * @ Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { PR_STATUS } from 'app/config/constant/enum';
import { IMaterialPurchaseRequestDetail } from './materialPurchaseRequestDetail.model';
import { IUser } from './user.model';

export interface IMaterialPurchaseRequestHeader {
  id?: string;
  code?: string;
  requestedDate?: any;
  requestedBy?: IUser;
  requestedById?: string;
  requestedByName?: string;
  departmentName?: string;
  content?: string;
  totalBaseAmount?: number;
  totalTaxAmount?: number;
  totalAmount?: number;
  status?: number;
  materialPurchaseRequestDetails: IMaterialPurchaseRequestDetail[];
}

export const defaultValue: Readonly<IMaterialPurchaseRequestHeader> = {
  id: TEXT_EMPTY,
  code: TEXT_EMPTY,
  requestedDate: null,
  requestedBy: null,
  requestedById: TEXT_EMPTY,
  requestedByName: TEXT_EMPTY,
  departmentName: TEXT_EMPTY,
  content: TEXT_EMPTY,
  totalBaseAmount: 0,
  totalTaxAmount: 0,
  totalAmount: 0,
  status: PR_STATUS.NOT_YET_PROCESSED,
  materialPurchaseRequestDetails: [],
};
