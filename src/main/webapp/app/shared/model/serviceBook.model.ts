import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IService } from './service.model';
import { IUser } from './user.model';

export interface IServiceBook {
  id?: string;
  serviceId?: string;
  residentId?: string;
  bookDate?: any;
  paymentStatus?: string;
  note?: string;

  service?: IService;
  unit?: string;
  tax?: number;
  price?: number;
  totalAmount?: number;
  quantity?: number;
  serviceName?: string;
  resident?: IUser;
  blockName?: string;
  blockUnitName?: string;
  blockId?: string;
  blockUnitId?: string;
}

export const defaultValue: Readonly<IServiceBook> = {
  id: TEXT_EMPTY,
  serviceId: TEXT_EMPTY,
  residentId: null,
  paymentStatus: TEXT_EMPTY,
  note: TEXT_EMPTY,

  service: null,
  unit: TEXT_EMPTY,
  price: 0,
  tax: 0,
  totalAmount: 0,
  quantity: 0,
  serviceName: TEXT_EMPTY,
  resident: null,
};
