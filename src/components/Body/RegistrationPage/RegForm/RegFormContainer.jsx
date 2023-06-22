import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { registrationThunk, setRegErrors } from '../../../../store/Slice/UserSlice';
import { getRegErrors, getUserLoad } from '../../../../store/Selectors/UserSelecror';

import RegForm from './RegForm';

const RegFormContainer = (props) => {
  useEffect(() => {
    return () => {
      props.setRegErrors(null);
    };
  }, []);
  return <RegForm {...props} />;
};

const mapStateToProps = (state) => {
  return {
    RegErrors: getRegErrors(state),
    UserLoad: getUserLoad(state),
  };
};

export default connect(mapStateToProps, { registrationThunk, setRegErrors })(RegFormContainer);
