import { TEXT_EMPTY } from './../../config/constant/constants';
/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-12-29 00:25:14
 * @Project: InfoCity
 */

export interface IBank {
  id?: string;
  code?: string;
  name?: string;
  shortName?: string;
  fullName?: string;
  swiftCode?: string;
  citadCode?: string;
  address?: string;
  image?: string;
}

export const defaultValue: Readonly<IBank> = {
  id: TEXT_EMPTY,
  code: TEXT_EMPTY,
  name: TEXT_EMPTY,
  shortName: TEXT_EMPTY,
  fullName: TEXT_EMPTY,
  swiftCode: TEXT_EMPTY,
  citadCode: TEXT_EMPTY,
  address: TEXT_EMPTY,
  image: TEXT_EMPTY,
};
