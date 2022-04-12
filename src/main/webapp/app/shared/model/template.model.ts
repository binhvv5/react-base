import { TEXT_EMPTY } from '../../config/constant/constants';

export interface ITemplate {
  id?: string;
  content?: any;
  contentType?: number;
  type?: number;
  name?: string;
}

export const defaultValue: Readonly<ITemplate> = {
  id: TEXT_EMPTY,
  content: {
    text: TEXT_EMPTY,
  },
  contentType: 1,
  type: 0,
  name: TEXT_EMPTY,
};
