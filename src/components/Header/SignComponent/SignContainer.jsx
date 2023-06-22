import { connect } from 'react-redux';

import { getUserLoad } from '../../../store/Selectors/UserSelecror';
import Preloader from '../../CustomElements/Preloader/Preloader';

import Sign from './Sign';

const SignContainer = (props) => {
  if (props.UserLoad) {
    return <Preloader />;
  }
  return <Sign {...props} />;
};

const mapStateToProps = (state) => {
  return {
    UserLoad: getUserLoad(state),
  };
};

export default connect(mapStateToProps, {})(SignContainer);
