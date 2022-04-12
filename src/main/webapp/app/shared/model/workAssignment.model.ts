import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IUser } from './user.model';

export interface IWorkAssignment {
  id?: string;
  priority?: number | null;
  assignor?: IUser;
  staffInCharge?: IUser;
}

export const defaultValue: Readonly<IWorkAssignment> = {
  id: TEXT_EMPTY,
  priority: null,
  assignor: null,
  staffInCharge: null,
};
