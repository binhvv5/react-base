/**
 * @ Author: Pham Duc Luu
 * @ Create Time: 2021-10-28 10:58:57
 * @ Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IMaterialType {
  id?: string;
  name?: string;
  type?: number;
}

export const defaultValue: Readonly<IMaterialType> = {
  id: TEXT_EMPTY,
  name: TEXT_EMPTY,
  type: null,
};
