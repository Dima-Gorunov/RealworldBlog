import { connect } from 'react-redux';

import { getListLoad, getTags } from '../../../../store/Selectors/ListSelector';
import { createListThunk } from '../../../../store/Slice/ListSlice';

import NewArticleForm from './NewArticleForm';

const NewArticleFormContainer = (props) => {
  return <NewArticleForm {...props} />;
};

const mapStateToProps = (state) => {
  return {
    Tags: getTags(state),
    Load: getListLoad(state),
  };
};

export default connect(mapStateToProps, { createListThunk })(NewArticleFormContainer);
