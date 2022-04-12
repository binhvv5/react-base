import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IUser } from 'app/shared/model/user.model';

export interface IAmenity {
  id?: string;
  name?: string;
  icon?: string;
  unit?: string;
  containTax?: boolean;
  tax?: number;
  unitPrice?: number;
  capacity?: number;
  openFromTime?: string | null;
  openToTime?: string | null;
  closeFromTime?: string | null;
  closeToTime?: string | null;
  maintenanceDays: number[];
  enable?: boolean;
  deposit?: number;
  disableReason?: string;
  allowBook?: boolean;
  allowDuplicateSchedule?: boolean;
  description?: string;
  rules?: string;
  image?: string;
}

export const defaultValue: Readonly<IAmenity> = {
  id: TEXT_EMPTY,
  name: TEXT_EMPTY,
  icon: TEXT_EMPTY,
  unit: TEXT_EMPTY,
  containTax: false,
  tax: 0,
  unitPrice: 0,
  capacity: 0,
  maintenanceDays: [],
  enable: false,
  deposit: 0,
  disableReason: TEXT_EMPTY,
  allowBook: false,
  allowDuplicateSchedule: false,
  description: TEXT_EMPTY,
  rules: TEXT_EMPTY,
  image: TEXT_EMPTY,
};

export interface IAmenityBook {
  id?: string;
  amenityId?: string;
  amenity?: IAmenity;
  residentId?: string;
  resident?: IUser;
  orderMethod?: number;
  paymentMethod?: number;
  checkInDate?: string;
  checkInFrom?: string;
  checkInTo?: string;
  cancelDateTime?: string | null;
  amountMustPaid?: number | null;
  amount?: number;
  amountPaid?: number | null;
  quantity: number | null;
  status?: number;
  managerNote?: string;
  residentNote?: string;
  createdDate?: string;
  orderPhone?: string;
  orderEmail?: string;
}

export const defaultValueAmenityBook: Readonly<IAmenityBook> = {
  id: null,
  amenityId: null,
  amenity: defaultValue,
  resident: {},
  residentId: TEXT_EMPTY,
  orderMethod: null,
  paymentMethod: null,
  checkInDate: TEXT_EMPTY,
  checkInFrom: TEXT_EMPTY,
  checkInTo: TEXT_EMPTY,
  cancelDateTime: TEXT_EMPTY,
  amountMustPaid: 0,
  amountPaid: 0,
  quantity: 0,
  status: 1,
  managerNote: TEXT_EMPTY,
  residentNote: TEXT_EMPTY,
  createdDate: TEXT_EMPTY,
  orderPhone: TEXT_EMPTY,
  orderEmail: TEXT_EMPTY,
};
