import { downloadSubredditJSON } from "../helpers/subredditDownloader";

export const DOWNLOAD_SUBREDDITS_SUCCESS = 'DOWNLOAD_SUBREDDITS_SUCCESS';
export const DOWNLOAD_SUBREDDITS_START = 'DOWNLOAD_SUBREDDITS_START';

function downloadSubredditsSuccess(posts) {
  return {
    type: DOWNLOAD_SUBREDDITS_SUCCESS,
    downloaded_posts: posts,
    downloading_subreddit: false,
    downloading_subreddit_name: "",
  };
}

function downloadSubredditStart(selected_subreddit) {
  return {
    type: DOWNLOAD_SUBREDDITS_START,
    downloading_subreddit: true,
    downloading_subreddit_name: selected_subreddit,
  };
}

export function triggerDownloadSubredditStart(selected_subreddit) {
  return dispatch => {
    dispatch(downloadSubredditStart(selected_subreddit));
    downloadSubredditJSON(selected_subreddit).then((res) => {
      dispatch(downloadSubredditsSuccess(res));
    })
  }
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

function loadSubredditStart(selected_subreddit) {
  return {
    type: LOAD_SUBREDDITS_START,
    selected_subreddit: selected_subreddit.name
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
