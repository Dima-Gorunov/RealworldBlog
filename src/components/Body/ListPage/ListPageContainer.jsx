import { connect } from 'react-redux';

import { getListLoad, getLists } from '../../../store/Selectors/ListSelector';
import Preloader from '../../CustomElements/Preloader/Preloader';

import ListPage from './ListPage';

const ListPageContainer = (props) => {
  return <ListPage {...props} />;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(ListPageContainer);
