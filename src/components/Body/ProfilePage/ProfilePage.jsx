import React from 'react';

import styles from './ProfilePage.module.css';
import EditFormContainer from './EditForm/EditFormContainer';
const ProfilePage = (props) => {
  return (
    <div className={styles.container}>
      <EditFormContainer />
    </div>
  );
};

export default ProfilePage;
