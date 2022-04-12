/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-11-01 00:45:36
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IComplaintType } from './complaintType.model';

export interface IReport {
  id?: string | null;
  complaintType: IComplaintType;
  complaintTypeName?: string;
  total?: number | null;
  totalWorkAssignmentWaiting?: number | null;
  totalWaitingAccept?: number | null;
  totalHanding?: number | null;
  totalWaitingManagerConfirm?: number | null;
  totalExceedDeadline?: number | null;
  totalCompleted?: number | null;
}

export const defaultValue: Readonly<IReport> = {
  complaintType: null,
  complaintTypeName: TEXT_EMPTY,
  total: null,
  totalWorkAssignmentWaiting: null,
  totalWaitingAccept: null,
  totalHanding: null,
  totalWaitingManagerConfirm: null,
  totalExceedDeadline: null,
  totalCompleted: null,
};
