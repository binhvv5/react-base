import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IPhoneCategory {
  id?: string;
  name?: string;
  phone?: string;
  phoneBooks?: any;
  requestParam?: any;
}

export const defaultValue: Readonly<IPhoneCategory> = {
  id: TEXT_EMPTY,
  name: TEXT_EMPTY,
  phone: TEXT_EMPTY,
  phoneBooks: [],
  requestParam: {},
};
