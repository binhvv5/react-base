/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-09-18 16:04:35
 * @Project: InfoCity
 */

import {
  ApiOutlined,
  BulbOutlined,
  DatabaseOutlined,
  DeliveredProcedureOutlined,
  HeartOutlined,
  IdcardOutlined,
  RiseOutlined,
  SafetyOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Switch, Tooltip } from 'antd';
import { SiderTheme } from 'antd/lib/layout/Sider';
import SubMenu from 'antd/lib/menu/SubMenu';
import { ROLES, SIDER_WIDTH_NOT_COLLAPSED, TEXT_EMPTY, THEMES } from 'app/config/constant/constants';
import { useAppDispatch, useAppSelector } from 'app/config/redux/store';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import {
  BankIcon,
  ComplaintIcon,
  CostIcon,
  DashboardIcon,
  EquipmentIcon,
  GeneralIcon,
  RentIcon,
  SuplierIcon,
  SystemIcon,
} from 'app/shared/components';
import React, { useEffect, useState } from 'react';
import { translate } from 'react-jhipster';
import { Link } from 'react-router-dom';
import ScrollBar from '../../components/scroll-bar/scroll-bar';
import { changeTheme, collapsed } from '../layout.reducer';
import './sider.scss';
import { setBrowserTitleName } from '../../util/global-function';

const pathLogoSiderCollapse = 'content/images/logo/logo-sider-collapse.png';
const pathLogoSiderDarkExtend = 'content/images/logo/logo-sider-dark-extend.png';
const pathLogoSiderLightExtend = 'content/images/logo/logo-sider-light-extend.png';
const pathTurnLeft = 'content/images/icons/btn-turn-left.png';

