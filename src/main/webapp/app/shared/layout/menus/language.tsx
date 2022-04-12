import { Avatar, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { DEFAULT_LOCALE } from 'app/config/constant/constants';
import { languages } from 'app/config/i18n/translation';
import { useAppDispatch, useAppSelector } from 'app/config/redux/store';
import { setLocale } from 'app/shared/reducers/locale';
import React from 'react';
import { translate } from 'react-jhipster';

export const LanguageMenu = () => {
  const dispatch = useAppDispatch();
  const locale = useAppSelector(state => state.locale.currentLocale);
  const currenLanguage = locale ? languages[locale] : languages[DEFAULT_LOCALE];

  const handleChangeLang = (key: string) => {
    dispatch(setLocale(key));
  };

  const generateLangOption = () => {
    const options = [];
    Object.keys(languages).forEach(key => {
      options.push(
        <Menu.Item key={key}>
          <Avatar size="small" style={{ marginRight: 8 }} src={languages[key].flag} />
          {translate(languages[key].name)}
        </Menu.Item>
      );
    });
    return options;
  };

  return (
    <>
      <Menu mode="horizontal" key="language" onClick={data => handleChangeLang(data.key)} selectedKeys={[currenLanguage.key]}>
        <SubMenu key={'language-menu'} title={<Avatar size="small" src={currenLanguage.flag} />}>
          {generateLangOption()}
        </SubMenu>
      </Menu>
    </>
  );
};
