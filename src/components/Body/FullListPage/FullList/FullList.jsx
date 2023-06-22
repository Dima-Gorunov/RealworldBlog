import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import moment from 'moment/moment';

import LikesContainer from '../../ListPage/List/Likes/LikesContainer';
import ImageWithFallback from '../../../CustomElements/ImageWithFallback/ImageWithFallback';
import avaDef from '../../../../assets/defImage/avaDef.png';

import styles from './FullList.module.css';
import warningSign from './assets/Vector.png';

const FullList = ({ User, ...props }) => {
  const List = props.List[0];
  const [popupActive, setPopupActive] = useState(false);
  const author = List?.author;
  const formatCreatedAt = moment(List?.createdAt).format('MMMM D, YYYY');
  const popup = (value) => {
    setPopupActive(value);
  };
  const deleteList = (slug) => {
    props.deleteListThunk(slug);
  };
  const tagList = List?.tagList.map((tag, index) => (
    <span key={uuid()} className={styles.tag}>
      {tag}
    </span>
  ));
  const functional = User?.username === author?.username && (
    <div className={styles.functional}>
      <div className={styles.container}>
        <button className={`${styles.buttonFunc} ${styles.deleteButton}`} onClick={() => popup(true)}>
          Delete
        </button>
        {popupActive && (
          <div className={styles.popup}>
            <div className={styles.text}>
              <img src={warningSign} alt="" />
              <div>Are you sure to delete this article?</div>
            </div>
            <div className={styles.buttons}>
              <button
                className={`${styles.popupButton} ${styles.popupDis}`}
                onClick={() => {
                  popup(false);
                }}
              >
                No
              </button>
              <button className={`${styles.popupButton}  ${styles.popupAgree}`} onClick={() => deleteList(List?.slug)}>
                Yes
              </button>
            </div>
          </div>
        )}
      </div>
      <Link to="edit" className={`${styles.buttonFunc}`}>
        Edit
      </Link>
    </div>
  );
  return (
    <div className={styles.listContainer}>
      <div className={styles.articleHeader}>
        <div className={styles.articleInfoContainer}>
          <h2 className={styles.articleTitle}>{List?.title || 'qweqwegrhjh'}</h2>
          <div className={styles.tags}>{tagList}</div>
          <LikesContainer Favorited={List?.favorited} Count={List?.favoritesCount} Slug={List?.slug} />
        </div>
        <div className={styles.authorInfo}>
          <div className={styles.authorName}>{author?.username || 'username'}</div>
          <div className={styles.authorAvatar}>
            <ImageWithFallback
              src={author?.image || avaDef}
              fallbackSrc={avaDef}
              alt={avaDef}
              className={styles.authorAvatar}
            />
          </div>
          <div className={styles.postDate}>Posted on {formatCreatedAt || 'date'}</div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.description}>{List?.description || 'description'}</div>
        {functional}
        <div className={styles.body}>{List?.body}</div>
      </div>
    </div>
  );
};

export default FullList;
