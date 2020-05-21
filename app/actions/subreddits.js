import { fetchSubredditPosts } from '../helpers/subreddit';

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const LOAD_SUBREDDITS_POSTS_SUCCESS = 'LOAD_SUBREDDITS_POSTS_SUCCESS';
export const LOAD_SUBREDDITS_SUCCESS = 'LOAD_SUBREDDITS_SUCCESS';
export const LOAD_SUBREDDITS_START = 'LOAD_SUBREDDITS_START';

function loadSubredditsPostsSuccess(downloadedPosts) {
  return {
    type: LOAD_SUBREDDITS_POSTS_SUCCESS,
    downloaded_posts: downloadedPosts
  };
}

function loadSubredditsSuccess(subreddits) {
  return {
    type: LOAD_SUBREDDITS_SUCCESS,
    subreddits
  };
}

function loadSubredditPostsStart(selectedSubreddit) {
  return {
    type: LOAD_SUBREDDITS_START,
    selected_subreddit: selectedSubreddit
  };
}

export function subredditSelected(subreddit) {
  return dispatch => {
    dispatch(loadSubredditPostsStart(subreddit));
    fetchSubredditPosts(subreddit)
      .then(res => dispatch(loadSubredditsPostsSuccess(res)))
      .then(() => dispatch(fetchSubreddits()))
      .catch(err => console.error(err));
  };
}

export function fetchSubreddits() {
  const subreddits = getAllSubreddits();
  return dispatch => {
    dispatch(loadSubredditsSuccess(subreddits));
  };
}

function getAllSubreddits() {
  return [
    {
      name: 'AskReddit'
    },
    {
      name: 'UBC'
    },
    {
      name: 'gtaonline'
    },
    {
      name: 'vancouver'
    },
    {
      name: 'cscareerquestions'
    }
  ];
}
