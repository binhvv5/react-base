/* eslint-disable @typescript-eslint/indent */
import { Col, Form, Select, Spin } from 'antd';
import type { FormInstance } from 'antd/es/form/Form';
import { useAppDispatch, useAppSelector } from 'app/config/redux/store';
// import { getBlocks } from 'app/modules/system/block/reducer/block.reducer';
// import { getBlockUnits, resetBlockUnits } from 'app/modules/system/block/reducer/blockUnit.reducer';
import { IBlock } from 'app/shared/model/block.model';
import { IParam } from 'app/shared/model/dto.model';
import { getResidents, resetResidentsSelect } from 'app/shared/reducers/user.reducer';
import React, { useEffect, useState } from 'react';

export interface BlockUnitFilterProps {
  form: FormInstance;
  className?: string;
  isRequired?: boolean;
  span?: number;
  hasBlockUnit?: boolean;
  recordBlockUnit?: any;
  hasResident?: boolean;
  recordResident?: any;
}

const BlockUnitFormFilter = ({
  form,
  className,
  isRequired,
  span,
  hasBlockUnit,
  recordBlockUnit,
  hasResident,
  recordResident,
}: BlockUnitFilterProps) => {
  const dispatch = useAppDispatch();

  const [blockId, setBlockId] = useState(recordBlockUnit?.block?.id);
  const [blockUnitId, setBlockUnitId] = useState(recordBlockUnit?.id);
  const [residentId, setResidentId] = useState(recordResident?.id);
  const [arrBlock, setArrBlock] = useState([]);
  const [arrBlockUnit, setArrBlockUnit] = useState([]);
  const [arrResident, setArrResident] = useState([]);

  // const blocksAllId = useAppSelector(state => state.block.blocksAllId);
  // const blocksById = useAppSelector(state => state.block.blocksById);
  // const blockLoading = useAppSelector(state => state.block.loading);
  // const blockUnitsAllId = useAppSelector(state => state.blockUnit.blockUnitsAllId);
  // const blockUnitsById = useAppSelector(state => state.blockUnit.blockUnitsById);
  // const blockUnitLoading = useAppSelector(state => state.blockUnit.loading);
  const residentsById = useAppSelector(state => state.userManagement.residentsById);
  const residentsAllId = useAppSelector(state => state.userManagement.residentsAllId);
  const loadingResidents = useAppSelector(state => state.userManagement.loading);

  // In case: having any problem from BE, Skeleton component makes form re-render again
  // Thus, this component is also re-rendered (means states are changed) but form values still stay there
  // Need set some states again because those state are used for some conditions as disable...
  useEffect(() => {
    if (!recordBlockUnit) {
      if (form.getFieldValue('blockId')) {
        setBlockId(form.getFieldValue('blockId'));
      }

      if (form.getFieldValue('blockUnitId')) {
        setBlockUnitId(form.getFieldValue('blockUnitId'));
      }

      if (form.getFieldValue('residentId')) {
        setResidentId(form.getFieldValue('residentId'));
      }
    }
  }, []);

  // useEffect(() => {
  //   if (blocksAllId?.length > 0) {
  //     const arrBlocksMap: IBlock[] = [];
  //     blocksAllId?.map(item => arrBlocksMap.push(blocksById?.[item]));
  //     setArrBlock(arrBlocksMap);
  //   }
  //   if (blockUnitsAllId?.length > 0) {
  //     const arrBlocksUnitMap: IBlock[] = [];
  //     blockUnitsAllId?.map(item => arrBlocksUnitMap.push(blockUnitsById?.[item]));
  //     setArrBlockUnit(arrBlocksUnitMap);
  //   }
  //   if (residentsAllId?.length > 0) {
  //     const arrResidentsMap: IBlock[] = [];
  //     residentsAllId?.map(item => arrResidentsMap.push(residentsById?.[item]));
  //     setArrResident(arrResidentsMap);
  //   }
  // }, [blocksAllId, blockUnitsAllId, residentsAllId]);

  // useEffect(() => {
  //   if (recordBlockUnit?.block?.id) {
  //     if (!hasResident && !hasBlockUnit) {
  //       const objectBlock = blocksById[recordBlockUnit?.block?.id] ?? recordBlockUnit?.block;
  //       form.setFieldsValue({
  //         block: objectBlock,
  //       });
  //     }
  //     setBlockId(recordBlockUnit?.block?.id);
  //   }
  //   if (recordBlockUnit?.id) {
  //     if (!hasResident) {
  //       const objectBlockUnit = blocksById[recordBlockUnit?.id] ?? recordBlockUnit;
  //       form.setFieldsValue({
  //         blockUnit: !hasResident && objectBlockUnit,
  //       });
  //     }
  //     setBlockUnitId(recordBlockUnit?.id);
  //   }
  // }, [recordBlockUnit]);

  // useEffect(() => {
  //   if (recordResident?.id) {
  //     const objectResident = blocksById[recordResident?.id] ?? recordResident;
  //     form.setFieldsValue({
  //       resident: objectResident,
  //     });
  //     setResidentId(recordResident?.id);
  //   }
  // }, [recordResident]);

  // const handleChangeBlock = (value: any) => {
  //   setBlockId(value ? value : null);
  //   setBlockUnitId(null);
  //   dispatch(resetBlockUnits());
  //   dispatch(resetResidentsSelect());
  //   form.setFieldsValue({
  //     blockUnitId: null,
  //     residentId: null,
  //   });
  //   if (!hasResident && !hasBlockUnit) {
  //     const objectBlock = blocksById[value];
  //     form.setFieldsValue({
  //       block: objectBlock,
  //     });
  //   }
  // };

  // const handleChangeBlockUnit = (value: any) => {
  //   setBlockUnitId(value ? value : null);
  //   dispatch(resetResidentsSelect());
  //   form.setFieldsValue({
  //     residentId: null,
  //   });
  //   if (!hasResident) {
  //     const objectBlockUnit = blockUnitsById[value];
  //     form.setFieldsValue({
  //       blockUnit: objectBlockUnit,
  //     });
  //   }
  // };

  const handleChangeResident = (value: any) => {
    setResidentId(value ? value : null);
    const objectResident = residentsById[value];
    form.setFieldsValue({
      resident: objectResident,
    });
  };

  // const optionsBlock = () => {
  //   const $arrBlockList: any = [...arrBlock];
  //   if (recordBlockUnit?.block?.id && !blocksAllId.includes(recordBlockUnit?.block?.id)) {
  //     $arrBlockList.push({
  //       ...recordBlockUnit?.block,
  //     });
  //   }

  //   return $arrBlockList.map(val => (
  //     <Select.Option key={val.id} value={val.id}>
  //       {val.name}
  //     </Select.Option>
  //   ));
  // };

  // const optionsBlockUnit = () => {
  //   const $arrBlockUnitList: any = [...arrBlockUnit];
  //   if (recordBlockUnit?.id && !blockUnitsAllId.includes(recordBlockUnit?.id)) {
  //     $arrBlockUnitList.push({
  //       ...recordBlockUnit,
  //     });
  //   }

  //   return $arrBlockUnitList.map(val => (
  //     <Select.Option key={val.id} value={val.id}>
  //       {val.name}
  //     </Select.Option>
  //   ));
  // };

  const optionsResidents = () => {
    const $arrResidentList: any = [...arrResident];
    if (recordResident?.id && !residentsAllId.includes(recordResident?.id)) {
      $arrResidentList.push({
        ...recordResident,
      });
    }

    return $arrResidentList.map(val => (
      <Select.Option key={val.id} value={val.id}>
        {val.fullName}
      </Select.Option>
    ));
  };

  // const handleClickBlock = () => {
  //   if (blocksAllId.length > 0) {
  //     return;
  //   }
  //   dispatch(getBlocks({}));
  // };

  // const handleClickBlockUnit = () => {
  //   if (blockUnitsAllId.length > 0 || !blockId) {
  //     return;
  //   }
  //   const requestParam: IParam = { blockId };
  //   dispatch(getBlockUnits(requestParam));
  // };

  const handleClickResident = () => {
    if (residentsAllId.length > 0 || !blockUnitId) {
      return;
    }
    const request: IParam = { blockUnitId };
    dispatch(getResidents(request));
  };

  return (
    <>
      {/* <Col span={span ?? 12}>
        <Spin spinning={blockLoading}>
          <Form.Item colon={false} name="block" required label={translate('general.resident.block')}>
            <Form.Item
              className="hidden-label"
              noStyle
              colon={false}
              name="blockId"
              label={translate('general.resident.block')}
              rules={isRequired && [{ required: true }]}
            >
              <Select
                onChange={handleChangeBlock}
                onClick={handleClickBlock}
                allowClear
                showSearch
                value={blockId}
                loading={blockLoading}
                filterOption={(input, option) => filterSelection(input, option)}
                placeholder={translate('general.resident.form.block.place-holder')}
                notFoundContent={translate('general.resident.form.block.not-found')}
                className={className}
              >
                {optionsBlock()}
              </Select>
            </Form.Item>
          </Form.Item>
        </Spin>
      </Col> */}
      {/* {hasBlockUnit && (
        <Col span={span ?? 12}>
          <Spin spinning={blockUnitLoading}>
            <Form.Item colon={false} name="blockUnit" required label={translate('general.resident.blockUnit')}>
              <Form.Item
                className="hidden-label"
                noStyle
                colon={false}
                name="blockUnitId"
                label={translate('general.resident.blockUnit')}
                rules={isRequired && [{ required: true }]}
              >
                <Select
                  onChange={handleChangeBlockUnit}
                  onClick={handleClickBlockUnit}
                  onSearch={handleSearchBlocksUnit}
                  allowClear
                  showSearch
                  disabled={!blockId}
                  value={blockUnitId}
                  loading={blockUnitLoading}
                  placeholder={translate('general.resident.form.block-unit.place-holder')}
                  filterOption={(input, option) => filterSelection(input, option)}
                  className={className}
                  notFoundContent={translate('general.resident.form.block-unit.not-found')}
                >
                  {optionsBlockUnit()}
                </Select>
              </Form.Item>
            </Form.Item>
          </Spin>
        </Col>
      )}
      {hasResident && hasBlockUnit && (
        <Col span={span ?? 12}>
          <Form.Item colon={false} name="resident" required label={translate('general.vehicle.tab-main.selectResident')}>
            <Form.Item
              className="hidden-label"
              noStyle
              colon={false}
              label={translate('general.vehicle.tab-main.selectResident')}
              name="residentId"
              rules={[{ required: true }]}
            >
              <Select
                onClick={handleClickResident}
                onChange={handleChangeResident}
                allowClear
                showSearch
                value={residentId}
                loading={loadingResidents}
                disabled={!blockUnitId}
                placeholder={translate('general.vehicle.tab-main.selectResidentPlarholder')}
                className={className}
                filterOption={(input, option) => filterSelection(input, option)}
                notFoundContent={translate('general.vehicle.tab-main.not-found')}
              >
                {optionsResidents()}
              </Select>
            </Form.Item>
          </Form.Item>
        </Col>
      )} */}
    </>
  );
};

export default BlockUnitFormFilter;
