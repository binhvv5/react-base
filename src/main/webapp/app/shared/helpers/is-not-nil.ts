import _ from 'lodash';

export const isNil = (obj: any) => _.isNil(obj);

export const isNotNil = (obj: any) => !isNil(obj);
