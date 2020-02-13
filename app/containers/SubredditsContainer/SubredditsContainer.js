import { connect } from 'react-redux';
import Subreddits from '../../components/Subreddits/Subreddits';

function mapStateToProps(state) {
  return {
    subreddits: state.postData.subreddits
  };
}

export default connect(mapStateToProps)(Subreddits);
