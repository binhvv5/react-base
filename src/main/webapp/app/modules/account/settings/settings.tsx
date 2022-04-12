import { UploadOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Modal, Select, Skeleton, Upload } from 'antd';
import { IMAGE_URL } from 'app/config/constant/api';
import { FORMAT_YYYY_MM_DD, PHONE_REGEXP, ROLE_TITLE, TEXT_EMPTY } from 'app/config/constant/constants';
import { GENDERS } from 'app/config/constant/enum';
import { useAppDispatch, useAppSelector } from 'app/config/redux/store';
import { deleteFile, getBase64, uploadFile } from 'app/config/utils/file-utils';
import { IFile } from 'app/shared/model/dto.model';
import { IUser } from 'app/shared/model/user.model';
import { getSession } from 'app/shared/reducers/authentication';
import { updateManager } from 'app/shared/reducers/user.reducer';
import { dummyRequestUpload } from 'app/shared/util/global-function';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { translate } from 'react-jhipster';
import './settings.scss';

export const SettingsPage = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [idFileRemove, setIdFileRemove] = useState(TEXT_EMPTY);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewTitle, setPreviewTitle] = useState(TEXT_EMPTY);
  const [previewImage, setPreviewImage] = useState(TEXT_EMPTY);

  const account = useAppSelector(state => state.authentication.account);
  const updateSuccess = useAppSelector(state => state.userManagement.updateSuccess);
  const loading = useAppSelector(state => state.authentication.loading);

  useEffect(() => {
    dispatch(getSession());
  }, []);

  useEffect(() => {
    const objClone = { ...account };
    objClone.birthday = objClone.birthday ? moment(new Date(objClone.birthday), FORMAT_YYYY_MM_DD) : null;

    if (account.avatar) {
      setFileList([
        {
          id: account.avatar,
          name: account.fullName,
          url: `${IMAGE_URL}${account.avatar}`,
        },
      ]);
    }
    form.setFieldsValue(objClone);
  }, [account]);

  useEffect(() => {
    if (updateSuccess) {
      dispatch(getSession());
    }
  }, [updateSuccess]);

  const handleChangeImage = (objectFile: any) => {
    setFileList(objectFile.fileList);

    // Action remove file
    if (objectFile.file && objectFile.file.id && objectFile.file.status === 'removed') {
      setIdFileRemove(objectFile.file.id);
    }
  };

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const gengerTypeOption = GENDERS.map($type => (
    <Select.Option key={$type.value} value={$type.value}>
      {translate($type.text)}
    </Select.Option>
  ));

  const handleSave = async (dataForm: IUser) => {
    let fileResponse: IFile = null;
    if (fileList[0] && fileList[0].id !== account.avatar) {
      fileResponse = await uploadFile(fileList[0].originFileObj);
    }
    if (idFileRemove) {
      deleteFile(idFileRemove);
    }
    if (fileResponse?.fileId) {
      dataForm.avatar = fileResponse.fileId;
    }
    dataForm.id = account.id;
    dispatch(updateManager(dataForm));
  };

  return (
    <div className="settings">
      {loading ? (
        <Skeleton avatar paragraph={{ rows: 4 }} />
      ) : (
        <>
          <div className="avatar">
            <Upload
              customRequest={() => dummyRequestUpload()}
              listType="picture-card"
              multiple={false}
              beforeUpload={() => false}
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChangeImage}
            >
              {fileList.length < 1 && <UploadOutlined />}
            </Upload>
            <Modal
              maskClosable={false}
              visible={previewVisible}
              title={previewTitle}
              footer={null}
              onCancel={() => setPreviewVisible(false)}
            >
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </div>
          <Form labelAlign="left" labelCol={{ span: 3 }} form={form} onFinish={handleSave}>
            <Form.Item colon={false} name="username" label={translate('system.manager.list.username')}>
              <Input disabled />
            </Form.Item>
            <Form.Item colon={false} name="fullName" label={translate('system.manager.list.fullName')} rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              colon={false}
              name="phone"
              rules={[{ required: true }, { pattern: PHONE_REGEXP }]}
              label={translate('system.manager.list.phone')}
            >
              <Input />
            </Form.Item>
            <Form.Item colon={false} name="email" label={translate('system.manager.list.email')} rules={[{ type: 'email' }]}>
              <Input />
            </Form.Item>
            <Form.Item colon={false} name="birthday" label={translate('system.manager.insert.birthday')}>
              <DatePicker format={FORMAT_YYYY_MM_DD} />
            </Form.Item>
            <Form.Item colon={false} name="gender" label={translate('general.resident.gender')}>
              <Select>{gengerTypeOption}</Select>
            </Form.Item>
            <Form.Item colon={false} name="role" label={translate('system.manager.list.role')}>
              <Select disabled>
                {Object.keys(ROLE_TITLE).map(role => (
                  <Select.Option value={role} key={role}>
                    {translate(ROLE_TITLE[role])}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item colon={false} name="position" label={translate('system.manager.insert.position')}>
              <Input disabled />
            </Form.Item>

            <div className="submit-button">
              <Button type="primary" htmlType="submit">
                {translate('keyIssue.change')}
              </Button>
            </div>
          </Form>
        </>
      )}
    </div>
  );
};

export default SettingsPage;
