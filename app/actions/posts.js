import call from './reddit';

export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const SELECT_POST = 'SELECT_POST';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const LOAD_SUBREDDITS = 'LOAD_SUBREDDITS';
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

export function loadSubredditsSuccess(subreddits) {
  return {
    type: LOAD_SUBREDDITS,
    subreddits
  };
}

export function postSelected(post) {
  return {
    type: SELECT_POST,
    id: post
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
    dispatch(loadPostsStart());

    getAllPosts()
      .then(res => {
        dispatch(loadPostSuccess(res));
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function fetchPostById(id) {
  return dispatch => {
    dispatch(postSelected(id));
  };
}

function getAllPosts() {
  return call();
}

function getAllSubreddits() {
  return [
    {
      name: 'Front Page'
    },
    {
      name: 'r/AskReddit'
    },
    {
      name: 'r/gtaonline'
    },
    {
      name: '/r/vancouver'
    }
  ];
}
