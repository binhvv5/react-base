/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-09-18 16:04:22
 * @Project: InfoCity
 */

/* eslint no-console: off */
export const loggerMiddleware = () => next => action => {
  if (process.env.NODE_ENV !== 'production') {
    const { type, payload, meta, error } = action;

    console.groupCollapsed(type);
    console.log('Payload:', payload);
    if (error) {
      console.log('Error:', error);
    }
    console.log('Meta:', meta);
    console.groupEnd();
  }

  return next(action);
};
