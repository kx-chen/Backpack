import fs from 'fs-extra';
import { fetchSubredditPosts } from '../helpers/subreddit';
import { displayError } from './error';
import { getDataPath } from '../helpers/utils';
import { triggerDownloadSubredditStart } from './downloader';

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
      .catch(err => {
        displayError(err);
        console.error(err);
      });
  };
}
export function fetchSubreddits() {
  const subreddits = getAllSubreddits();
  return dispatch => {
    dispatch(loadSubredditsSuccess(subreddits));
  };
}

export const SAVE_NEW_SUBREDDIT_START = 'SAVE_NEW_SUBREDDIT_START';
export const SAVE_NEW_SUBREDDIT_SUCCESS = 'SAVE_NEW_SUBREDDIT_SUCCESS';

function saveSubredditStart() {
  return {
    type: SAVE_NEW_SUBREDDIT_START
  };
}

function saveSubredditSuccess() {
  return {
    type: SAVE_NEW_SUBREDDIT_SUCCESS
  };
}

export function saveNewSubreddit(subredditName) {
  return dispatch => {
    dispatch(saveSubredditStart());
    dispatch(triggerDownloadSubredditStart(subredditName));
    dispatch(saveSubredditSuccess());
  };
}

function getAllSubreddits() {
  const dataPath = getDataPath();
  return fs.readdirSync(dataPath).filter(file => {
    return fs.statSync(`${dataPath}/${file}`).isDirectory();
  });
}
