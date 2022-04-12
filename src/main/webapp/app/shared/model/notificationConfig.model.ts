/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-04 22:18:46
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { NOTIFYCATION_TYPE } from 'app/config/constant/enum';

export interface INotificationConfig {
  id?: string;
  contentType?: number | null;
  timeSend?: string;
  receiverIds?: string[];
  title?: string;
  content?: string;
  userType?: number | null;
  notificationTypes?: number[];
  sendToAll?: boolean;
}

export const defaultValue: Readonly<INotificationConfig> = {
  id: TEXT_EMPTY,
  contentType: null,
  timeSend: null,
  receiverIds: [],
  title: TEXT_EMPTY,
  content: TEXT_EMPTY,
  userType: null,
  notificationTypes: [NOTIFYCATION_TYPE.MESSAGING],
  sendToAll: false,
};
