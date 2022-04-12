/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-26 13:39:26
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IFacility } from './facility.model';
import { IMeasureItemLevelConfig } from './measureItemLevelConfig.model';
import { IMeasureUnitConfig } from './measureUnitConfig.model';

export interface IFacilityMeasureItemConfig {
  id?: string;
  name?: string;
  facilityMeasureForm?: any | null;
  facility?: IFacility;
  facilityId?: string;
  facilityName?: string;
  levelConfigs?: IMeasureItemLevelConfig[];
  measureUnitConfig?: IMeasureUnitConfig;
  measureUnitConfigName?: string;
  measureUnitConfigType?: number;
  measureUnitConfigUnit?: string[] | any;
  measureUnitId?: string;
  measureInputType?: number | null;
  calculateConsumption?: boolean | null;
  result?: string | number | null;
}

export const defaultValue: Readonly<IFacilityMeasureItemConfig> = {
  id: TEXT_EMPTY,
  name: TEXT_EMPTY,
  facilityMeasureForm: null,
  facility: null,
  facilityId: TEXT_EMPTY,
  facilityName: TEXT_EMPTY,
  levelConfigs: [],
  measureUnitConfig: null,
  measureUnitConfigName: TEXT_EMPTY,
  measureUnitConfigType: null,
  measureUnitConfigUnit: [],
  measureUnitId: TEXT_EMPTY,
  measureInputType: null,
  calculateConsumption: false,
  result: null,
};
