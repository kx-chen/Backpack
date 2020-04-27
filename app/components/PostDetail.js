import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

PostDetail.propTypes = {
  selectedPostId: PropTypes.string.isRequired,
  postOverlayOpen: PropTypes.bool.isRequired,
  onClosePostOverlay: PropTypes.func.isRequired
};

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
`;

function PostDetail({ selectedPostId, postOverlayOpen, onClosePostOverlay }) {
  if (!postOverlayOpen) {
    return null;
  }
  return (
    <Overlay onClick={() => onClosePostOverlay()}>hi {selectedPostId}</Overlay>
  );
}

export default PostDetail;
