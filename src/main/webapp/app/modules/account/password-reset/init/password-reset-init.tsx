import { Button, Card, Col, Form, Input, Radio, Row } from 'antd';
import { RESET_PASSWORD, TYPE_RESET_PASSWORD } from 'app/config/constant/enum';
import { useAppDispatch, useAppSelector } from 'app/config/redux/store';
import React, { useEffect, useState } from 'react';
import { translate } from 'react-jhipster';
import { useHistory } from 'react-router-dom';
import { forgetPassword, reset } from '../password-reset.reducer';
import './password-reset-init.scss';

export const PasswordResetInit = () => {
  const dispatch = useAppDispatch();
  const [radioValue, setRadioValue] = useState(TYPE_RESET_PASSWORD.PHONE_NUMBER);
  const [form] = Form.useForm();
  const history = useHistory();
  const [dataForget, setDataForget] = useState();

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, []);

  const handleValidSubmit = value => {
    const newVal = { ...value };
    newVal.method = radioValue;
    setDataForget(newVal);
    dispatch(forgetPassword(newVal));
  };

  const forgetPasswordSucess = useAppSelector(state => state.passwordReset.forgetPassword);

  useEffect(() => {
    if (forgetPasswordSucess) {
      history.push('/account/reset/finish', { params: dataForget });
    }
  }, [forgetPasswordSucess]);

  const changeValue = e => {
    setRadioValue(e.target.value);
  };

  const optionResetPassword = RESET_PASSWORD?.map(item => (
    <Radio key={item?.value} value={item?.value}>
      {translate(item?.text)}
    </Radio>
  ));

  return (
    <div className="reset-password">
      <Row justify="center">
        <Col md="8">
          <Card title={<div className="title"></div>} bordered={false}>
            <div className="description">
              <h1>{translate('reset.init.forget-password')}</h1>
              <h3>{translate('reset.init.choose-type')}</h3>
            </div>
            <Form form={form} onFinish={handleValidSubmit}>
              <Form.Item name="method" className="form-radio">
                <Radio.Group value={radioValue} defaultValue={radioValue} onChange={changeValue}>
                  {optionResetPassword}
                </Radio.Group>
              </Form.Item>

              <Form.Item name="to" rules={[{ required: true }]}>
                <Input size="large" placeholder={translate('reset.init.form.placeholder')} />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" size="large">
                  {translate('reset.btn')}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PasswordResetInit;
