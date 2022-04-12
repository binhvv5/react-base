import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IHandbookCategory {
  id?: string;
  name?: string;
}

export const defaultValue: Readonly<IHandbookCategory> = {
  id: TEXT_EMPTY,
  name: TEXT_EMPTY,
};
