import { connect } from 'react-redux';

import { getTags } from '../../../../../store/Selectors/ListSelector';
import { addTag, deleteTag, setTextTag } from '../../../../../store/Slice/ListSlice';

import Tags from './Tags';

const TagsContainer = (props) => {
  return <Tags {...props} />;
};

const mapStateToProps = (state) => {
  return {
    Tags: getTags(state),
  };
};

export default connect(mapStateToProps, { setTextTag, addTag, deleteTag })(TagsContainer);
