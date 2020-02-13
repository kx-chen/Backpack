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
  console.log('loadSubredditSuccess');
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
  console.log('subreddit selected', subreddit);
  return {
    type: SELECT_SUBREDDIT,
    name: subreddit.name
  };
}

export function fetchSubreddits() {
  console.log('fetchSubreddits');
  const subreddits = getAllSubreddits();
  return dispatch => {
    dispatch(loadSubredditsSuccess(subreddits));
  };
}

export function fetchSubredditPosts(subreddit) {
  console.log('fetchSubredditPosts');
  return dispatch => {
    dispatch(loadPostsStart());

    return (
      fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        // TODO: map the json to object
        .then(json => dispatch(loadPostSuccess(json)))
    );
  };
}

export function fetchPostById(id) {
  return dispatch => {
    dispatch(postSelected(id));
  };
}

function getAllSubreddits() {
  return [
    {
      name: 'AskReddit'
    },
    {
      name: 'ProgrammerHumor'
    },
    {
      name: 'gtaonline'
    },
    {
      name: 'vancouver'
    }
  ];
}
