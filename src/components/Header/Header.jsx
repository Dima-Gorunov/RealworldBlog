import React from 'react';

import CustomLink from '../CustomElements/CustomLink/CustomLink';

import styles from './Header.module.css';
import SignContainer from './SignComponent/SignContainer';
import UserFuncContainer from './UserFunctionality/UserFuncContainer';

const Header = ({ Auth }) => {
  const AuthInfo = Auth ? <UserFuncContainer /> : <SignContainer />;
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <CustomLink to="/">RealWorld Blog</CustomLink>
      </div>
      {AuthInfo}
    </div>
  );
};

export default Header;
