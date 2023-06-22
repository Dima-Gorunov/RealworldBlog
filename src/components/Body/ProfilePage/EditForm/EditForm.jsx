import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { editProfileThunk } from '../../../../store/Slice/UserSlice';

import styles from './EditForm.module.css';

const EditForm = (props) => {
  const change = () => {
    props.setRegErrors(null);
  };
  const formik = useFormik({
    initialValues: {
      username: props.User.username,
      email: props.User.email,
      password: props.User.password,
      avatarImageUrl: props.User.image,
      agree: false,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .matches(/^[a-zA-Z0-9]+$/, 'Username can only contain letters and numbers')
        .min(4, 'username must be at least 4 characters'),
      email: Yup.string().email('Invalid email address'),
      password: Yup.string().min(6, 'Password must be at least 6 characters'),
      avatarImageUrl: Yup.string().url('Invalid URL format'),
    }),
    onSubmit: (values) => {
      // Обработка отправки формы
      const user = {
        user: {
          username: values.username,
          email: values.email,
          password: values.password,
          image: values.avatarImageUrl,
        },
      };
      props.editProfileThunk(user);
    },
  });

  return (
    <div className={`${styles.container} ${props.UserLoad && styles.disabled}`}>
      <h2 className={styles.header}>Edit Profile</h2>
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
          <label htmlFor="email">Email address</label>
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
          <label htmlFor="password">New password</label>
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
          <label htmlFor="avatarImageUrl">Avatar image (url)</label>
          <input
            type="text"
            id="avatarImageUrl"
            {...formik.getFieldProps('avatarImageUrl')}
            className={`${styles.input} ${
              formik.touched.avatarImageUrl && formik.errors.avatarImageUrl ? styles.error : ''
            }`}
          />
          {formik.touched.avatarImageUrl && formik.errors.avatarImageUrl && (
            <div className={styles.errorMessage}>{formik.errors.avatarImageUrl}</div>
          )}
          {props.RegErrors.image && <div className={styles.errorMessage}>{props.RegErrors.image}</div>}
        </div>
        <button
          disabled={props.UserLoad}
          type="submit"
          className={`${styles.button} ${props.UserLoad && styles.disabled}`}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditForm;
