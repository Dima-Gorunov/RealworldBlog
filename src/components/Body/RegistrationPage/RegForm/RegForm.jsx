import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import styles from './RegForm.module.css';

const RegForm = (props) => {
  const change = () => {
    props.setRegErrors(null);
  };
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      agree: false,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .matches(/^[a-zA-Z0-9]+$/, 'Username can only contain letters and numbers')
        .min(3, 'username must be at least 3 characters')
        .max(20, 'username must be less than 20 characters')
        .required('username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'password must be at least 6 characters')
        .max(40, 'password must be no more than 40 characters')
        .required('password is required'),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Repeat Password is required'),
      agree: Yup.boolean().oneOf([true], 'You must agree to the terms'),
    }),
    onSubmit: (values) => {
      // Обработка отправки формы
      console.log(values);
      const user = {
        user: {
          username: values.username,
          email: values.email,
          password: values.password,
          image: 'https://api.realworld.io/images/smiley-cyrus.jpeg',
        },
      };
      props.registrationThunk(user);
    },
  });

  return (
    <div className={`${styles.container} ${props.UserLoad && styles.disabled}`}>
      <h2 className={styles.header}>Create New Account</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...formik.getFieldProps('username')}
            className={`${styles.input} ${formik.touched.username && formik.errors.username ? styles.error : ''}`}
            onFocus={() => change()}
          />
          {formik.touched.username && formik.errors.username && (
            <div className={styles.errorMessage}>{formik.errors.username}</div>
          )}
          {props.RegErrors.username && <div className={styles.errorMessage}>{props.RegErrors.username}</div>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...formik.getFieldProps('email')}
            className={`${styles.input} ${formik.touched.email && formik.errors.email ? styles.error : ''}`}
            onFocus={() => change()}
          />
          {formik.touched.email && formik.errors.email && (
            <div className={styles.errorMessage}>{formik.errors.email}</div>
          )}
          {props.RegErrors.email && <div className={styles.errorMessage}>{props.RegErrors.email}</div>}
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
        <div className={styles.formGroup}>
          <label htmlFor="repeatPassword">Repeat Password</label>
          <input
            type="password"
            id="repeatPassword"
            {...formik.getFieldProps('repeatPassword')}
            className={`${styles.input} ${
              formik.touched.repeatPassword && formik.errors.repeatPassword ? styles.error : ''
            }`}
          />
          {formik.touched.repeatPassword && formik.errors.repeatPassword && (
            <div className={styles.errorMessage}>{formik.errors.repeatPassword}</div>
          )}
        </div>
        <hr />
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="agree"
            {...formik.getFieldProps('agree')}
            className={`${styles.checkbox} ${formik.touched.agree && formik.errors.agree ? styles.error : ''}`}
          />
          <label htmlFor="agree" className={styles.label}>
            I agree to the processing of my personal information
          </label>
        </div>
        {formik.touched.agree && formik.errors.agree && (
          <div className={styles.errorMessage}>{formik.errors.agree}</div>
        )}
        <button
          disabled={props.UserLoad}
          type="submit"
          className={`${styles.button} ${props.UserLoad && styles.disabled}`}
        >
          Create
        </button>
      </form>
      <div className={styles.signInText}>
        Already have an account? <Link to="/login">Sign In</Link>
      </div>
    </div>
  );
};

export default RegForm;
