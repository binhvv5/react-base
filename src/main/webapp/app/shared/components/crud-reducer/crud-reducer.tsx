import _ from 'lodash';

export const updateNoGetList = (nameList: string, state, action) => {
  const objectUpdate = { ...action.meta.arg };
  const index = state[nameList].findIndex(item => item.id === objectUpdate?.id);
  if (index !== -1) {
    state[nameList][index] = objectUpdate;
  }
};
export const deleteNoGetList = (nameList: string, state, action) => {
  const idDelete = _.isString(action.meta.arg) ? action.meta.arg : action.meta.arg?.id;
  state[nameList] = state[nameList]?.filter(item => item?.id !== idDelete);
};
