import { IUser } from './user.model';

export interface IComplaintTypeAssignment {
  user?: IUser;
}

export const defaultValue: Readonly<IComplaintTypeAssignment> = {
  user: null,
};
