import React from 'react';
import { v4 as uuid } from 'uuid';

import styles from '../Tags.module.css';

const Tag = (props) => {
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
  return (
    <div className={styles.formGroup}>
      <input
        type="text"
        id="tags"
        placeholder="Tag"
        className={`${styles.input} ${styles.inputTag}`}
        value={props.Text}
        onChange={(e) => change(e, props.Id)}
      />
      <button type="button" className={`${styles.button} ${styles.deleteButton}`} onClick={() => deleteTag(props.Id)}>
        Delete
      </button>
      {props.TagsLength - 1 === props.Index && (
        <button type="button" className={`${styles.button} ${styles.addButton}`} onClick={() => addTag()}>
          Add tag
        </button>
      )}
    </div>
  );
};

export default Tag;
