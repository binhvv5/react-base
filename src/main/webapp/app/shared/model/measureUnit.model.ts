/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-29 23:08:40
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IMeasureUnit {
  id?: string;
  name?: string;
  type?: number | null;
  unit?: string | string[] | null;
}

export const defaultValue: Readonly<IMeasureUnit> = {
  id: TEXT_EMPTY,
  name: TEXT_EMPTY,
  type: null,
  unit: null,
};
