import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IPhoneCategory } from './phoneCategory.model';

export interface IPhone {
  id?: string;
  name?: string;
  phone?: string;
  phoneBookCategory?: IPhoneCategory;
  phoneBookCategoryId?: string;
  requestParam?: any;
}

export const defaultValue: Readonly<IPhone> = {
  id: TEXT_EMPTY,
  name: TEXT_EMPTY,
  phone: TEXT_EMPTY,
  phoneBookCategory: null,
  phoneBookCategoryId: TEXT_EMPTY,
  requestParam: {},
};
