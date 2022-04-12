import { Button, Card, Col, Form, Input, Modal, notification, Row } from 'antd';
import Countdown from 'antd/lib/statistic/Countdown';
import { FORMAT_SS } from 'app/config/constant/constants';
import { useAppDispatch, useAppSelector } from 'app/config/redux/store';
import { defaultValueForgetPassword } from 'app/shared/model/forgetPassword.model';
import React, { useEffect, useState } from 'react';
import { translate } from 'react-jhipster';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import '../init/password-reset-init.scss';
import { forgetPassword, renewPassword, reset, resetStatusForget } from '../password-reset.reducer';

export const PasswordResetFinish = (props: RouteComponentProps<any>) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const history = useHistory();
  const [disable, setDisable] = useState(false);
  const [dataForgetPassword, setForgetPassword] = useState(defaultValueForgetPassword);

  const renewPasswordSucess = useAppSelector(state => state.passwordReset.renewPassword);
  const statusForget = useAppSelector(state => state.passwordReset.forgetPassword);

  useEffect(() => {
    if (renewPasswordSucess) {
      history.push('/account/reset/success');
    }
  }, [renewPasswordSucess]);

  useEffect(() => {
    if (statusForget) {
      setDisable(false);
    }
    return () => {
      dispatch(resetStatusForget());
    };
  }, [statusForget]);

  useEffect(() => {
    if (!props.location && !props.location.state) {
      props.history.goBack();
    }
    const $dataForgetPassword = props?.location?.state?.['params'];
    setForgetPassword($dataForgetPassword ?? defaultValueForgetPassword);
    return () => {
      dispatch(reset());
    };
  }, []);

  const handleValidSubmit = value => {
    const newVal = { ...value };
    newVal.method = dataForgetPassword?.method;
    newVal.to = dataForgetPassword?.to;
    if (newVal.newPassword !== newVal.reNewPassword) {
      notification['warning']({
        message: translate('reset.notification.description'),
      });
      return;
    }
    dispatch(renewPassword(newVal));
  };

  const deadline = Date.now() + 2 * 60000;

  const showConfirm = () => {
    Modal.confirm({
      title: translate('reset.finish.modal.title'),
      content: translate('reset.finish.modal.content'),
      onOk: () => getOTP(),
      okText: translate('reset.finish.modal.ok-text'),
      cancelText: translate('reset.finish.modal.cancel-text'),
    });
  };

  const getOTP = () => {
    dispatch(forgetPassword(dataForgetPassword));
  };

  const onFinish = () => {
    setDisable(true);
    showConfirm();
  };

  return (
    <div className="reset-password">
      <Row justify="center">
        <Col md="8">
          <Card title={<div className="title"></div>} bordered={false}>
            <div className="description">
              <h1>{translate('reset.finish.title')}</h1>
              <h3>{translate('reset.finish.input-new-password')}</h3>
            </div>
            <Form form={form} onFinish={handleValidSubmit} labelCol={{ span: 24 }}>
              <Row gutter={[16, 0]}>
                <Col span={20}>
                  <Form.Item
                    className="margin-form"
                    label={translate('reset.finish.form.otp-code')}
                    name="validateCode"
                    rules={[{ required: true }]}
                  >
                    <Input size="large" placeholder={translate('reset.finish.form.placeholder-code')} disabled={disable} />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item className="margin-form" label={<div></div>}>
                    {disable ? (
                      <Countdown format={FORMAT_SS} value={Date.now()} />
                    ) : (
                      <Countdown format={FORMAT_SS} value={deadline} onFinish={onFinish} />
                    )}
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                className="margin-form"
                name="newPassword"
                label={translate('reset.finish.form.new-password')}
                rules={[{ required: true }]}
              >
                <Input.Password
                  size="large"
                  placeholder={translate('reset.finish.form.placeholder-new-password')}
                  autoComplete="new-password"
                  disabled={disable}
                />
              </Form.Item>
              <Form.Item name="reNewPassword" label={translate('reset.finish.form.re-new-password')} rules={[{ required: true }]}>
                <Input.Password
                  size="large"
                  placeholder={translate('reset.finish.form.placeholder-re-new-password')}
                  autoComplete="new-password"
                  disabled={disable}
                />
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

export default PasswordResetFinish;
