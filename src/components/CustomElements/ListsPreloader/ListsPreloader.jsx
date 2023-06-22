import React from 'react';
import { v4 as uuid } from 'uuid';

import styles from './ListsPreloader.module.css';

const ListsPreloader = ({ Count }) => {
  const elements = [];
  for (let i = 0; i < Count; i++) {
    const long = i % 2 === 0;
    elements.push(
      <div key={uuid()} className={styles.listContainer}>
        <div className={styles.articleHeader}>
          <div className={styles.articleInfoContainer}>
            <h2 className={`${styles.articleTitle} ${long && styles.articleTitleLong}`}></h2>
            <div className={styles.tags}>
              {!long ? (
                <>
                  <span className={styles.tag}></span>
                  <span className={styles.tag}></span>
                  <span className={styles.tag}></span>
                </>
              ) : (
                <>
                  <span className={styles.tag}></span>
                  <span className={styles.tag}></span>
                </>
              )}
            </div>
            <div className={`${styles.likesContainer} `}></div>
          </div>
          <div className={styles.authorInfo}>
            <div className={`${styles.authorName} ${!long && styles.authorNameLong}`}></div>
            <div className={`${styles.authorAvatar}`}></div>
            <div className={`${styles.postDate}`}></div>
          </div>
        </div>
        <div className={`${styles.postContent} ${long && styles.postContentLong}`}></div>
      </div>
    );
  }
  return elements;
};

export default ListsPreloader;
