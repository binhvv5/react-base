/**
 * @ Author: Pham Duc Luu
 * @ Create Time: 2021-10-25 14:26:50
 * @ Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IWarehouse {
  id?: string;
  code?: string;
  name?: string;
  location?: number;
  description?: string;
}

export const defaultValue: Readonly<IWarehouse> = {
  id: TEXT_EMPTY,
  code: TEXT_EMPTY,
  name: TEXT_EMPTY,
  location: 1,
  description: TEXT_EMPTY,
};
