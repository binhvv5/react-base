import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Layout, Menu, Space } from 'antd';
import { SITE_INFO, X_SITE_ID } from 'app/config/constant/constants';
import { useAppDispatch, useAppSelector } from 'app/config/redux/store';
import { getSites, setSite, setSiteId } from 'app/shared/reducers/site.reducer';
import React, { useEffect } from 'react';
import { Storage } from 'react-jhipster';
import { useHistory } from 'react-router-dom';
import { collapsed } from '../layout.reducer';
import { AccountMenu, LanguageMenu, NotificationMenu } from '../menus';
import './header.scss';

const HEADER_CLASSES_SHOW = 'header fixed';
const HEADER_CLASSES_HIDE = 'header fixed collapsed';
const PATH_IMAGE = '../../../../content/images/icons/btn-turn-right.png';

const Header = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const show = useAppSelector(state => state.layout.collapsed);
  const site = useAppSelector(state => state.site.site);
  const sites = useAppSelector(state => state.site.sites);

  const toggleHeader = show ? HEADER_CLASSES_HIDE : HEADER_CLASSES_SHOW;

  useEffect(() => {
    dispatch(getSites());
  }, []);

  const handleCollapsed = () => dispatch(collapsed(false));

  const handleChangeSite = ({ key }) => {
    sites.forEach(item => {
      if (item.id === key) {
        dispatch(setSite(item));
        Storage.local.set(SITE_INFO, item);
        return;
      }
    });

    dispatch(setSiteId(key));
    Storage.local.set(X_SITE_ID, key);
    location.reload();
  };

  const menu = (
    <Menu onClick={handleChangeSite}>
      {sites.map($site => (
        <Menu.Item key={$site.id}>{$site.name}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <Layout.Header className={toggleHeader} id="layoutHeader">
        <div className="expanded">
          {show && (
            <div>
              <img onClick={handleCollapsed} src={PATH_IMAGE} />
            </div>
          )}

          <div>
            <Dropdown overlay={menu} trigger={['click']}>
              <div>
                <span className="site-name">{site && site.name}</span>
                <CaretDownOutlined className="icon-drop" />
              </div>
            </Dropdown>
          </div>
        </div>

        <div className="right-container">
          <Space>
            <NotificationMenu />
            <LanguageMenu />
            <AccountMenu />
          </Space>
        </div>
      </Layout.Header>
    </>
  );
};

export default Header;
