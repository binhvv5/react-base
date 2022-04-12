import { Avatar, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { IMAGE_URL } from 'app/config/constant/api';
import { useAppSelector } from 'app/config/redux/store';
import React, { Fragment } from 'react';
import { translate } from 'react-jhipster';
import { Link } from 'react-router-dom';

export const AccountMenu = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <>
      <Menu className={'account'} key="user">
        <SubMenu
          popupOffset={[-120, 60]}
          key={'user-menu'}
          className={'account-sub-menu'}
          title={
            <div className={'account-name'}>
              <span>{account.username}</span>
              {account.avatar ? (
                <Avatar style={{ marginLeft: 8 }} src={`${IMAGE_URL}${account.avatar}`} />
              ) : (
                <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', marginLeft: 8 }}>{account.username}</Avatar>
              )}
            </div>
          }
        >
          {/* <Menu.Item key="site">
            <Link to="/site">
              <p>{translate('global.menu.account.block')}</p>
            </Link>
          </Menu.Item> */}
          <Menu.Item key="settings">
            <Link to="/account/settings">
              <p>{translate('global.menu.account.settings')}</p>
            </Link>
          </Menu.Item>
          <Menu.Item key="password">
            <Link to="/account/password">
              <p>{translate('global.menu.account.password')}</p>
            </Link>
          </Menu.Item>
          <Menu.Item key="signout">
            <Link to="/account/logout">
              <p>{translate('global.menu.account.logout')}</p>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};
