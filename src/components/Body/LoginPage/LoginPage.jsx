import React, { useState } from 'react';

import styles from './LoginPage.module.css';
import LoginFormContainer from './LoginForm/LoginFormContainer';
const LoginPage = (props) => {
  return (
    <div className={styles.container}>
      <LoginFormContainer />
    </div>
  );
};

export default LoginPage;
