import { IHandbookCategory } from './handbookCategory.model';
import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IHandbook {
  id?: string;
  title?: string;
  content?: string;
  image?: string;
  handbookCategoryId?: string;
  handbookCategory?: IHandbookCategory;
  categoryName?: string;
}

export const defaultValue: Readonly<IHandbook> = {
  id: TEXT_EMPTY,
  title: TEXT_EMPTY,
  content: TEXT_EMPTY,
  image: TEXT_EMPTY,
  handbookCategoryId: TEXT_EMPTY,
};
