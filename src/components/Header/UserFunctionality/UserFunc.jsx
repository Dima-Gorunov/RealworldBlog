import React from 'react';
import { Link } from 'react-router-dom';

import defImage from '../../../assets/defImage/avaDef.png';
import ImageWithFallback from '../../CustomElements/ImageWithFallback/ImageWithFallback';

import styles from './UserFunc.module.css';

const UserFunc = (props) => {
  const logout = () => {
    props.logoutThunk();
  };
  return (
    <div className={styles.actions}>
      <Link to="/new-article" className={`${styles.createArticle}`} id={styles.createArticle}>
        Create Article
      </Link>
      <Link className={styles.userInfo} to="profile">
        <div className={styles.name}>{props.User?.username || 'username'}</div>
        <ImageWithFallback src={props.User?.image} fallbackSrc={defImage} alt={defImage} className={styles.avatar} />
      </Link>
      <button onClick={() => logout()} className={styles.logout} id={styles.logout}>
        Logout
      </button>
    </div>
  );
};

export default UserFunc;
