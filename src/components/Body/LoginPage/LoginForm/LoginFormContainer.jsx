import { connect } from 'react-redux';

import { loginThunk } from '../../../../store/Slice/UserSlice';
import { getAuthError, getUserLoad } from '../../../../store/Selectors/UserSelecror';

import LoginForm from './LoginForm';

const LoginFormContainer = (props) => {
  return <LoginForm {...props} />;
};

const mapStateToProps = (state) => {
  return {
    UserLoad: getUserLoad(state),
    AuthError: getAuthError(state),
  };
};

export default connect(mapStateToProps, { loginThunk })(LoginFormContainer);
