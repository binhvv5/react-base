import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { Button, Image, List, Modal } from 'antd';
import { translate } from 'react-jhipster';
import { useAppDispatch, useAppSelector } from 'app/config/redux/store';
import { ICON_STORE_TYPE_ENUM, IMAGE_STATUS_ENUM } from 'app/config/constant/enum';
import { DEFAULT_NAME_IMAGE } from 'app/config/constant/constants';
import { IMAGE_URL } from 'app/config/constant/api';
import './icon-dialog.scss';

interface IChooseIconDialogProps {
  isModalVisible: boolean;
  setModalVisible: any;
  setIcon: any;
  iconType: number;
}

const ChooseIconDialog = (props: IChooseIconDialogProps) => {
  const dispatch = useAppDispatch();
  const draggleRef = React.createRef();

  const { isModalVisible, setModalVisible, setIcon, iconType } = props;

  const [iconList, setIconList] = useState([]);
  const [disabled, setDisabled] = useState(true);

  // const iconStoreListByType = useAppSelector(state => state.iconStoreManagement.iconStoreListByType);

  // useEffect(() => {
  //   if (iconStoreListByType.length > 0) {
  //     const iconIdList = JSON.parse(iconStoreListByType[0].icon);
  //     if (iconIdList) {
  //       setIconList(iconIdList);
  //     }
  //   }
  // }, [iconStoreListByType]);

  const handleChooseIcon = id => {
    setIcon(id);
    setModalVisible(false);
  };

  const handleOk = () => {
    document.getElementById('submit-create-vehicle-type').click();
  };

  const handleCancel = (event: any) => {
    event.stopPropagation();
    setModalVisible(false);
    // props.history.goBack();
  };

  return (
    <>
      <Modal
        maskClosable={false}
        className="modal-choose-icon"
        width={600}
        title={
          <div className="drop-drag" onMouseOver={() => setDisabled(false)} onMouseOut={() => setDisabled(true)}>
            {translate('administration.icon-store.dialog.choose-icon')}
          </div>
        }
        modalRender={modal => (
          <Draggable disabled={disabled}>
            <div ref={draggleRef as React.RefObject<HTMLDivElement>}>{modal}</div>
          </Draggable>
        )}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            {translate('entity.action.cancel')}
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            {translate('entity.action.save')}
          </Button>,
        ]}
      >
        {iconList?.map(id => {
          return (
            <div key={id} onClick={() => handleChooseIcon(id)} className={'image-wrapper'}>
              <Image key={id} preview={false} src={IMAGE_URL + id} />
            </div>
          );
        })}
      </Modal>
    </>
  );
};

export default ChooseIconDialog;
