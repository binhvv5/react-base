import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface ICalendar {
  content: string;
  title: string;
  fromDateTime: string;
  toDateTime: string;
  id?: string;
  requestParam?: any;
  events?: Array<{
    id: string;
    title: string;
    content: string;
    fromDateTime: string;
    toDateTime: string;
    borderColor: string;
    contentColor: string;
  }>;
  amenityBooks?: Array<{
    checkInFrom: string;
    id: string;
    checkInTo: string;
    amenity: {
      name: string;
    };
  }>;
  complaints?: Array<{
    content: string;
    receiveTime: string;
    deadline: string;
  }>;
  users?: Array<{
    id: string;
    fullName: string;
    birthday: string;
    avatar: string;
    host: boolean;
    receivingDate: string;
    deliveryDate: string;
    relationshipWithHost: string;
    permanentAddress: string;
  }>;
}

export const defaultValue: ICalendar = {
  id: TEXT_EMPTY,
  requestParam: {},
  fromDateTime: TEXT_EMPTY,
  toDateTime: TEXT_EMPTY,
  content: TEXT_EMPTY,
  title: TEXT_EMPTY,
  events: [],
  amenityBooks: [],
  complaints: [],
  users: [],
};
