import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PostActions from '../actions/posts';
import App from './App/App';

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
