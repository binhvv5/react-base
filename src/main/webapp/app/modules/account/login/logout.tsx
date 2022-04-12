import { useAppDispatch } from 'app/config/redux/store';
import { logout } from 'app/shared/reducers/authentication';
import React, { useLayoutEffect } from 'react';
import { Redirect } from 'react-router-dom';

export const Logout = () => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(logout());
  });

  return (
    <div className="p-5">
      <Redirect to={{ pathname: '/account/login', search: window.location.search }} />
    </div>
  );
};

export default Logout;
