import { BellOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Badge, List, Popover, Tooltip } from 'antd';
import { FIELD_CREATED_DATE, NOTIFICATION } from 'app/config/constant/constants';
import { onMessageListener } from 'app/config/firebase/firebase';
import { useAppDispatch, useAppSelector } from 'app/config/redux/store';
import { IParam } from 'app/shared/model/dto.model';
import { openNotification } from 'app/shared/util/entity-utils';
import VirtualList from 'rc-virtual-list';
import React, { useEffect, useState } from 'react';
import { translate } from 'react-jhipster';
import { getNotifications, readNotification, resetReadNoti } from '../notification.reducer';

export const NotificationMenu = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [asc, setAsc] = useState(false);
  const ContainerHeight = 400;

  const notifications = useAppSelector(state => state.notifications.notifications);
  const totalUnread = useAppSelector(state => state.notifications.totalUnread);
  const updateSuccess = useAppSelector(state => state.notifications.updateSuccess);

  onMessageListener().then((payload: any) => {
    getNoti();
    const { notification } = payload;
    openNotification(NOTIFICATION.INFO, '', '', notification?.body);
  });

  const getNoti = () => {
    const sorts = [
      {
        field: FIELD_CREATED_DATE,
        asc,
      },
    ];
    dispatch(getNotifications({ page, pageSize, sorts }));
  };

  const onScroll = e => {
    const height = Number((e.target.scrollHeight - e.target.scrollTop).toFixed(0));
    if (height === ContainerHeight) {
      setPageSize(pageSize + 10);
    }
  };

  useEffect(() => {
    getNoti();
  }, [page, pageSize, asc]);

  useEffect(() => {
    if (updateSuccess) getNoti();
    return () => {
      dispatch(resetReadNoti());
    };
  }, [updateSuccess]);

  const handleChangeNoti = (id: string) => {
    const request: IParam = { id };
    dispatch(readNotification(request));
  };

  const handleReadAll = () => {
    const request: IParam = { readAll: true };
    dispatch(readNotification(request));
  };

  const content = (
    <div className={'notification'}>
      <List>
        <VirtualList data={notifications} height={ContainerHeight} itemHeight={47} itemKey="notification" onScroll={onScroll}>
          {item =>
            item?.isRead ? (
              <List.Item className={'notification-item-read'}>
                <List.Item.Meta title={item.title} description={<div dangerouslySetInnerHTML={{ __html: item.content }} />} />
                <EllipsisOutlined className="icon-notification" />
              </List.Item>
            ) : (
              <List.Item className={'notification-item'} onClick={() => handleChangeNoti(item?.id)}>
                <List.Item.Meta title={item.title} description={<div dangerouslySetInnerHTML={{ __html: item.content }} />} />
                <EllipsisOutlined className="icon-notification" />
              </List.Item>
            )
          }
        </VirtualList>
      </List>
    </div>
  );

  return (
    <Popover
      title={
        <div className="title-header">
          <div>
            {translate('notification.title')} ({totalUnread})
          </div>
          <Tooltip title={translate('notification.tooltip-title')}>
            <img
              onClick={handleReadAll}
              src="../../../../content/images/icons/check-all.svg"
              className="icon-read-all"
              alt={translate('notification.tooltip-title')}
              width="27px"
            ></img>
          </Tooltip>
        </div>
      }
      placement="bottomRight"
      trigger="click"
      overlayClassName={'notification-popover'}
      key="notifications"
      content={content}
    >
      <Badge count={totalUnread} className="icon-button" offset={[-10, 10]}>
        <BellOutlined className="icon-font" />
      </Badge>
    </Popover>
  );
};
