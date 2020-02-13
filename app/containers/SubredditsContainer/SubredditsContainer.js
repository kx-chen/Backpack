import { connect } from 'react-redux';
import React, { Component } from 'react';
import Subreddits from '../../components/Subreddits/Subreddits';
import { fetchSubredditPosts, fetchSubreddits } from '../../actions/posts';

type Props = {
  subreddits: () => void,
  fetchSubreddits: () => void,
  onSubredditSelected: () => void
};

function mapStateToProps(state) {
  return {
    subreddits: state.postData.subreddits
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubredditSelected: subreddit => dispatch(fetchSubredditPosts(subreddit)),
    fetchSubreddits: () => dispatch(fetchSubreddits())
  };
}

class SubredditsContainer extends Component<Props> {
  props: Props;

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchSubreddits();
  }

  render() {
    const { onSubredditSelected, subreddits } = this.props;
    console.log('subreddits', subreddits);

    return (
      <Subreddits
        onSubredditSelected={onSubredditSelected}
        subreddits={subreddits}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubredditsContainer);
