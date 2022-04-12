import {
  APP_DATETIME_FORMAT_ES,
  APP_LOCAL_DATETIME_FORMAT,
  APP_LOCAL_DATE_FORMAT,
  APP_TIMESTAMP_FORMAT,
  APP_TIME_FORMAT,
  FORMAT_YYYY_MM_DD,
  APP_DATE_YEAR_MONTH_FORMAT,
  APP_DATE_MONTH_YEAR_FORMAT,
} from 'app/config/constant/constants';
import dayjs from 'dayjs';
import moment from 'moment';

export const convertDateTimeFromServer = date => (date ? dayjs(date).format(APP_LOCAL_DATETIME_FORMAT) : null);

export const convertDateTimeToServerTime = date => (date ? dayjs(date).format(APP_DATETIME_FORMAT_ES) : null);

export const convertDateTimeToServer = date => (date ? dayjs(date).toDate() : null);

export const displayDefaultDateTime = () => dayjs().startOf('day').format(APP_LOCAL_DATETIME_FORMAT);

export const convertDateToDDMMYYYY = date => (date ? moment.utc(date).local().format(APP_LOCAL_DATE_FORMAT) : '');

export const convertDateToYYYY_MM_DD = date => (date ? moment.utc(date).local().format(FORMAT_YYYY_MM_DD) : '');

export const convertStringToDateTime = date => (date ? moment.utc(date).local().format(APP_TIMESTAMP_FORMAT) : '');

export const convertDateToTime = date => (date ? moment.utc(date).local().format(APP_TIME_FORMAT) : '');

export const convertToYearMonth = date => (date ? moment.utc(date).local().format(APP_DATE_YEAR_MONTH_FORMAT) : '');

export const convertToMonthYear = date => (date ? moment.utc(date).local().format(APP_DATE_MONTH_YEAR_FORMAT) : '');

export const msToTime = (milliseconds: number) => {
  const ms = milliseconds % 1000;
  milliseconds = (milliseconds - ms) / 1000;
  const secs = milliseconds % 60;
  milliseconds = (milliseconds - secs) / 60;
  const mins = milliseconds % 60;
  const hrs = (milliseconds - mins) / 60;
  return hrs + ':' + mins + ':' + secs + '.' + ms;
};

export const convertTimeToMilliseconds = date => {
  const dateTime = convertDateToTime(date);
  const timeItems: string[] = dateTime.split(':');
  const hour = +timeItems[0];
  const minute = +timeItems[1];
  return (hour * 60 + minute) * 60000;
};
