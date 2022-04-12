/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-24 11:43:21
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IMeter } from './meter.model';

export interface IMeterAssignment {
  id?: string;
  meter?: IMeter;
}

export const defaultValue: Readonly<IMeterAssignment> = {
  id: TEXT_EMPTY,
  meter: null,
};
