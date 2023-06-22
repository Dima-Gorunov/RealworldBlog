import { connect } from 'react-redux';

import { getAuth } from '../../store/Selectors/UserSelecror';

import Body from './Body';

const BodyContainer = (props) => {
  return <Body {...props} />;
};

const mapStateToProps = (state) => {
  return {
    Auth: getAuth(state),
  };
};

export default connect(mapStateToProps, {})(BodyContainer);
