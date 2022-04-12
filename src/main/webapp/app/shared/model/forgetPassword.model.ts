import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IForgetPassword {
  id?: string;
  method?: number;
  to?: string;
  validateCode: string;
  newPassword: string;
}

export const defaultValueForgetPassword: Readonly<IForgetPassword> = {
  id: TEXT_EMPTY,
  method: null,
  to: TEXT_EMPTY,
  validateCode: TEXT_EMPTY,
  newPassword: TEXT_EMPTY,
};
