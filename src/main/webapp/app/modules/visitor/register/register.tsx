import { Alert, Button, Form, Input } from 'antd';
import { PHONE_REGEXP } from 'app/config/constant/constants';
import React from 'react';
import { translate } from 'react-jhipster';
import './register.scss';

const ruleRequire = [
  {
    required: true,
    message: translate('entity.validation.required'),
  },
];

const Register = () => {
  return (
    <>
      <div className="register-visitor">
        <div className="title-page">{translate('visitor.page-title')}</div>

        <div className="message">
          <Alert message={translate('visitor.warning')} type="warning" />
        </div>

        <Form labelAlign="left" layout="vertical">
          <Form.Item name="passport" label={translate('visitor.passport')} rules={ruleRequire}>
            <Input />
          </Form.Item>

          <Form.Item name="fullName" label={translate('visitor.full-name')} rules={ruleRequire}>
            <Input />
          </Form.Item>

          <Form.Item name="phone" label={translate('visitor.phone')} rules={[{ pattern: PHONE_REGEXP }]}>
            <Input />
          </Form.Item>

          <Form.Item name="room" label={translate('visitor.room')} rules={ruleRequire}>
            <Input />
          </Form.Item>

          <Form.Item name="address" label={translate('visitor.address')}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="reason" label={translate('visitor.reason')}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              {translate('entity.action.register')}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Register;
