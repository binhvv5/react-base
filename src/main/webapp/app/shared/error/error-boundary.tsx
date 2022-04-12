import React from 'react';
import { Button, Modal } from 'antd';
import { translate } from 'react-jhipster';
import { useHistory } from 'react-router';

interface IErrorBoundaryProps {
  readonly children: JSX.Element | JSX.Element[];
}

interface IErrorBoundaryState {
  readonly error: any;
  readonly errorInfo: any;
  readonly isModalVisible: any;
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  readonly state: IErrorBoundaryState = {
    error: undefined,
    errorInfo: undefined,
    isModalVisible: true,
  };

  constructor(props) {
    super(props);
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  handleCancel() {
    this.setState({
      isModalVisible: false,
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    if (errorInfo) {
      const errorDetails =
        process.env.NODE_ENV === 'development' ? (
          <details className="preserve-space">
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        ) : undefined;
      return (
        <Modal
          maskClosable={false}
          className="popup-insert-supplier"
          width={1000}
          title={<div className="drop-drag">Có lỗi xảy ra</div>}
          visible={this.state.isModalVisible}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              {translate('entity.action.cancel')}
            </Button>,
          ]}
        >
          <div>
            <h2 className="error">
              Có lỗi xảy ra. Vui lòng thông báo lỗi này tới bộ phận CSKH của Infocity. Xin chân thành cảm ơn quý khách
            </h2>
            {errorDetails}
          </div>
        </Modal>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
