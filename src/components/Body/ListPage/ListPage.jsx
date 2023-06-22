import React from 'react';

import styles from './ListPage.module.css';
import PaginationCompContainer from './Pagination/PaginationCompContainer';
import ListsContainer from './Lists/ListsContainer';

const ListPage = (props) => {
  return (
    <div className={styles.container}>
      <ListsContainer />
      <PaginationCompContainer />
    </div>
  );
};

export default ListPage;
