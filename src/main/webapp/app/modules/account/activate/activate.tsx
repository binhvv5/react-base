import { Alert, Col, Row } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/config/redux/store';
import React, { useEffect } from 'react';
import { getUrlParameter, Translate } from 'react-jhipster';
import { Link, RouteComponentProps } from 'react-router-dom';
import { activateAction, reset } from './activate.reducer';

const successAlert = (
  <Alert message="" type="success">
    <Translate contentKey="activate.messages.success">
      <strong>Your user account has been activated.</strong> Please
    </Translate>
    <Link to="/login" className="alert-link">
      <Translate contentKey="global.messages.info.authenticated.link">sign in</Translate>
    </Link>
    .
  </Alert>
);

const failureAlert = (
  <Alert message="" type="warning">
    <Translate contentKey="activate.messages.error">
      <strong>Your user could not be activated.</strong> Please use the registration form to sign up.
    </Translate>
  </Alert>
);

export const ActivatePage = (props: RouteComponentProps<{ key: any }>) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const key = getUrlParameter('key', props.location.search);
    dispatch(activateAction(key));
    return () => {
      dispatch(reset());
    };
  }, []);

  const { activationSuccess, activationFailure } = useAppSelector(state => state.activate);

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h1>
            <Translate contentKey="activate.title">Activation</Translate>
          </h1>
          {activationSuccess ? successAlert : undefined}
          {activationFailure ? failureAlert : undefined}
        </Col>
      </Row>
    </div>
  );
};

export default ActivatePage;
