import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const PostContainer = styled.div`
  display: flex;
  background-color: white;
  color: black;
  margin-top: 30px;
  width: 750px;
  border-radius: 4px;
  border: 1px solid #ccc;
  cursor: pointer;

  :hover {
    border: 1px solid #898989;
  }
`;

const PostLinkAndTitle = styled.a`
  font-weight: 600;
  font-size: 20px;
`;

const UpvotesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 50px;
  background-color: rgba(135, 138, 140, 0.2);
  text-align: center;
  font-weight: 600;
`;

const PostBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const PostAuthorAndPostingDate = styled.span`
  font-size: 13px;
  color: rgb(120, 124, 126);
`;

const CommentsIndicator = styled.span`
  color: #878a8c;
  font-weight: 600;
  margin-top: 10px;
  font-size: 13px;
`;

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  numComments: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  // created_utc: PropTypes.string.isRequired,
  ups: PropTypes.string.isRequired,
  onPostSelected: PropTypes.func.isRequired
};
// author_flair_text
function Post({ id, title, numComments, author, ups, onPostSelected }) {
  return (
    <PostContainer onClick={() => onPostSelected(id)}>
      <UpvotesContainer>{ups}</UpvotesContainer>
      <PostBodyContainer>
        <PostAuthorAndPostingDate>
          Posted by u/{author}
        </PostAuthorAndPostingDate>
        <PostLinkAndTitle>{title}</PostLinkAndTitle>
        <CommentsIndicator>{numComments} Comments</CommentsIndicator>
      </PostBodyContainer>
    </PostContainer>
  );
}

export default Post;
