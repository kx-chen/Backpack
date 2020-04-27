import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  // points: PropTypes.string.isRequired,
  // posted_by: PropTypes.string.isRequired,
  // time_posted_utc: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  replies: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired
};

const CommentFlexContainer = styled.div`
  display: flex;
  overflow: auto;
  flex-direction: column;
  word-break: break-word;
  margin: 10px;
  padding-left 10px;
`;

const CommentInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.9em;
`;

const Thing = styled.span`
  padding: 10px;
  border-left: 2px solid rgb(237, 239, 241);
  width: 3px;
`;

function Comment({ body, replies, level }) {
  let replyComments = null;
  if (replies) {
    replyComments = replies.data.children.map(comment => {
      const levelIncreased = level + 1;
      return (
        <Comment
          body={comment.data.body}
          level={levelIncreased}
          replies={comment.data.replies}
        />
      );
    });
  }

  if (!body) {
    return null;
  }

  return (
    <CommentFlexContainer>
      <CommentInnerContainer>
        <Thing />
        {body}
      </CommentInnerContainer>
      {replyComments || null}
    </CommentFlexContainer>
  );
}

export default Comment;
