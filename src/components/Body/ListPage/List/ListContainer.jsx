import { connect } from 'react-redux';

import List from './List';

const ListContainer = (props) => {
  return <List {...props} />;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(ListContainer);
