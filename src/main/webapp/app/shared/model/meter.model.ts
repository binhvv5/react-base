/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-03 23:08:40
 * @Project: InfoCity
 */

import { IMeterReading } from 'app/shared/model/meterReading.model';

export interface IMeter {
  id: string;
  code: string;
  type: number | null;
  maxValue: number | null;
  enable: boolean;
  meterReadings?: IMeterReading[];
}

export const defaultValue: Readonly<IMeter> = {
  id: '',
  code: '',
  type: null,
  maxValue: null,
  enable: true,
  meterReadings: [],
};
