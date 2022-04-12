/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-09-30 00:03:26
 * @Project: InfoCity
 */

export interface IDepartment {
  id?: string;
  name?: string;
}

export const defaultValue: Readonly<IDepartment> = {
  id: '',
  name: '',
};
