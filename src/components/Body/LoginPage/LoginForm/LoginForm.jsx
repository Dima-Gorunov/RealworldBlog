import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import styles from './LoginForm.module.css';
const LoginForm = (props) => {
  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      // Обработка отправки формы
      console.log(values);
      const data = {
        user: {
          email: values.email,
          password: values.password,
        },
      };
      props.loginThunk(data);
    },
  });

  return (
    <div className={`${styles.container} ${props.UserLoad && styles.disabled}`}>
      <h2 className={styles.header}>Sign In</h2>
      {props.AuthError && <div className={styles.errorMessage}>{props.AuthError}</div>}
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            {...formik.getFieldProps('email')}
            className={`${styles.input} ${formik.touched.email && formik.errors.email ? styles.error : ''}`}
          />
          {formik.touched.email && formik.errors.email && (
            <div className={styles.errorMessage}>{formik.errors.email}</div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...formik.getFieldProps('password')}
            className={`${styles.input} ${formik.touched.password && formik.errors.password ? styles.error : ''}`}
          />
          {formik.touched.password && formik.errors.password && (
            <div className={styles.errorMessage}>{formik.errors.password}</div>
          )}
        </div>
        <button
          disabled={props.UserLoad}
          type="submit"
          className={`${styles.button} ${props.UserLoad && styles.disabled}`}
        >
          Login
        </button>
      </form>
      <div className={styles.signInText}>
        Don’t have an account? <Link to="/registration">Sign Up</Link>
      </div>
    </div>
  );
};

export default LoginForm;
