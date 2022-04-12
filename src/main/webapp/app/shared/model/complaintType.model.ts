/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-14 23:17:56
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IComplaintTypeAssignment } from './complaintTypeAssignment.model';

export interface IComplaintType {
  id?: string;
  code?: string;
  name?: string;
  complaintTypeAssignments?: IComplaintTypeAssignment[];

  userIds?: string[];
}

export const defaultValue: Readonly<IComplaintType> = {
  id: TEXT_EMPTY,
  code: TEXT_EMPTY,
  name: TEXT_EMPTY,
  complaintTypeAssignments: [],

  userIds: [],
};
