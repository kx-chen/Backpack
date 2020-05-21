import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Post from './Post';

PostsList.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  downloadedPosts: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  onPostSelected: PropTypes.func.isRequired
};

const PostsFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

function PostsList({
  selectedSubreddit,
  downloadedPosts,
  loading,
  onPostSelected
}) {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!selectedSubreddit) {
    return <h1> Select a subreddit from the side.</h1>;
  }
  const posts = downloadedPosts.data.children.map(subreddit => {
    return (
      <Post
        id={subreddit.data.id}
        key={subreddit.data.id}
        title={subreddit.data.title}
        numComments={subreddit.data.num_comments}
        author={subreddit.data.author}
        ups={subreddit.data.ups}
        onPostSelected={id => onPostSelected(id)}
      />
    );
  });
  return (
    <div className="subreddit-posts">
      <PostsFlexContainer>{posts}</PostsFlexContainer>
    </div>
  );
}

export default PostsList;
