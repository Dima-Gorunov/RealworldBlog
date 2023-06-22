import React from 'react';

import styles from './Preloader.module.css';

const Preloader = (props) => {
  return (
    <span className={`${styles.spinner} ${styles.spinnerLarge} ${styles.spinnerBlue} ${styles.spinnerSlow}`}></span>
  );
};

export default Preloader;
