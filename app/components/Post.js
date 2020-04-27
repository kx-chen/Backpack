import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const PostContainer = styled.div`
  display: flex;
  background-color: white;
  color: black;
  margin-top: 30px;
  width: 70%;
  border-radius: 4px;
  padding: 20px;
`;

Post.propTypes = {
  title: PropTypes.string.isRequired
};

function Post({ title }) {
  return (
    <PostContainer>
      <li>{title}</li>
    </PostContainer>
  );
}

export default Post;
