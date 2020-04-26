import React from 'react';
import PropTypes from 'prop-types';

PostsList.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  downloadedPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
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
    return <li>{subreddit.data.title}</li>;
  });
  return (
    <div className="subreddit-posts">
      {selectedSubreddit}
      <ul>{posts}</ul>
    </div>
  );
}

export default PostsList;
