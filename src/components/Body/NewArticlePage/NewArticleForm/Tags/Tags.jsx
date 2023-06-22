import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import * as Yup from 'yup';

import styles from './Tags.module.css';

const schema = Yup.object().shape({
  text: Yup.string().required('Tag cannot be empty'),
});

const Tags = (props) => {
  const tagsLength = props.Tags.length;
  const addTag = () => {
    const newTag = {
      id: uuid(),
      text: '',
    };
    props.addTag(newTag);
  };
  const change = (e, id) => {
    const text = e.currentTarget.value;
    console.log(text, id);
    props.setTextTag({ id, text });
  };
  const deleteTag = (id) => {
    props.deleteTag(id);
  };

  const validateTag = async (id, text) => {
    try {
      await schema.validate({ text });
      // Валидация прошла успешно
    } catch (error) {
      // Валидация не удалась, обработка ошибки
      const errorMessage = error.errors[0];
      console.log(errorMessage);
    }
  };

  return (
    <div>
      <div>Tags</div>
      {tagsLength === 0 && (
        <button type="button" className={`${styles.button} ${styles.addButton}`} onClick={() => addTag()}>
          Add tag
        </button>
      )}
      {tagsLength > 0 &&
        props.Tags.map((item, index) => (
          <div key={`${index} ${item.id}`} className={styles.formGroup}>
            <input
              type="text"
              id="tags"
              placeholder="Tag"
              className={`${styles.input} ${styles.inputTag} `}
              value={item.text}
              onChange={(e) => change(e, item.id)}
              onBlur={() => validateTag(item.id, item.text)}
            />
            <button
              type="button"
              className={`${styles.button} ${styles.deleteButton}`}
              onClick={() => deleteTag(item.id)}
            >
              Delete
            </button>
            {tagsLength - 1 === index && (
              <button type="button" className={`${styles.button} ${styles.addButton}`} onClick={() => addTag()}>
                Add tag
              </button>
            )}
          </div>
        ))}
    </div>
  );
};

export default Tags;
