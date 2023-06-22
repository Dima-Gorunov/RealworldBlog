import { connect } from 'react-redux';
import { useEffect } from 'react';

import { getRegErrors, getUser, getUserLoad } from '../../../../store/Selectors/UserSelecror';
import { editProfileThunk, setRegErrors } from '../../../../store/Slice/UserSlice';
import Preloader from '../../../CustomElements/Preloader/Preloader';

import EditForm from './EditForm';

const EditFormContainer = (props) => {
  useEffect(() => {
    return () => {
      props.setRegErrors(null);
    };
  }, [props.User]);
  if (props.UserLoad) {
    return <Preloader />;
  }
  return <EditForm {...props} />;
};

const mapStateToProps = (state) => {
  return {
    RegErrors: getRegErrors(state),
    User: getUser(state),
    UserLoad: getUserLoad(state),
  };
};

export default connect(mapStateToProps, { setRegErrors, editProfileThunk })(EditFormContainer);
