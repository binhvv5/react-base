/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-09-18 16:05:59
 * @Project: InfoCity
 */

import { setLocale } from 'app/shared/reducers/locale';
import { Storage, TranslatorContext } from 'react-jhipster';
import { DEFAULT_LOCALE, LOCALE } from '../constant/constants';

TranslatorContext.setDefaultLocale(DEFAULT_LOCALE);
TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages = {
  vi: {
    flag: 'content/images/avatar/vietnam.png',
    name: 'i18n.vn',
  },
  en: {
    flag: 'content/images/avatar/united-kingdom.png',
    name: 'i18n.en',
  },
  ko: {
    flag: 'content/images/avatar/south-korea.png',
    name: 'i18n.ko',
  },
};

export const locales = Object.keys(languages).sort();

export const registerLocale = store => {
  const locale = Storage.local.get(LOCALE) || DEFAULT_LOCALE;
  store.dispatch(setLocale(locale));
};
