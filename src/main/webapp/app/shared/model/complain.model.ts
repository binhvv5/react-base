/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-14 23:14:11
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IComplaintType } from './complaintType.model';
import { IUser } from './user.model';
import { IWorkAssignment } from './workAssignment.model';

export interface IComplaint {
  id?: string;
  status?: number | null;
  method?: number | null;
  content?: string;
  image?: string;
  receiveTime?: any | null;
  deadline?: any | null;
  resident?: IUser | null;
  complaintType?: IComplaintType;

  residentName?: string;
  residentId?: string;
  blockName?: string;
  blockUnitName?: string;
  blockId?: string;
  blockUnitId?: string;
  complaintTypeId?: string;
  workAssignment?: IWorkAssignment;
  workAssignmentAssignorId?: string;
  workAssignmentStaffInChargeId?: string;
}

export const defaultValue: Readonly<IComplaint> = {
  id: TEXT_EMPTY,
  status: null,
  method: null,
  content: TEXT_EMPTY,
  image: TEXT_EMPTY,
  receiveTime: null,
  deadline: null,
  resident: null,
  complaintType: null,

  residentName: TEXT_EMPTY,
  residentId: TEXT_EMPTY,
  blockName: TEXT_EMPTY,
  blockUnitName: TEXT_EMPTY,
  blockId: TEXT_EMPTY,
  blockUnitId: TEXT_EMPTY,
  complaintTypeId: TEXT_EMPTY,
  workAssignment: null,
  workAssignmentAssignorId: TEXT_EMPTY,
  workAssignmentStaffInChargeId: TEXT_EMPTY,
};
