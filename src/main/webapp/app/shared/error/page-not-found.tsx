import { Alert } from 'antd';
import React from 'react';
import { Translate } from 'react-jhipster';

class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <Alert message={<Translate contentKey="error.http.404">The page does not exist.</Translate>} type="warning"></Alert>
      </div>
    );
  }
}

export default PageNotFound;
