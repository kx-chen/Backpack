import {
  downloadSubredditJSON,
  downloadSubredditPosts,
  fetchSubredditPosts,
  saveSubredditJson
} from '../helpers/subreddit';
import { getDataPathForSubreddit } from '../helpers/utils';

export const DOWNLOAD_SUBREDDITS_SUCCESS = 'DOWNLOAD_SUBREDDITS_SUCCESS';
export const DOWNLOAD_SUBREDDITS_START = 'DOWNLOAD_SUBREDDITS_START';

function downloadSubredditsSuccess() {
  return {
    type: DOWNLOAD_SUBREDDITS_SUCCESS,
    downloading_subreddit: false,
    downloading_subreddit_name: ''
  };
}

function downloadSubredditStart(selectedSubreddit) {
  return {
    type: DOWNLOAD_SUBREDDITS_START,
    downloading_subreddit: true,
    downloading_subreddit_name: selectedSubreddit
  };
}

export function triggerDownloadSubredditStart(selectedSubreddit) {
  const userDataPath = getDataPathForSubreddit(selectedSubreddit);
  return dispatch => {
    dispatch(downloadSubredditStart(selectedSubreddit));

    downloadSubredditJSON(selectedSubreddit)
      .then(res => saveSubredditJson(res, selectedSubreddit, userDataPath))
      .then(res => downloadSubredditPosts(res, selectedSubreddit))
      .then(() => dispatch(downloadSubredditsSuccess()))
      .then(() => dispatch(subredditSelected(selectedSubreddit)))
      .catch(err => console.error(err));
  };
}

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
    }
  ];
}
