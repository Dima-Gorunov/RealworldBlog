import React from 'react';

import styles from './FullListPage.module.css';
import FullListContainer from './FullList/FullListContainer';

const FullListPage = (props) => {
  return (
    <div className={styles.container}>
      <FullListContainer />
    </div>
  );
};

export default FullListPage;
