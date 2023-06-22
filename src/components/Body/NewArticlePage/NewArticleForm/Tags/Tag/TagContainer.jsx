import { connect } from 'react-redux';

import { addTag, deleteTag, setTextTag } from '../../../../../../store/Slice/ListSlice';

import Tag from './Tag';

const TagContainer = (props) => {
  return <Tag {...props} />;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
  addTag,
  setTextTag,
  deleteTag,
})(TagContainer);
