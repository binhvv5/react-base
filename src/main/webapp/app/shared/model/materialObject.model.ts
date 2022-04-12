/**
 * @ Author: Pham Duc Luu
 * @ Create Time: 2021-11-22 13:02:51
 * @ Project: InfoCity
 */

export interface IMaterialObject {
  quantity?: number;
  unitPrice?: number;
  baseAmount?: number;
  taxAmount?: number;
  amount?: number;
}

export const defaultValue: Readonly<IMaterialObject> = {
  quantity: 0,
  unitPrice: 0,
  baseAmount: 0,
  taxAmount: null,
  amount: 0,
};
