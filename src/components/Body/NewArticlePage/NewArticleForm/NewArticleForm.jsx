import React, { useEffect, useState } from 'react';
import { Formik, FieldArray, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Navigate } from 'react-router-dom';

import styles from './NewArticleForm.module.css';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'title must be at least 3 characters')
    .max(256, 'title must be less than 256 characters')
    .required('title is required'),
  shortDescription: Yup.string()
    .required('Short description is required')
    .min(3, 'Short description must be at least 3 characters'),
  text: Yup.string().min(3, 'text must be at least 3 characters').required('text is required'),
  tagList: Yup.array().of(Yup.string().trim().required('tag is required')),
});

const NewArticleForm = (props) => {
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Navigate replace to="/" />;
  }
  return (
    <div className={`${styles.container} ${props.Load && styles.disabled}`}>
      <h2 className={styles.header}>Create new article</h2>
      <Formik
        initialValues={{
          title: '',
          shortDescription: '',
          text: '',
          tagList: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Обработка отправки формы
          const data = {
            article: {
              title: values.title,
              description: values.shortDescription,
              body: values.text,
              tagList: values.tagList.map((e, index) => e.replace(/\s+/g, ' ').trim()),
            },
          };
          props.createListThunk(data).then((response) => {
            if (response) {
              setRedirect(true);
            }
          });
        }}
      >
        {({ values, errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="title">Title</label>
              <Field name={'title'} className={`${styles.input} ${errors.title ? styles.error : ''}`} />
              <ErrorMessage name={'title'} component="div" className={`${styles.errorMessage}`} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="shortDescription">Short description</label>
              <Field
                name={'shortDescription'}
                className={`${styles.input} ${errors.shortDescription ? styles.error : ''}`}
              />
              <ErrorMessage name={'shortDescription'} component="div" className={`${styles.errorMessage}`} />
            </div>
            <div>
              <label htmlFor="text">Text</label>
              <Field name={'text'}>
                {({ field, form, meta }) => (
                  <textarea
                    {...field}
                    className={`${styles.input} ${styles.inputText} ${errors.text ? styles.error : ''}`}
                  />
                )}
              </Field>
              <ErrorMessage name={'text'} component="div" className={`${styles.errorMessage}`} />
            </div>
            <FieldArray name="tagList">
              {({ push, remove }) => (
                <div className={styles.tagsContainer}>
                  {values.tagList.length === 0 && (
                    <button
                      type="button"
                      className={`${styles.subButton} ${styles.addButton}`}
                      onClick={() => push('')}
                    >
                      Add tag
                    </button>
                  )}
                  {values.tagList.map((input, index) => (
                    <div key={index} className={styles.tagContainer}>
                      <div>
                        <Field name={`tagList[${index}]`} className={`${styles.inputTag} ${styles.input}`} />
                        <ErrorMessage name={`tagList[${index}]`} component="div" className={`${styles.errorMessage}`} />
                      </div>
                      <button
                        type="button"
                        className={` ${styles.subButton} ${styles.deleteButton}`}
                        onClick={() => remove(index)}
                      >
                        Delete
                      </button>
                      {values.tagList.length - 1 === index && (
                        <button
                          type="button"
                          className={`${styles.subButton} ${styles.addButton}`}
                          onClick={() => push('')}
                        >
                          Add tag
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </FieldArray>
            <button type="submit" className={`${styles.button}`}>
              Send
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default NewArticleForm;
