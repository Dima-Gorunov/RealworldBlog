import { connect } from 'react-redux';

import { getCurrentPage, getPageCount } from '../../../../store/Selectors/ListSelector';
import { getAuthListThunk, getListThunk } from '../../../../store/Slice/ListSlice';
import { getAuth } from '../../../../store/Selectors/UserSelecror';

import PaginationComp from './PaginationComp';

const PaginationCompContainer = (props) => {
  return <PaginationComp {...props} />;
};

const mapStateToProps = (state) => {
  return {
    CurrentPage: getCurrentPage(state),
    PageCount: getPageCount(state),
    Auth: getAuth(state),
  };
};

export default connect(mapStateToProps, { getListThunk, getAuthListThunk })(PaginationCompContainer);
