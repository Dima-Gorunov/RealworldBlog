import React, { useState } from 'react';

import styles from './RegistrationPage.module.css';
import RegFormContainer from './RegForm/RegFormContainer';

const RegistrationPage = (props) => {
  return (
    <div className={styles.regFormPageContainer}>
      <RegFormContainer />
    </div>
  );
};

export default RegistrationPage;
