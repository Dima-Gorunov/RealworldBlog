import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import style from './Body.module.css';
import ListPageContainer from './ListPage/ListPageContainer';
import RegistrationPageContainer from './RegistrationPage/RegistrationPageContainer';
import LoginPageContainer from './LoginPage/LoginPageContainer';
import ProfileContainer from './ProfilePage/ProfilePageContainer';
import NewArticlePageContainer from './NewArticlePage/NewArticlePageContainer';
import FullListPageContainer from './FullListPage/FullListPageContainer';
import EditListPageContainer from './EditListPage/EditListPageContainer';

const Body = (props) => {
  return (
    <div className={style.body_container}>
      <div className={style.body}>
        <Routes>
          <Route index element={<Navigate to="/articles" />} />
          {!props.Auth && <Route path="/login" element={<LoginPageContainer />} />}
          {!props.Auth && <Route path="/registration" element={<RegistrationPageContainer />} />}
          {props.Auth && <Route path="/profile" element={<ProfileContainer />} />}
          {props.Auth && <Route path="/new-article" element={<NewArticlePageContainer />} />}
          {props.Auth && <Route path={'/articles/:slug/edit'} element={<EditListPageContainer />} />}
          <Route path={'/articles/:slug'} element={<FullListPageContainer />} />
          <Route path="/articles" element={<ListPageContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Body;
