import { connect } from 'react-redux';

import RegistrationPage from './RegistrationPage';

const RegistrationPageContainer = (props) => {
  return <RegistrationPage {...props} />;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(RegistrationPageContainer);
