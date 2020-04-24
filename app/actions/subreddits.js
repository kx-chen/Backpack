import {
  downloadSubredditJSON,
  saveSubredditJson
} from '../helpers/subredditDownloader';

export const DOWNLOAD_SUBREDDITS_SUCCESS = 'DOWNLOAD_SUBREDDITS_SUCCESS';
export const DOWNLOAD_SUBREDDITS_START = 'DOWNLOAD_SUBREDDITS_START';

function downloadSubredditsSuccess(posts) {
  return {
    type: DOWNLOAD_SUBREDDITS_SUCCESS,
    downloaded_posts: posts,
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
  return dispatch => {
    dispatch(downloadSubredditStart(selectedSubreddit));
    downloadSubredditJSON(selectedSubreddit)
      .then(res => {
        dispatch(downloadSubredditsSuccess(res));
        return res;
      })
      .then(res => saveSubredditJson(res, selectedSubreddit))
      .catch(err => console.error(err));
  };
}

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const LOAD_SUBREDDITS_SUCCESS = 'LOAD_SUBREDDITS_SUCCESS';
export const LOAD_SUBREDDITS_START = 'LOAD_SUBREDDITS_START';

function loadSubredditsSuccess(subreddits) {
  return {
    type: LOAD_SUBREDDITS_SUCCESS,
    subreddits
  };
}

function loadSubredditStart(selectedSubreddit) {
  return {
    type: LOAD_SUBREDDITS_START,
    selected_subreddit: selectedSubreddit.name
  };
}

export function subredditSelected(subreddit) {
  return dispatch => {
    dispatch(loadSubredditStart(subreddit));
    dispatch(fetchSubreddits());
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
