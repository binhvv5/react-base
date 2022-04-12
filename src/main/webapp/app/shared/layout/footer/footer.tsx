import { Col, Row } from 'antd';
import React from 'react';
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <Row>
      <Col md="12">
        <p>
          Copyright © 2020&nbsp;
          <a href="https://infoplusvn.com/" target="blank">
            infoplusvn.com
          </a>
          . All rights reserved.
        </p>
      </Col>
    </Row>
  </div>
);

export default Footer;
