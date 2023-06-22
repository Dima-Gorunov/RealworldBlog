import { connect } from 'react-redux';

import FullListPage from './FullListPage';

const FullListPageContainer = (props) => {
  return <FullListPage {...props} />;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(FullListPageContainer);
