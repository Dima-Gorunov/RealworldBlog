import React from 'react';

import styles from './EditList.module.css';
import EditListFormContainer from './EditListForm/EditListFormContainer';

const EditListPage = (props) => {
  return (
    <div className={styles.container}>
      <EditListFormContainer />
    </div>
  );
};

export default EditListPage;
