import { getDataPathForSubreddit } from '../helpers/utils';
import {
  downloadSubredditIcon,
  downloadSubredditJSON,
  downloadSubredditPosts,
  saveSubredditJson
} from '../helpers/subreddit';
import { subredditSelected } from './subreddits';
import { displayError } from './error';

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
      .then(() => downloadSubredditIcon(selectedSubreddit))
      .then(() => dispatch(downloadSubredditsSuccess()))
      .then(() => dispatch(subredditSelected(selectedSubreddit)))
      .catch(err => {
        displayError(err);
        console.error(err);
      });
  };
}
