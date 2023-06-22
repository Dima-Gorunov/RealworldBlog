import { connect } from 'react-redux';

import { setCurrentFavoriteThunk, setFavoriteThunk } from '../../../../../store/Slice/ListSlice';
import { getAuth } from '../../../../../store/Selectors/UserSelecror';

import Likes from './Likes';

const LikesContainer = (props) => {
  return <Likes {...props} />;
};

const mapStateToProps = (state) => {
  return {
    Auth: getAuth(state),
  };
};

export default connect(mapStateToProps, { setFavoriteThunk, setCurrentFavoriteThunk })(LikesContainer);
