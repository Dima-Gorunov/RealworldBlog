import { connect } from 'react-redux';
import { useEffect } from 'react';

import { getListLoad, getLists } from '../../../../store/Selectors/ListSelector';
import ListsPreloader from '../../../CustomElements/ListsPreloader/ListsPreloader';
import { getAuthListThunk, getListThunk } from '../../../../store/Slice/ListSlice';
import { getAuth } from '../../../../store/Selectors/UserSelecror';

import Lists from './Lists';

const ListsContainer = (props) => {
  useEffect(() => {
    if (!props.Auth) {
      props.getListThunk();
    } else {
      props.getAuthListThunk();
    }
  }, [props.Auth]);
  if (props.ListLoad) {
    return <ListsPreloader Count={5} />;
  }
  return <Lists {...props} />;
};

const mapStateToProps = (state) => {
  return {
    Lists: getLists(state),
    ListLoad: getListLoad(state),
    Auth: getAuth(state),
  };
};

export default connect(mapStateToProps, { getListThunk, getAuthListThunk })(ListsContainer);
