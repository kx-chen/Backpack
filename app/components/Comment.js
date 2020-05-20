import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  ups: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  replies: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired
};

const CommentFlexContainer = styled.div`
  display: flex;
  overflow: auto;
  flex-direction: column;
  word-break: break-word;
`;

const CommentBody = styled.p`
  margin-bottom: 1rem;
`;

const CommentInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.9em;
`;

const NestedComment = styled.span`
  padding: 10px;
  border-left: 2px solid rgb(237, 239, 241);
  width: 3px;
`;

const VerticalStackingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HorizontalStackingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Upvotes = styled.span`
  margin-right: 10px;
  color: gray;
`;

const Author = styled.span`
  font-size: 0.8rem;
  margin-right: 10px;
`;

function Comment({ body, replies, level, author, ups }) {
  let replyComments = null;
  if (replies) {
    replyComments = replies.data.children.map(comment => {
      const levelIncreased = level + 1;
      return (
        <Comment
          body={comment.data.body}
          level={levelIncreased}
          replies={comment.data.replies}
          author={comment.data.author}
          ups={comment.data.ups}
        />
      );
    });
  }

  if (!body) {
    return null;
  }

  const nestedComments = [];

  for (let i = 0; i < level; i += 1) {
    if (i !== 0) {
      nestedComments.push(<NestedComment />);
    }
  }

  return (
    <CommentFlexContainer>
      <CommentInnerContainer>
        {nestedComments}
        <VerticalStackingContainer>
          <HorizontalStackingContainer>
            <Author>{author}</Author>
            <Upvotes>{ups} points</Upvotes>
          </HorizontalStackingContainer>
          <CommentBody>{body}</CommentBody>
        </VerticalStackingContainer>
        <hr />
      </CommentInnerContainer>
      {replyComments || null}
    </CommentFlexContainer>
  );
}

export default Comment;
