import { connect } from 'react-redux';
import Nav from '../components/Nav';
import { toggleMenu } from '../actions/sidenav';
import { saveNewSubreddit, subredditSelected } from '../actions/subreddits';
import { triggerDownloadSubredditStart } from '../actions/downloader';

function mapDispatchToProps(dispatch) {
  return {
    onMenuChange: open => dispatch(toggleMenu(open)),
    onSubredditSelect: subreddit => dispatch(subredditSelected(subreddit)),
    onSaveNewSubreddit: subreddit => dispatch(saveNewSubreddit(subreddit)),
    onDownloadSubreddit: subreddit =>
      dispatch(triggerDownloadSubredditStart(subreddit))
  };
}

function mapStateToProps(state) {
  return {
    subreddits: state.subreddits.subreddits,
    selectedSubreddit: state.subreddits.selected_subreddit,
    open: state.sidenav.open
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
