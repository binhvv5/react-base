/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-09-30 00:03:26
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IFacilityType {
  id?: string;
  name?: string;
}

export const defaultValue: Readonly<IFacilityType> = {
  id: TEXT_EMPTY,
  name: TEXT_EMPTY,
};
