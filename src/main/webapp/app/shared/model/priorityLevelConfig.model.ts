/**
 * @ Author: Pham Duc Luu
 * @ Create Time: 2021-10-22 10:57:52
 * @ Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IPriorityLevelConfig {
  id?: string;
  enable?: boolean;
  label?: string;
  colorHex?: string;
}

export const defaultValue: Readonly<IPriorityLevelConfig> = {
  id: TEXT_EMPTY,
  enable: true,
  label: TEXT_EMPTY,
  colorHex: '#FF6900',
};
