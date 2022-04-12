import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IService {
  id?: string;
  code?: string;
  name?: string;
  icon?: string;
  unit?: string;
  tax?: number;
  price?: number;
  description?: string;
  serviceId?: string;
  service?: IService;
  quantity: number;
}

export const defaultValue: Readonly<IService> = {
  id: TEXT_EMPTY,
  code: TEXT_EMPTY,
  name: TEXT_EMPTY,
  icon: null,
  unit: TEXT_EMPTY,
  price: 0,
  tax: 0,
  description: TEXT_EMPTY,
  quantity: 0,
};
