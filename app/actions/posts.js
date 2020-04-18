export const SELECT_POST = 'SELECT_POST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_START = 'LOAD_POST_START';

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
    id: post
  };
}

export function fetchPostById(id) {
  return dispatch => {
    dispatch(postSelected(id));
  };
}
