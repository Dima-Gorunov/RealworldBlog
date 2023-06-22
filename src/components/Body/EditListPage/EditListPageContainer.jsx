import { connect } from 'react-redux';

import EditListPage from './EditListPage';

const EditListPageContainer = (props) => {
  return <EditListPage {...props} />;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(EditListPageContainer);
