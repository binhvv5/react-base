/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-10-04 23:32:14
 * @Project: InfoCity
 */

import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IBlock } from './block.model';
import { IBlockUnit } from './blockUnit.model';

export interface IKeyCard {
  id: string;
  code: string;
  types: number[];
  issueType: number | null;
  issueDate: any | null;
  returnDate: any | null;
  returnMethod: number | null;
  numberPlate: string;
  cost: number | null;
  receiveDeposit: number | null;
  refundDeposit: number | null;
  note: string;
  blockUnitId: string;

  // for logic
  blockUnit?: IBlockUnit | null;
  block?: IBlock | null;
  blockName?: string;
  blockId?: string;
  blockUnitName?: string;
}

export const defaultValue: Readonly<IKeyCard> = {
  id: TEXT_EMPTY,
  code: TEXT_EMPTY,
  types: [],
  issueType: null,
  issueDate: null,
  returnDate: null,
  returnMethod: null,
  numberPlate: TEXT_EMPTY,
  cost: 0,
  receiveDeposit: 0,
  refundDeposit: 0,
  note: TEXT_EMPTY,
  blockUnitId: TEXT_EMPTY,

  // for logic
  blockId: TEXT_EMPTY,
  block: null,
  blockUnit: null,
  blockName: TEXT_EMPTY,
  blockUnitName: TEXT_EMPTY,
};
