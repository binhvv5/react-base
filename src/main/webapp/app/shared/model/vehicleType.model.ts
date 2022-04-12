import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IVehicleType {
  id?: string;
  name?: string;
  icon?: string;
}

export const defaultVehicleType: Readonly<IVehicleType> = {
  id: TEXT_EMPTY,
  name: TEXT_EMPTY,
  icon: TEXT_EMPTY,
};
