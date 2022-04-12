/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-09-18 16:00:54
 * @Project: InfoCity
 */

const getErrorMessage = errorData => {
  let message = errorData.message;
  if (errorData.fieldErrors) {
    errorData.fieldErrors.forEach(fErr => {
      message += `\nfield: ${fErr.field},  Object: ${fErr.objectName}, message: ${fErr.message}\n`;
    });
  }
  return message;
};

export const errorMiddleware = () => next => action => {
  /**
   *
   * The error middleware serves to log error messages from dispatch
   * It need not run in production
   */
  if (process.env.NODE_ENV === 'development' && action && action.error) {
    const { error } = action;
    if (error) {
      console.error(`${action.type} caught at middleware with reason: ${JSON.stringify(error.message)}.`);
      if (error && error.response && error.response.data) {
        const message = getErrorMessage(error.response.data);
        console.error(`Actual cause: ${message}`);
      }
    }
  }
  // Dispatch initial action
  return next(action);
};
