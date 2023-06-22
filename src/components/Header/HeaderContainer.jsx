import { connect } from 'react-redux';
import { useEffect } from 'react';

import { getAuth, getUserLoad } from '../../store/Selectors/UserSelecror';

import Header from './Header';

const HeaderContainer = (props) => {
  useEffect(() => {}, []);
  return <Header {...props} />;
};

const mapStateToProps = (state) => {
  return {
    Auth: getAuth(state),
    UserLoad: getUserLoad(state),
  };
};

export default connect(mapStateToProps, {})(HeaderContainer);