const Sider = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.layout.theme) as SiderTheme;
  const isViewAllSite = useAppSelector(state => state.site.isViewAllSite);
  const isInfocityAdmin = useAppSelector(state => hasAnyAuthority(state.authentication.account.role, [ROLES.INFOCITY_ADMIN]));
  const show = useAppSelector(state => state.layout.collapsed);
  const [pathLogo, setPathLogo] = useState(TEXT_EMPTY);
  const handleCollapsed = () => dispatch(collapsed(true));
  const handleTheme = () => dispatch(changeTheme());

  useEffect(() => {
    let path = TEXT_EMPTY;
    if (show) {
      path = pathLogoSiderCollapse;
    } else {
      path = theme === THEMES.DARK ? pathLogoSiderDarkExtend : pathLogoSiderLightExtend;
    }
    setPathLogo(path);
  }, [theme, show]);

  const pathname = window.location.pathname.substring(1);
  const subs = pathname.split('/');

  const getOpenKeys = () => {
    if (subs[0]) return [subs[0]];
    return ['dashboard'];
  };

  const getSelectedKeys = () => {
    if (subs[1]) return [subs[1]];
    return ['dashboard'];
  };

  return (
    <>
      <Layout.Sider
        trigger={null}
        width={SIDER_WIDTH_NOT_COLLAPSED}
        theme={theme}
        breakpoint="lg"
        collapsible
        className="sider"
        collapsed={show}
      >
        <div className={'brand'}>
          <div className={'logo'}>
            <Link to={'/'}>
              <img alt="logo" src={pathLogo} />
            </Link>
          </div>
          {!show && (
            <div onClick={handleCollapsed} className="collapsed">
              <img src={pathTurnLeft} />
            </div>
          )}
        </div>

        <div className={'menu-container'}>
          <ScrollBar options={{ suppressScrollX: true }}>
            <Menu theme={theme} mode="inline" defaultOpenKeys={getOpenKeys()} defaultSelectedKeys={getSelectedKeys()}>
              <Menu.Item
                key="dashboard"
                className={'item-sider-dashboard'}
                icon={<DashboardIcon />}
                title={translate('dashboard.title')}
                onClick={() => setBrowserTitleName('dashboard.title')}
              >
                <Link to="/">{translate('dashboard.title')}</Link>
              </Menu.Item>

              <SubMenu className={'item-sider'} key="administration" icon={<SafetyOutlined />} title={translate('administration.title')}>
                <Menu.Item key="site-management" onClick={() => setBrowserTitleName('system.menu.configuration')}>
                  <Link to="/administration/site-management">{translate('system.menu.configuration')}</Link>
                </Menu.Item>

                <Menu.Item key="icon-store" onClick={() => setBrowserTitleName('administration.menu.icon-store')}>
                  <Link to="/administration/icon-store">{translate('administration.menu.icon-store')}</Link>
                </Menu.Item>

                <Menu.Item key="advertisement" onClick={() => setBrowserTitleName('administration.menu.advertisement')}>
                  <Link to="/administration/advertisement">{translate('administration.menu.advertisement')}</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                disabled={isViewAllSite}
                key="system"
                className={'item-sider'}
                icon={<SystemIcon />}
                title={translate('system.title')}
              >
                <Menu.Item key="site-setting" onClick={() => setBrowserTitleName('system.menu.configuration')}>
                  <Link to="/system/site-setting">{translate('system.menu.configuration')}</Link>
                </Menu.Item>

                <Menu.Item key="phone-setting" onClick={() => setBrowserTitleName('system.menu.phone-setting')}>
                  <Link to="/system/phone-setting">{translate('system.menu.phone-setting')}</Link>
                </Menu.Item>

                <Menu.Item key="price-list" onClick={() => setBrowserTitleName('system.menu.tariff')}>
                  <Tooltip color={'blue'} title={'BA231'} placement="rightTop">
                    <Link to="/system/price-list">{translate('system.menu.tariff')}</Link>
                  </Tooltip>
                </Menu.Item>

                <Menu.Item key="block" onClick={() => setBrowserTitleName('system.menu.apartment')}>
                  <Tooltip color={'blue'} title={'BA240'} placement="rightTop">
                    <Link to="/system/block">{translate('system.menu.apartment')}</Link>
                  </Tooltip>
                </Menu.Item>

                <Menu.Item key="manager" onClick={() => setBrowserTitleName('system.menu.managment')}>
                  <Link to="/system/manager">{translate('system.menu.managment')}</Link>
                </Menu.Item>

                <Menu.Item key="log" onClick={() => setBrowserTitleName('system.menu.log')}>
                  {translate('system.menu.log')}
                </Menu.Item>

                <Menu.Item key="other-setting" onClick={() => setBrowserTitleName('system.menu.other-setting')}>
                  <Link to="/system/other-setting">{translate('system.menu.other-setting')}</Link>
                </Menu.Item>

                {/* <Menu.Item key='notification'>{translate('system.menu.notification')}</Menu.Item> */}
              </SubMenu>

              <SubMenu
                disabled={isViewAllSite}
                className={'item-sider'}
                key="general"
                icon={<GeneralIcon />}
                title={translate('general.title')}
              >
                <Menu.Item key="resident" onClick={() => setBrowserTitleName('general.menu.resident')}>
                  <Link to="/general/resident">{translate('general.menu.resident')}</Link>
                </Menu.Item>

                <Menu.Item key="keycard" onClick={() => setBrowserTitleName('general.menu.ticket')}>
                  <Link to="/general/keycard">{translate('general.menu.ticket')}</Link>
                </Menu.Item>

                <Menu.Item key="parking" onClick={() => setBrowserTitleName('general.menu.car')}>
                  <Link to="/general/parking">{translate('general.menu.car')}</Link>
                </Menu.Item>

                <Menu.Item key="amenity" onClick={() => setBrowserTitleName('general.menu.amenity')}>
                  <Tooltip color={'blue'} title={'CM510'} placement="rightTop">
                    <Link to="/general/amenity">{translate('general.menu.amenity')}</Link>
                  </Tooltip>
                </Menu.Item>

                <Menu.Item key="services" onClick={() => setBrowserTitleName('general.menu.service-order')}>
                  <Link to="/general/services">{translate('general.menu.service-order')}</Link>
                </Menu.Item>

                <Menu.Item key="notify" onClick={() => setBrowserTitleName('general.menu.notify')}>
                  <Link to="/general/notify">{translate('general.menu.notify')}</Link>
                </Menu.Item>

                <Menu.Item disabled={isViewAllSite} key="resident-news" onClick={() => setBrowserTitleName('complain.menu.resident-news')}>
                  <Link to="/general/resident-news">{translate('complain.menu.resident-news')}</Link>
                </Menu.Item>

                <Menu.Item disabled={isViewAllSite} key="manage-visitor" onClick={() => setBrowserTitleName('general.menu.manage-visitor')}>
                  <Link to="/general/manage-visitor">{translate('general.menu.manage-visitor')}</Link>
                </Menu.Item>

                <Menu.Item disabled={isViewAllSite} key="handbook" onClick={() => setBrowserTitleName('general.menu.handbook')}>
                  <Link to="/general/handbook">{translate('general.menu.handbook')}</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu disabled={isViewAllSite} className={'item-sider'} key="cost" icon={<CostIcon />} title={translate('cost.title')}>
                <Menu.Item key="elect-water-read" onClick={() => setBrowserTitleName('cost.menu.electric-water-reading')}>
                  <Tooltip color={'blue'} title={'CO100'} placement="rightTop">
                    <Link to="/cost/elect-water-read">{translate('cost.menu.electric-water-reading')}</Link>
                  </Tooltip>
                </Menu.Item>

                <Menu.Item key="elect-water-fee" onClick={() => setBrowserTitleName('cost.menu.electric-water-cost')}>
                  <Tooltip color={'blue'} title={'CO171'} placement="rightTop">
                    <Link to="/cost/elect-water-fee">{translate('cost.menu.electric-water-cost')}</Link>
                  </Tooltip>
                </Menu.Item>

                <Menu.Item key="parking-fee" onClick={() => setBrowserTitleName('cost.menu.parking')}>
                  <Tooltip color={'blue'} title={'CO145'} placement="rightTop">
                    <Link to="/cost/parking-fee">{translate('cost.menu.parking')}</Link>
                  </Tooltip>
                </Menu.Item>

                <Menu.Item key="management-fee" onClick={() => setBrowserTitleName('cost.menu.management')}>
                  <Tooltip color={'blue'} title={'CO152'} placement="rightTop">
                    <Link to="/cost/management-fee">{translate('cost.menu.management')}</Link>
                  </Tooltip>
                </Menu.Item>

                <Menu.Item key="trash-fee" onClick={() => setBrowserTitleName('cost.menu.trash-fee-management')}>
                  <Tooltip color={'blue'} title={'CO161'} placement="rightTop">
                    <Link to="/cost/trash-fee">{translate('cost.menu.trash-fee-management')}</Link>
                  </Tooltip>
                </Menu.Item>

                <Menu.Item key="fee-aggregation" onClick={() => setBrowserTitleName('cost.menu.fee-aggregation')}>
                  <Link to="/cost/fee-aggregation">{translate('cost.menu.fee-aggregation')}</Link>
                </Menu.Item>

                <Menu.Item key="payment-transaction" onClick={() => setBrowserTitleName('cost.menu.feeCollection')}>
                  <Link to="/cost/payment-transaction">{translate('cost.menu.feeCollection')}</Link>
                </Menu.Item>

                <Menu.Item key="report-fee" onClick={() => setBrowserTitleName('cost.menu.feeReport')}>
                  <Link to="/cost/report-fee">{translate('cost.menu.feeReport')}</Link>
                </Menu.Item>

                <Menu.Item key="fee-history" onClick={() => setBrowserTitleName('cost.menu.history-fee')}>
                  <Link to="/cost/history-fee">{translate('cost.menu.history-fee')}</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu disabled={isViewAllSite} className={'item-sider'} key="rent" icon={<RentIcon />} title={translate('rent.title')}>
                <Menu.Item key="customer" onClick={() => setBrowserTitleName('rent.menu.customer')}>
                  {translate('rent.menu.customer')}
                </Menu.Item>

                <Menu.Item key="contract" onClick={() => setBrowserTitleName('rent.menu.contract')}>
                  {translate('rent.menu.contract')}
                </Menu.Item>
              </SubMenu>

              <SubMenu
                disabled={isViewAllSite}
                className={'item-sider'}
                key="facility"
                icon={<EquipmentIcon />}
                title={translate('facility.title')}
              >
                <Menu.Item key="form" onClick={() => setBrowserTitleName('facility.menu.form')}>
                  <Link to="/facility/form">{translate('facility.menu.form')}</Link>
                </Menu.Item>

                <Menu.Item key="checking" onClick={() => setBrowserTitleName('facility.menu.checking')}>
                  <Link to="/facility/checking">{translate('facility.menu.checking')}</Link>
                </Menu.Item>

                <Menu.Item key="measure-form" onClick={() => setBrowserTitleName('facility.menu.measure-form')}>
                  <Link to="/facility/measure-form">{translate('facility.menu.measure-form')}</Link>
                </Menu.Item>

                <Menu.Item key="measure-result" onClick={() => setBrowserTitleName('facility.menu.measure-result')}>
                  <Link to="/facility/measure-result">{translate('facility.menu.measure-result')}</Link>
                </Menu.Item>

                <Menu.Item key="register" onClick={() => setBrowserTitleName('facility.menu.register-facility')}>
                  <Link to="/facility/register">{translate('facility.menu.register-facility')}</Link>
                </Menu.Item>

                <Menu.Item key="maintenance" onClick={() => setBrowserTitleName('facility.menu.maintenance')}>
                  <Link to="/facility/maintenance">{translate('facility.menu.maintenance')}</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                disabled={isViewAllSite}
                className={'item-sider'}
                key="material"
                icon={<SuplierIcon />}
                title={translate('material.title')}
              >
                <Menu.Item key="warehouse" onClick={() => setBrowserTitleName('material.menu.warehouse')}>
                  <Link to="/material/warehouse">{translate('material.menu.warehouse')}</Link>
                </Menu.Item>

                <Menu.Item key="supplier" onClick={() => setBrowserTitleName('material.menu.supplier')}>
                  <Link to="/material/supplier">{translate('material.menu.supplier')}</Link>
                </Menu.Item>

                <Menu.Item key="register-material" onClick={() => setBrowserTitleName('material.menu.register-material')}>
                  <Link to="/material/register-material">{translate('material.menu.register-material')}</Link>
                </Menu.Item>

                <Menu.Item key="purchase-request" onClick={() => setBrowserTitleName('material.menu.purchase-request')}>
                  <Link to="/material/purchase-request">{translate('material.menu.purchase-request')}</Link>
                </Menu.Item>

                <Menu.Item key="purchase-order" onClick={() => setBrowserTitleName('material.menu.purchase-order')}>
                  <Link to="/material/purchase-order">{translate('material.menu.purchase-order')}</Link>
                </Menu.Item>

                <Menu.Item key="receipt" onClick={() => setBrowserTitleName('material.menu.receipt')}>
                  <Link to="/material/receipt">{translate('material.menu.receipt')}</Link>
                </Menu.Item>

                <Menu.Item key="in-out-stock" onClick={() => setBrowserTitleName('material.menu.in-out-stock')}>
                  <Link to="/material/in-out-stock">{translate('material.menu.in-out-stock')}</Link>
                </Menu.Item>

                <Menu.Item key="open-close-period" onClick={() => setBrowserTitleName('material.menu.open-close-period')}>
                  <Link to="/material/open-close-period">{translate('material.menu.open-close-period')}</Link>
                </Menu.Item>

                <Menu.Item key="stock-take" onClick={() => setBrowserTitleName('material.menu.stock-take')}>
                  <Link to="/material/stock-take">{translate('material.menu.stock-take')}</Link>
                </Menu.Item>

                <Menu.Item key="stock-status" onClick={() => setBrowserTitleName('material.menu.stock-status')}>
                  <Link to="/material/stock-status">{translate('material.menu.stock-status')}</Link>
                </Menu.Item>

                <Menu.Item key="in-out-status" onClick={() => setBrowserTitleName('material.menu.stock-in-out-status')}>
                  <Link to="/material/in-out-status">{translate('material.menu.stock-in-out-status')}</Link>
                </Menu.Item>

                <Menu.Item key="general-inventory" onClick={() => setBrowserTitleName('material.menu.general-inventory')}>
                  <Link to="/material/general-inventory">{translate('material.menu.general-inventory')}</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu disabled={isViewAllSite} className={'item-sider'} key="bank" icon={<BankIcon />} title={translate('bank.title')}>
                <Menu.Item key="virtual-account" onClick={() => setBrowserTitleName('bank.menu.virtual-account')}>
                  <Link to="/bank/virtual-account">{translate('bank.menu.virtual-account')}</Link>
                </Menu.Item>

                <Menu.Item key="virtual-account-transaction" onClick={() => setBrowserTitleName('bank.menu.virtual-account-transaction')}>
                  <Link to="/bank/virtual-account-transaction">{translate('bank.menu.virtual-account-transaction')}</Link>
                </Menu.Item>

                <Menu.Item key="manage-root-bank" onClick={() => setBrowserTitleName('bank.menu.manage-root-bank')}>
                  <Link to="/bank/manage-root-bank">{translate('bank.menu.manage-root-bank')}</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                disabled={isViewAllSite}
                className={'item-sider'}
                key="complain"
                icon={<ComplaintIcon />}
                title={translate('complain.title')}
              >
                <Menu.Item key="management" onClick={() => setBrowserTitleName('complain.menu.management')}>
                  <Link to="/complain/management">{translate('complain.menu.management')}</Link>
                </Menu.Item>

                <Menu.Item key="report" onClick={() => setBrowserTitleName('complain.menu.report')}>
                  <Link to="/complain/report">{translate('complain.menu.report')}</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                disabled={isViewAllSite}
                className={'item-sider'}
                key="report-all"
                icon={<ComplaintIcon />}
                title={translate('report.title')}
              >
                <Menu.Item key="chart" onClick={() => setBrowserTitleName('report.menu.chart')}>
                  <Link to="/report-all/chart">{translate('report.menu.chart')}</Link>
                </Menu.Item>
              </SubMenu>

              {isInfocityAdmin && (
                <Menu.Item
                  key="tenant"
                  className={'item-sider'}
                  icon={<IdcardOutlined />}
                  onClick={() => setBrowserTitleName('customer.title')}
                >
                  <Link to="/user">{translate('customer.title')}</Link>
                </Menu.Item>
              )}
            </Menu>
          </ScrollBar>
        </div>

        <div className="switch-theme">
          {!show && (
            <span className={theme === THEMES.DARK ? 'outlight' : ''}>
              <BulbOutlined />
              {translate('layout.change.theme')}
            </span>
          )}
          <Switch
            onChange={handleTheme}
            defaultChecked={theme === THEMES.DARK}
            checkedChildren={translate('layout.theme.dark')}
            unCheckedChildren={translate('layout.theme.light')}
          />
        </div>
      </Layout.Sider>
    </>
  );
};

export default Sider;
