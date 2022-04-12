import React, { useState } from 'react';
import './support.scss';

const support = 'content/images/icons/support.png';
const close = 'content/images/icons/close.svg';

const Support = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="support" onClick={() => setShow(!show)}>
        <img src={support} />
      </div>
      {show && (
        <div className="support-board">
          <div className="board-header">
            <div className="board-title">Liên hệ giúp đỡ</div>
            <div className="board-close" onClick={() => setShow(!show)}>
              <img src={close} />
            </div>
          </div>
          <div className="board-body">
            <div className="contact-item">
              <div className="contact-icon">
                <img src="content/images/icons/24-hours-support.svg" />
              </div>
              <div className="contact-name">
                <p>Trung tâm hỗ trợ </p>
                <p className="phone">028 3825 7257</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <img src="content/images/icons/technical-support.svg" />
              </div>
              <div className="contact-name">
                <p>IT Support </p>
                <p className="phone">028 3825 7257</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <img src="content/images/icons/clock.svg" />
              </div>
              <div className="contact-name">
                <p>Giờ làm việc </p>
                <p className="time">09:00 - 18:00</p>
              </div>
            </div>
          </div>
          <div className="board-footer">
            <div className="contact-icon">
              <img src="content/images/icons/zalo_sharelogo.png" />
            </div>
            <div className="zalo">
              <p>Chat với kỹ thuật viên</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Support;
