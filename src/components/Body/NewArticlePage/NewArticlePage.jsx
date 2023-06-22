import React from 'react';

import styles from './NewArticlePage.module.css';
import NewArticleFormContainer from './NewArticleForm/NewArticleFormContainer';

const NewArticlePage = (props) => {
  return (
    <div className={styles.container}>
      <NewArticleFormContainer />
    </div>
  );
};

export default NewArticlePage;
