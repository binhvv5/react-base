import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IMaterialReceiptDetail } from './materialReceiptDetail.model';
import { IUser } from './user.model';

export interface IMaterialReceiptHeader {
  totalTaxAmount?: number;
  id?: string;
  code?: string;
  receiptDate?: any;
  receiver?: IUser;
  receiverId?: string;
  receiverName?: string;
  content?: string;
  status?: string;
  totalBaseAmount?: number;
  taxAmount?: number;
  totalAmount?: number;
  materialReceiptDetails: IMaterialReceiptDetail[];
  deletingVouchers?: string;
}

export const defaultValue: Readonly<IMaterialReceiptHeader> = {
  id: null,
  code: TEXT_EMPTY,
  receiptDate: null,
  receiver: null,
  receiverId: TEXT_EMPTY,
  receiverName: TEXT_EMPTY,
  content: TEXT_EMPTY,
  status: TEXT_EMPTY,
  totalBaseAmount: 0,
  taxAmount: 0,
  totalAmount: 0,
  materialReceiptDetails: [],
  totalTaxAmount: 0,
};
