import { notification } from 'antd';
import { DEFAULT_SIZE, SITE_INFO, X_SITE_ID } from 'app/config/constant/constants';
import pick from 'lodash/pick';
import moment from 'moment';
import { Storage, translate } from 'react-jhipster';

/**
 * Removes fields with an 'id' field that equals ''.
 * This function was created to prevent entities to be sent to
 * the server with an empty id and thus resulting in a 500.
 *
 * @param entity Object to clean.
 */
export const cleanEntity = entity => {
  const keysToKeep = Object.keys(entity).filter(k => !(entity[k] instanceof Object) || (entity[k]['id'] !== '' && entity[k]['id'] !== -1));

  return pick(entity, keysToKeep);
};

/**
 * Simply map a list of element to a list a object with the element as id.
 *
 * @param idList Elements to map.
 * @returns The list of objects with mapped ids.
 */
export const mapIdList = (idList: ReadonlyArray<any>) => idList.filter((id: any) => id !== '').map((id: any) => ({ id }));

export const customizeToAndPagination = (page: number, numberItem: number, pageSize?: number, setPage?: any) => {
  pageSize = pageSize ? pageSize : DEFAULT_SIZE;

  let maxPage = Math.floor((numberItem - 1) / pageSize);
  maxPage = maxPage > 0 ? maxPage : 0;

  if (maxPage < page && setPage) {
    setPage(maxPage);
  }

  return {
    current: page + 1,
    total: numberItem,
    showQuickJumper: true,
    showSizeChanger: true,
    showLessItems: true,
    pageSize,
    pageSizeOptions: ['10', '15', '20', '30', '50'],
  };
};

export const getSiteId = () => Storage.local.get(X_SITE_ID);

export const getSite = () => Storage.local.get(SITE_INFO);

export const sortField = (obja: any, objb: any, fieldName: string) => {
  if (obja[fieldName] === undefined) {
    return objb[fieldName] === undefined ? 0 : 1;
  } else {
    return objb[fieldName] === undefined ? -1 : obja[fieldName].localeCompare(objb[fieldName]);
  }
};

export function sortByDate(d1, d2) {
  return moment(d1).unix() - moment(d2).unix();
}

export const openNotification = (type: string, key?: string, data?: any, message?: string) => {
  const style = `notification-${type}`;
  let description = key ? translate(key, data) : message;

  if (description && description.startsWith('translation-not-found')) {
    description = message ? message : 'Can not find description, please contact administrator for this message: ' + key;
  }

  notification[type]({
    message: 'Info city',
    description,
    className: style,
  });
};
