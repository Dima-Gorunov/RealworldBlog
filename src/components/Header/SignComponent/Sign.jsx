import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import styles from './Sign.module.css';

const Sign = (props) => {
  const signInRef = useRef(null);
  const signUpRef = useRef(null);
  const hover = (e, value = false) => {
    if (value) {
      if (e.currentTarget.id === styles.signIn) {
        signUpRef.current.classList.remove(styles.button_active);
        signInRef.current.classList.add(styles.button_active);
      }
    } else {
      signUpRef.current.classList.add(styles.button_active);
      signInRef.current.classList.remove(styles.button_active);
    }
  };

  return (
    <div className={styles.authButtons}>
      <Link
        to="/login"
        className={styles.link}
        ref={signInRef}
        id={styles.signIn}
        onMouseEnter={(e) => hover(e, true)}
        onMouseLeave={(e) => hover(e)}
      >
        Sign In
      </Link>
      <Link
        to="/registration"
        className={`${styles.link} ${styles.button_active}`}
        ref={signUpRef}
        id={styles.signUp}
        onMouseEnter={(e) => hover(e, true)}
        onMouseLeave={(e) => hover(e)}
      >
        Sign Up
      </Link>
    </div>
  );
};

export default Sign;
