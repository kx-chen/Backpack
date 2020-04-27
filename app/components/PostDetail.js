import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

PostDetail.propTypes = {
  selectedPostId: PropTypes.string.isRequired,
  postOverlayOpen: PropTypes.bool.isRequired,
  onClosePostOverlay: PropTypes.func.isRequired
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  overflow: auto;
`;

const PostDetailContainer = styled.div`
  height: 1000%;
  width: 80%;
  background-color: white;
`;

function PostDetail({ selectedPostId, postOverlayOpen, onClosePostOverlay }) {
  if (!postOverlayOpen) {
    return null;
  }
  return (
    <Overlay onClick={() => onClosePostOverlay()}>
      <PostDetailContainer>hi {selectedPostId}</PostDetailContainer>
    </Overlay>
  );
}

export default PostDetail;
