import React from 'react';
import { Pagination } from 'antd';

import styles from './Pagination.module.css';

const PaginationComp = (props) => {
  const change = (page, pageSize) => {
    if (props.Auth) {
      props.getAuthListThunk(page);
    } else {
      props.getListThunk(page);
    }
  };
  return (
    <div className={styles.container}>
      <Pagination
        className={styles.pagination}
        onChange={(page, pageSize) => change(page, pageSize)}
        defaultPageSize={1}
        defaultCurrent={1}
        current={props?.CurrentPage || 1}
        total={props?.PageCount || 50}
      />
    </div>
  );
};

export default PaginationComp;
