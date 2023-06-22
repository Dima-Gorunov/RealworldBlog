import { connect } from 'react-redux';
import { useEffect } from 'react';

import { getUserInfo } from '../store/Slice/UserSlice';
import { getAuthListThunk } from '../store/Slice/ListSlice';

import App from './App';

const AppContainer = (props) => {
  useEffect(() => {
    props.getUserInfo();
  }, []);
  return <App {...props} />;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { getUserInfo, getAuthListThunk })(AppContainer);
