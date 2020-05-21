import fs from 'fs-extra';
import { getDataPathForPost } from '../helpers/utils';
import { displayError } from './error';

export const SELECT_POST = 'SELECT_POST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_START = 'LOAD_POST_START';
export const POST_OVERLAY_CLOSE = 'POST_OVERLAY_CLOSE';

export function loadPostSuccess(posts) {
  return {
    type: LOAD_POST_SUCCESS,
    posts
  };
}

export function loadPostsStart() {
  return {
    type: LOAD_POST_START
  };
}

export function postSelected(post) {
  return {
    type: SELECT_POST,
    id: post,
    postOverlayOpen: true
  };
}

export function closePostOverlay() {
  return {
    type: POST_OVERLAY_CLOSE,
    postOverlayOpen: false
  };
}

export function fetchPostById(id, selectedSubreddit) {
  return dispatch => {
    return new Promise(resolve => {
      dispatch(loadPostsStart());

      getPostFromStorage(id, selectedSubreddit)
        .then(res => resolve(res))
        .then(() => dispatch(loadPostSuccess()))
        .catch(err => {
          displayError(err);
          console.error(err);
        });
    });
  };
}

export function getPostFromStorage(id, selectedSubreddit) {
  const postPath = getDataPathForPost(selectedSubreddit, id);

  return fs.readJSON(postPath);
}
