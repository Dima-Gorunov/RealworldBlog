import React from 'react';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import { Link } from 'react-router-dom';

import ImageWithFallback from '../../../CustomElements/ImageWithFallback/ImageWithFallback';
import avaDef from '../../../../assets/defImage/avaDef.png';

import LikesContainer from './Likes/LikesContainer';
import styles from './List.module.css';

const List = ({ List }) => {
  const tagList = List?.tagList?.map((tag, index) => (
    <span key={uuid()} className={styles.tag}>
      {tag}
    </span>
  ));
  const formatCreatedAt = moment(List?.createdAt).format('MMMM D, YYYY');
  const author = List?.author;
  return (
    <div className={styles.listContainer}>
      <div className={styles.articleHeader}>
        <div className={styles.articleInfoContainer}>
          <Link to={`${List.slug}`} className={styles.articleTitle}>
            {List?.title}
          </Link>
          <div className={styles.tags}>{tagList}</div>
          <LikesContainer Favorited={List?.favorited} Count={List?.favoritesCount} Slug={List?.slug} />
        </div>
        <div className={styles.authorInfo}>
          <div className={styles.authorName}>{author.username}</div>
          <div className={styles.authorAvatar}>
            <ImageWithFallback src={author.image} fallbackSrc={avaDef} alt={avaDef} className={styles.authorAvatar} />
          </div>
          <div className={styles.postDate}>Posted on {formatCreatedAt}</div>
        </div>
      </div>
      <div className={styles.description}>{List?.description}</div>
    </div>
  );
};

export default List;
