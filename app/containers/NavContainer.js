import { connect } from 'react-redux';
import Nav from '../components/Nav';
import { toggleMenu } from '../actions/sidenav';
import {
  subredditSelected,
  triggerDownloadSubredditStart
} from '../actions/subreddits';

function mapDispatchToProps(dispatch) {
  return {
    onMenuChange: open => dispatch(toggleMenu(open)),
    onSubredditSelect: subreddit => dispatch(subredditSelected(subreddit)),
    downloadSubreddit: subreddit =>
      dispatch(triggerDownloadSubredditStart(subreddit))
  };
}

function mapStateToProps(state) {
  return {
    subreddits: state.subreddits.subreddits,
    selected_subreddit: state.subreddits.selected_subreddit,
    open: state.sidenav.open
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
