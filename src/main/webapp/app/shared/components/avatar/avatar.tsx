import { Avatar } from 'antd';
import { IMAGE_URL } from 'app/config/constant/api';
import { IUser } from 'app/shared/model/user.model';
import React from 'react';
import _ from 'lodash';

export const UserImage = (user: IUser) => {
  const items = user.fullName ? user.fullName.split(' ') : [];
  const lastName = _.last(items);

  return (
    <>
      <div className={'text-align-center'}>
        {user.avatar ? (
          <Avatar src={`${IMAGE_URL}${user.avatar}`} />
        ) : (
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{lastName || user.username}</Avatar>
        )}
      </div>
    </>
  );
};
