import { isNotNil } from '../helpers/is-not-nil';
import { useCallback, useReducer, useState } from 'react';
import { translate } from 'react-jhipster';
import { PERMISSION_MAPPER } from 'app/config/constant/permission-mapper';
import { openNotification } from 'app/shared/util/entity-utils';
import { NOTIFICATION } from 'app/config/constant/constants';

export const setBrowserTitleName = (title: string) => {
  if (title) {
    document.title = translate(title);
  }
};

export const calculateTime = (momentTime: any) => {
  return (momentTime.hours() * 3600 + momentTime.minutes() * 60 + momentTime.seconds()) * 1000;
};

export const regexNumber = (text: string) => {
  if (!text) {
    return;
  }
  return text.replace(/[^0-9.]/g, '');
};

export const formatAppNumber = (money: number, fixedDigits?: number, suffix?: string) => {
  if (!money) {
    return '0';
  }

  const moneyDecimal = Number.isInteger(money) ? money.toFixed(0) : money.toFixed(isNotNil(fixedDigits) ? fixedDigits : 0);

  if (suffix) {
    return moneyDecimal.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix;
  }

  return moneyDecimal.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatAppNumberAllowNull = (money: number, fixedDigits?: number) => {
  if (isNotNil(money)) {
    const moneyDecimal = Number.isInteger(money) ? money.toFixed(0) : money.toFixed(isNotNil(fixedDigits) ? fixedDigits : 3);
    return moneyDecimal.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return money;
  }
};

export const formatPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) {
    return;
  }

  phoneNumber = phoneNumber.replace('+84', '0');
  phoneNumber = phoneNumber.replace(/[^\d]/g, '');

  if (phoneNumber.length === 8) {
    return phoneNumber.replace(/(\d{3})(\d{2})(\d{3})/, '($1) $2-$3');
  }
  if (phoneNumber.length === 9) {
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{3})/, '($1) $2-$3');
  }
  if (phoneNumber.length === 10) {
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }
  if (phoneNumber.length === 11) {
    return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '($1) $2-$3');
  }

  return phoneNumber;
};

export const formatInputPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) {
    return;
  }

  phoneNumber = phoneNumber.replace(/[^\d]/g, '');
  if (phoneNumber.length === 10) {
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }

  return phoneNumber;
};

export const filterSelection = (input, option) => {
  const inputNormalize = input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
  const targetNormalize = option.children
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
  return targetNormalize.includes(inputNormalize);
};

export const dummyRequestUpload = () => {};

export const hasPermission = (module: number, action: number, showNotification?: boolean) => {
  if (PERMISSION_MAPPER.has(module)) {
    return PERMISSION_MAPPER.get(module).includes(action);
  }

  if (showNotification) {
    openNotification(NOTIFICATION.ERROR, 'administration.site-management.validate.not-has-permission');
  }

  return false;
};
