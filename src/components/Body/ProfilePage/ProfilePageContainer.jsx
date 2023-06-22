import { connect } from 'react-redux';

import ProfilePage from './ProfilePage';

const ProfilePageContainer = (props) => {
  return <ProfilePage {...props} />;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(ProfilePageContainer);
