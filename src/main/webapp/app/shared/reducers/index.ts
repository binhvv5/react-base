/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-08-19 22:01:57
 * @Project: InfoCity
 */

import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';
import activate from 'app/modules/account/activate/activate.reducer';
import passwordReset from 'app/modules/account/password-reset/password-reset.reducer';
import password from 'app/modules/account/password/password.reducer';
import layout from 'app/shared/layout/layout.reducer';
import amenityManagement from './amenity.reducer';
import authentication from './authentication';
import locale from './locale';
import site from './site.reducer';
import userManagement from './user.reducer';
import notifications from 'app/shared/layout/notification.reducer';

const rootReducer = {
  authentication,
  site,
  locale,
  userManagement,
  activate,
  passwordReset,
  password,
  loadingBar,
  layout,
  amenityManagement,
  notifications,
};

export default rootReducer;
