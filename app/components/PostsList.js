import React from 'react';
import PropTypes from 'prop-types';
import SubredditHeader from './SubredditHeader';

PostsList.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  downloadedPosts: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function PostsList({ selectedSubreddit, downloadedPosts, loading }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // TODO: hacky!
  if (!selectedSubreddit) {
    return <h1> Select a subreddit from the side.</h1>;
  }
  const posts = downloadedPosts.data.children.map(subreddit => {
    return <li key={subreddit.data.id}>{subreddit.data.title}</li>;
  });
  return (
    <div className="subreddit-posts">
      <SubredditHeader selectedSubreddit={selectedSubreddit} />
      <ul>{posts}</ul>
    </div>
  );
}

export default PostsList;
