import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { deleteListThunk, getAuthCurrentListThunk, getCurrentListThunk } from '../../../../store/Slice/ListSlice';
import { getListLoad, getLists } from '../../../../store/Selectors/ListSelector';
import ListsPreloader from '../../../CustomElements/ListsPreloader/ListsPreloader';
import { getAuth, getUser } from '../../../../store/Selectors/UserSelecror';

import FullList from './FullList';

const FullListContainer = (props) => {
  const { slug } = useParams();
  useEffect(() => {
    if (props.Auth) {
      props.getAuthCurrentListThunk(slug);
    } else {
      props.getCurrentListThunk(slug);
    }
  }, []);
  if (props.ListLoad) {
    return <ListsPreloader Count={1} />;
  }
  if (!props.List.length) {
    return <Navigate to="/" />;
  }
  return <FullList {...props} />;
};

const mapStateToProps = (state) => {
  return {
    List: getLists(state),
    ListLoad: getListLoad(state),
    User: getUser(state),
    Auth: getAuth(state),
  };
};

export default connect(mapStateToProps, {
  getCurrentListThunk,
  getAuthCurrentListThunk,
  deleteListThunk,
})(FullListContainer);
