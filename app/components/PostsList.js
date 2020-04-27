import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Post from './Post';

PostsList.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  downloadedPosts: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

const PostsFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

function PostsList({ selectedSubreddit, downloadedPosts, loading }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // TODO: hacky!
  if (!selectedSubreddit) {
    return <h1> Select a subreddit from the side.</h1>;
  }
  const posts = downloadedPosts.data.children.map(subreddit => {
    return <Post key={subreddit.data.id} title={subreddit.data.title} />;
  });
  return (
    <div className="subreddit-posts">
      <PostsFlexContainer>{posts}</PostsFlexContainer>
    </div>
  );
}

export default PostsList;
