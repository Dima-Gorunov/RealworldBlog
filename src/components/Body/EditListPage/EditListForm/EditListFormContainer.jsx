import { connect } from 'react-redux';

import { getListLoad, getLists } from '../../../../store/Selectors/ListSelector';
import { updateListThunk } from '../../../../store/Slice/ListSlice';

import EditListForm from './EditListForm';

const EditListFormContainer = (props) => {
  return <EditListForm {...props} />;
};

const mapStateToProps = (state) => {
  return {
    List: getLists(state),
    ListLoad: getListLoad(state),
  };
};

export default connect(mapStateToProps, { updateListThunk })(EditListFormContainer);
