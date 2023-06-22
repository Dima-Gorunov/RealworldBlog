import { connect } from 'react-redux';

import NewArticlePage from './NewArticlePage';

const NewArticlePageContainer = (props) => {
  return <NewArticlePage {...props} />;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(NewArticlePageContainer);
