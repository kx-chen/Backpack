import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

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
  width: 50%;
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
  padding-bottom: 30px;
`;

const Title = styled.div`
  margin-bottom: 30px;
  font-size: 1.5rem;
  font-weight: 600;
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
  let title;
  let text = null;

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
          key={comment.data.id}
          body={comment.data.body}
          replies={comment.data.replies}
          level={1}
          author={comment.data.author}
          ups={comment.data.ups}
        />
      );
    });
    title = postData[0].data.children[0].data.title;
    text = postData[0].data.children[0].data.selftext_html;
  }

  return (
    <Overlay onClick={() => onClosePostOverlay()}>
      <PostDetailContainer onClick={e => e.stopPropagation()}>
        <CommentsContainer>
          <PostDetailInner>
            <Title>{title}</Title>
            <div>{ReactHtmlParser(ReactHtmlParser(text))}</div>
          </PostDetailInner>
          <PostDetailInner>
            <hr />
            {comments}
          </PostDetailInner>
        </CommentsContainer>
      </PostDetailContainer>
    </Overlay>
  );
}

export default PostDetail;
