import { Select, Space } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/config/redux/store';
import React, { useEffect, useState } from 'react';
import { translate } from 'react-jhipster';
// import { getBlocks, resetBlocks } from 'app/modules/system/block/reducer/block.reducer';
// import { getBlockUnits, resetBlockUnits } from 'app/modules/system/block/reducer/blockUnit.reducer';
import { useDebounce } from 'app/config/utils/debounce';
import { IParam } from 'app/shared/model/dto.model';
import './block-unit-filter.scss';
import { filterSelection } from 'app/shared/util/global-function';

export interface BlockUnitFilterProps {
  blockId: any;
  setBlockId: any;
  blockUnitId: any;
  setBlockUnitId: any;
  hiddenLabel?: boolean;
}

const BlockUnitFilter = (props: BlockUnitFilterProps) => {
  const dispatch = useAppDispatch();

  const { blockId, setBlockId, blockUnitId, setBlockUnitId, hiddenLabel } = props;
  const [searchBlockUnit, setSearchBlockUnit] = useState();
  const [searching, setSearching] = useState(false);
  const [arrBlock, setArrBlock] = useState([]);
  const debounceSearch = useDebounce(searchBlockUnit, 500);

  // const blocks = useAppSelector(state => state.block.blocks);
  // const blockLoading = useAppSelector(state => state.block.loading);
  // const blockUnits = useAppSelector(state => state.blockUnit.blockUnits);
  // const blockUnitLoading = useAppSelector(state => state.blockUnit.loading);

  useEffect(() => {
    return () => {
      // dispatch(resetBlocks());
      // dispatch(resetBlockUnits());
    };
  }, []);

  useEffect(() => {
    if (blockId || searchBlockUnit) {
      const requestParam: IParam = {
        blockId,
        searchValue: searchBlockUnit,
      };
      // dispatch(getBlockUnits(requestParam));
    }
    setSearching(false);
  }, [blockId, debounceSearch]);

  // const handleClickBlock = () => {
  //   if (blocks.length > 0) {
  //     return;
  //   }
  //   dispatch(getBlocks({}));
  // };

  // const handleClickBlockUnit = () => {
  //   if (blockUnits.length > 0) {
  //     return;
  //   }
  //   dispatch(getBlockUnits({}));
  // };

  const handleChangeBlock = (value: any) => {
    setBlockId(value ? value : null);
    setBlockUnitId(null);
  };

  // const handleChangeBlockUnit = (value: any) => {
  //   setBlockUnitId(value);
  //   blockUnits.forEach(item => {
  //     if (item.id === value) {
  //       setBlockId(item.block?.id);
  //       setArrBlock([
  //         {
  //           id: item.block.id,
  //           name: item.block.name,
  //         },
  //       ]);
  //     }
  //   });
  // };

  const handleSearchBlockUnit = event => {
    setSearching(true);
    setSearchBlockUnit(event);
  };

  // const optionsBlock = (blocks?.length > 0 ? blocks : arrBlock).map(b => (
  //   <Select.Option key={b.id} value={b.id}>
  //     {b.name}
  //   </Select.Option>
  // ));

  // const optionsBlockUnits = blockUnits.map(b => (
  //   <Select.Option key={b.id} value={b.id}>
  //     {b.name}
  //   </Select.Option>
  // ));

  return (
    <>
      {/* <div className="select-filter block-filter">
        <label hidden={hiddenLabel}>{translate('system.block.tab-block-unit.block')}</label>
        <Select
          className="block-filter__select min-width-150"
          dropdownClassName={blockLoading || blocks.length === 0 ? 'hidden' : ''}
          onClick={handleClickBlock}
          onChange={handleChangeBlock}
          allowClear
          value={blockId}
          loading={blockLoading}
          placeholder={translate('general.vehicle.tab-main.blockPlarholder')}
        >
          {optionsBlock}
        </Select>
      </div>

      <div className="select-filter block-filter">
        <label hidden={hiddenLabel}>{translate('general.vehicle.tab-main.blockUnitName')}</label>
        <Select
          className="block-item-filter__select min-width-150"
          dropdownClassName={blockUnitLoading || blockUnits.length === 0 || searching ? 'hidden' : ''}
          onClick={handleClickBlockUnit}
          onChange={handleChangeBlockUnit}
          onSearch={handleSearchBlockUnit}
          allowClear
          showSearch
          value={blockUnitId}
          loading={blockUnitLoading || searching}
          placeholder={translate('general.vehicle.tab-main.blockUnitPlaceholder')}
          filterOption={(input, option) => filterSelection(input, option)}
        >
          {optionsBlockUnits}
        </Select>
      </div> */}
    </>
  );
};

export default BlockUnitFilter;
