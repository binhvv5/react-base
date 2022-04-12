/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-09-19 11:08:15
 * @Project: InfoCity
 */
import { BREADCRUMBS_MAP } from 'app/config/constant/constants';
import React from 'react';
import { translate } from 'react-jhipster';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { Link } from 'react-router-dom';
import './breadcrumbs.scss';

const PureBreadcrumbs = ({ breadcrumbs }) => {
  const renderBreadcrumb = (index: number, location: string, match: any) => {
    const key = BREADCRUMBS_MAP[location];
    if (key) {
      if (index === breadcrumbs.length - 1) {
        return <span className="last">{translate(key)}</span>;
      } else {
        return (
          <Link to={match.url}>
            <span className="page-name">{translate(key)}</span>
          </Link>
        );
      }
    }
  };

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(({ breadcrumb, match }, index: number) => (
        <div className="item-breadcrumb" key={match.url}>
          {renderBreadcrumb(index, breadcrumb.props.children, match)}
        </div>
      ))}
    </div>
  );
};

export default withBreadcrumbs()(PureBreadcrumbs);
