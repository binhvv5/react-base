import { IBlock } from 'app/shared/model/block.model';
import { IBlockUnit } from 'app/shared/model/blockUnit.model';
import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IHeadcountConfig {
  id?: string;
  feeType?: number;
  fromMonth?: string;
  toMonth?: string;
  numberOfPeople?: number;
  block?: IBlock;
  blockUnitId?: string;
  blockUnit?: IBlockUnit;
}

export const defaultHeadcountConfig: Readonly<IHeadcountConfig> = {
  id: TEXT_EMPTY,
  feeType: 0,
  fromMonth: TEXT_EMPTY,
  toMonth: TEXT_EMPTY,
  numberOfPeople: 0,
};
