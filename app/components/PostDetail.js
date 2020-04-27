import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Comment from './Comment';

PostDetail.propTypes = {
  selectedPostId: PropTypes.string.isRequired,
  postOverlayOpen: PropTypes.bool.isRequired,
  onClosePostOverlay: PropTypes.func.isRequired,
  selectedSubreddit: PropTypes.string.isRequired,
  fetchPostById: PropTypes.func.isRequired
};

const Overlay = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const PostDetailContainer = styled.div`
  height: 100vh;
  min-height: 100%;
  width: 80%;
  background-color: #dae0e6;
  color: black;
  cursor: auto;
`;

const PostDetailInner = styled.div`
  margin: 40px;
  background-color: white;
  border-radius: 4px;
  padding: 15px;
`;

const CommentsContainer = styled.div`
  background-color: #dae0e6;
  border-radius: 4px;
  padding-bottom: 30px;
`;
function PostDetail({
  selectedPostId,
  postOverlayOpen,
  onClosePostOverlay,
  selectedSubreddit,
  fetchPostById
}) {
  if (!postOverlayOpen) {
    return null;
  }

  const [postData, setPostData] = useState('');
  let comments;
  let title = null;

  useEffect(() => {
    fetchPostById(selectedPostId, selectedSubreddit)
      // eslint-disable-next-line promise/always-return
      .then(res => {
        setPostData(res);
      })
      .catch(err => console.error(err));
  }, []);

  if (postData) {
    comments = postData[1].data.children.map(comment => {
      return (
        <Comment
          body={comment.data.body}
          replies={comment.data.replies}
          level={1}
        />
      );
    });
    title = postData[0].data.children[0].data.title;
  }

  return (
    <Overlay onClick={() => onClosePostOverlay()}>
      <PostDetailContainer onClick={e => e.stopPropagation()}>
        <PostDetailInner>{title}</PostDetailInner>
        <CommentsContainer>
          <PostDetailInner>{comments}</PostDetailInner>
        </CommentsContainer>
      </PostDetailContainer>
    </Overlay>
  );
}

export default PostDetail;
