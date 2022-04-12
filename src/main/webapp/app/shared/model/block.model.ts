/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-03 11:20:39
 * @Project: InfoCity
 */

export interface IBlock {
  id?: string;
  name?: string;
  type?: number | null;
  bottomFloor?: number | null;
  topFloor?: number | null;
  totalApartment: number | null;
  carCapacity: number | null;
  bikeCapacity: number | null;
  totalSquare: number | null;
}

export const defaultValue: Readonly<IBlock> = {
  id: '',
  name: '',
  type: null,
  bottomFloor: null,
  topFloor: null,
  totalApartment: null,
  carCapacity: null,
  bikeCapacity: null,
  totalSquare: null,
};
