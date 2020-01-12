// @flow
// import type { GetState, Dispatch } from '../reducers/types';

export const LOAD_POST = 'LOAD_POST';
export const SELECT_POST = 'SELECT_POST';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const LOAD_SUBREDDITS = 'LOAD_SUBREDDITS';

export function loadPostSuccess(posts) {
  return {
    type: LOAD_POST,
    posts
  };
}

export function loadSubredditsSuccess(subreddits) {
  return {
    type: LOAD_SUBREDDITS,
    subreddits
  };
}

export function postSelected(post) {
  return {
    type: SELECT_POST,
    title: post.title,
    karma: post.karma
  };
}

export function subredditSelected(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    name: subreddit.name
  };
}

export function fetchSubreddits() {
  const subreddits = getAllSubreddits();
  return dispatch => {
    dispatch(loadSubredditsSuccess(subreddits));
  };
}

export function fetchSubredditPosts() {
  return dispatch => {
    dispatch(loadPostSuccess(getAllPosts()));
  };
}

export function fetchPostById(id) {
  const post = getAllPosts()[id];
  return dispatch => {
    dispatch(postSelected(post));
  };
}

function getAllPosts() {
  return [
    {
      title: 'First title',
      karma: '39'
    },
    {
      title: 'Second title',
      karma: '39'
    },
    {
      title: 'Third title',
      karma: '39'
    },
    {
      title: 'Fourth title',
      karma: '39'
    }
  ];
}

function getAllSubreddits() {
  return [
    {
      name: 'First subreddit',
    },
    {
      name: 'Second subreddit',
    },
    {
      name: 'Third subreddit',
    },
    {
      name: 'Fourth subreddit',
    }
  ];
}
