/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-08-25 21:59:33
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface ISite {
  id?: string;
  name?: string;
  namePrinting?: string;
  transferContent?: string;
  useVirtualAccount?: boolean;
  useRoomGrade?: boolean;
  phone?: string;
  fax?: string;
  address?: string;
  logo?: string;
  mailNoticeFee?: boolean;
  mailRemindFee?: boolean;
  mailNotify?: boolean;
  allowNegativeQtyInStock?: boolean;
  periodEndClosing?: boolean;
  useFeeTypes?: number[];
  content?: any;
  type?: number;
  contentType?: number;
  modules?: number[];
}

export const defaultValue: Readonly<ISite> = {
  id: TEXT_EMPTY,
  name: TEXT_EMPTY,
  namePrinting: TEXT_EMPTY,
  transferContent: TEXT_EMPTY,
  useVirtualAccount: false,
  useRoomGrade: false,
  phone: TEXT_EMPTY,
  fax: TEXT_EMPTY,
  address: TEXT_EMPTY,
  logo: TEXT_EMPTY,
  mailNoticeFee: false,
  mailRemindFee: false,
  mailNotify: false,
  allowNegativeQtyInStock: false,
  periodEndClosing: false,
  content: TEXT_EMPTY,
  type: undefined,
  contentType: undefined,
};
