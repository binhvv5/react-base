import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Alert, Avatar, Button, Col, Form, Input } from 'antd';
import { DEFAULT_LOCALE } from 'app/config/constant/constants';
import { useAppDispatch, useAppSelector } from 'app/config/redux/store';
import { login } from 'app/shared/reducers/authentication';
import { setLocale } from 'app/shared/reducers/locale';
import React, { useState } from 'react';
import { translate } from 'react-jhipster';
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import './login.scss';

const vnPath = '../../../../content/images/icons/vietnamese.svg';
const enPath = '../../../../content/images/icons/english.svg';
const koPath = '../../../../content/images/icons/korea.svg';

export const Login = (props: RouteComponentProps<any>) => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  const loginError = useAppSelector(state => state.authentication.loginError);
  const [langActive, setLangActive] = useState(DEFAULT_LOCALE);

  const handleChangeLang = (key: string) => {
    setLangActive(key);
    dispatch(setLocale(key));
  };

  const handleLogin = ({ username, password }) => dispatch(login(username, password));

  const { location } = props;
  const { from } = (location.state as any) || { from: { pathname: '/', search: location.search } };
  if (isAuthenticated) {
    return <Redirect to={from} />;
  }

  const renderLabel = (key: string) => {
    return <p className="text-label">{translate(key)}</p>;
  };

  return (
    <>
      <div className="loggin-wrapper">
        <div className="main-frame">
          <Col md="12">
            {loginError ? (
              <Alert
                icon={<ExclamationCircleOutlined />}
                className="alert-message"
                message={translate('login.messages.error.authentication')}
                type="error"
                showIcon
              />
            ) : null}
          </Col>

          <div className="main-frame_form">
            <div className="language">
              <p className="label">{translate('login.language')}</p>
              <div className="language-action">
                <div onClick={() => handleChangeLang('vi')} className={`btn-change-lang ${langActive === 'vi' ? 'lang-active' : ''}`}>
                  <span className="btn-lang">
                    <Avatar size="small" src={vnPath} />
                    <span className="language-name">{translate('i18n.vn')}</span>
                  </span>
                </div>
                <div onClick={() => handleChangeLang('en')} className={`btn-change-lang ${langActive === 'en' ? 'lang-active' : ''}`}>
                  <span className="btn-lang">
                    <Avatar size="small" src={enPath} />
                    <span className="language-name">{translate('i18n.en')}</span>
                  </span>
                </div>
                <div onClick={() => handleChangeLang('ko')} className={`btn-change-lang ${langActive === 'ko' ? 'lang-active' : ''}`}>
                  <span className="btn-lang">
                    <Avatar size="small" src={koPath} />
                    <span className="language-name">{translate('i18n.ko')}</span>
                  </span>
                </div>
              </div>
            </div>

            <Form name="login-form" className="login-form" layout="vertical" autoComplete="off" onFinish={handleLogin}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: translate('global.form.username.require'),
                  },
                ]}
                label={renderLabel('global.form.username.label')}
                name="username"
              >
                <Input placeholder={translate('global.form.username.placeholder')} />
              </Form.Item>

              <Form.Item
                rules={[
                  {
                    required: true,
                    message: translate('global.form.password.require'),
                  },
                ]}
                label={renderLabel('login.form.password')}
                name="password"
              >
                <Input.Password className="item-password" placeholder={translate('login.form.password.placeholder')} />
              </Form.Item>

              <div className="main-frame_forget">
                <p className="forget-password">
                  <Link to="/account/reset/request">
                    <span>{translate('global.form.password.forgot')}</span>
                  </Link>
                </p>
              </div>

              <Form.Item>
                <Button className="btn-login" type="primary" htmlType="submit">
                  {translate('login.form.button')}
                </Button>
              </Form.Item>
            </Form>

            {/* <Form onSubmit={handleSubmit(form)}>
              <div className="main-frame_form_login">
                <ValidatedField
                  name="username"
                  label={translate('global.form.username.label')}
                  placeholder={translate('global.form.username.placeholder')}
                  required
                  data-cy="username"
                  validate={{ required: translate('global.form.username.require') }}
                  register={register}
                  error={errors.username}
                  isTouched={touchedFields.username}
                />
                <ValidatedField
                  name="password"
                  type="password"
                  label={translate('login.form.password')}
                  placeholder={translate('login.form.password.placeholder')}
                  required
                  data-cy="password"
                  validate={{ required: translate('global.form.password.require') }}
                  register={register}
                  error={errors.password}
                  isTouched={touchedFields.password}
                />
              </div>

              <div className="main-frame_forget">
                <p className="forget-password">
                  <Link to="/account/reset/request">
                    <span>{translate('global.form.password.forgot')}</span>
                  </Link>
                </p>
              </div>

              <Button className="btn btn-login" type="submit" data-cy="submit">
                {translate('login.form.button')}
              </Button>
            </Form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
