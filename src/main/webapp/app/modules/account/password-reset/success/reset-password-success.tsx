import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row } from 'antd';
import React from 'react';
import { translate } from 'react-jhipster';
import { useHistory } from 'react-router-dom';
import '../init/password-reset-init.scss';

export const PasswordResetInit = () => {
  const history = useHistory();
  return (
    <div className="reset-password">
      <Row justify="center">
        <Col md="8">
          <Card title={<div className="title"></div>} bordered={false}>
            <div className="img-success"></div>
            <div className="description">
              <h1>{translate('reset.success.change-success')}</h1>
              <h3>{translate('reset.success.desc')}</h3>
            </div>

            <Button
              className="button"
              size="large"
              icon={<ArrowLeftOutlined />}
              onClick={() => history.push('/account/login')}
              type="primary"
            >
              {translate('reset.success.button-back')}
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PasswordResetInit;
