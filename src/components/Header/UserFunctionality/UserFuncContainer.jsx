import { connect } from 'react-redux';

import { getUser, getUserLoad } from '../../../store/Selectors/UserSelecror';
import { logoutThunk } from '../../../store/Slice/UserSlice';
import Preloader from '../../CustomElements/Preloader/Preloader';

import UserFunc from './UserFunc';

const UserFuncContainer = (props) => {
  if (props.UserLoad) {
    return <Preloader />;
  }
  return <UserFunc {...props} />;
};

const mapStateToProps = (state) => {
  return {
    User: getUser(state),
    UserLoad: getUserLoad(state),
  };
};

export default connect(mapStateToProps, { logoutThunk })(UserFuncContainer);
