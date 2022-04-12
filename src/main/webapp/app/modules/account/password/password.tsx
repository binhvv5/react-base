import { Alert, Button, Form, Input } from 'antd';
import { NOTIFICATION, TEXT_EMPTY } from 'app/config/constant/constants';
import { useAppDispatch, useAppSelector } from 'app/config/redux/store';
import { getSession } from 'app/shared/reducers/authentication';
import { openNotification } from 'app/shared/util/entity-utils';
import React, { useEffect, useState } from 'react';
import { translate } from 'react-jhipster';
import { reset, savePassword } from './password.reducer';
import './password.scss';

export const PasswordPage = () => {
  const [password, setPassword] = useState(TEXT_EMPTY);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(reset());
    dispatch(getSession());
    return () => {
      dispatch(reset());
    };
  }, []);

  const handleValidSubmit = ({ oldPassword, newPassword }) => {
    // eslint-disable-next-line no-console
    console.log(oldPassword);
    dispatch(savePassword({ oldPassword, newPassword }));
  };

  const updatePassword = event => setPassword(event.target.value);

  const account = useAppSelector(state => state.authentication.account);
  const successMessage = useAppSelector(state => state.password.successMessage);
  const errorMessage = useAppSelector(state => state.password.errorMessage);

  useEffect(() => {
    if (successMessage) {
      openNotification(NOTIFICATION.SUCCESS, successMessage);
    } else if (errorMessage) {
      openNotification(NOTIFICATION.ERROR, errorMessage);
    }
  }, [successMessage, errorMessage]);

  const validateConfigPassword = (rules, value: string, callback: any) => {
    if (value !== password) {
      callback(translate('global.messages.error.dontmatch'));
    } else {
      callback();
    }
  };

  return (
    <div className="change-password">
      <div className="warning">
        <Alert message={translate('entity.validation.password.warn')} type="warning" />
      </div>
      <Form form={form} labelAlign="left" labelCol={{ span: 5 }} onFinish={handleValidSubmit}>
        <Form.Item colon={false} name="oldPassword" label={translate('global.form.oldPassword.label')} rules={[{ required: true }]}>
          <Input.Password placeholder={translate('global.form.oldPassword.placeholder')} />
        </Form.Item>

        <Form.Item
          colon={false}
          name="newPassword"
          label={translate('global.form.newpassword.label')}
          rules={[{ required: true }, { max: 50 }, { min: 5 }]}
        >
          <Input.Password onChange={updatePassword} placeholder={translate('global.form.confirmpassword.placeholder')} />
        </Form.Item>

        <Form.Item
          colon={false}
          name="newPasswordConfirm"
          label={translate('global.form.confirmpassword.placeholder')}
          rules={[{ required: true }, { max: 50 }, { min: 5 }, { validator: validateConfigPassword }]}
        >
          <Input.Password placeholder={translate('global.form.confirmpassword.placeholder')} />
        </Form.Item>

        {/* <PasswordStrengthBar password={password} /> */}

        <div className="submit-password">
          <Button type="primary" htmlType="submit">
            {translate('keyIssue.change')}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PasswordPage;
