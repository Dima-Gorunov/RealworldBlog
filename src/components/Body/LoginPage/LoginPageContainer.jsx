import { connect } from 'react-redux';

import LoginPage from './LoginPage';

const LoginPageContainer = (props) => {
  return <LoginPage {...props} />;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(LoginPageContainer);
