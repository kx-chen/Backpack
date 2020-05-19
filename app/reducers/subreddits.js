import {
  DOWNLOAD_SUBREDDITS_START,
  DOWNLOAD_SUBREDDITS_SUCCESS,
  LOAD_SUBREDDITS_START,
  LOAD_SUBREDDITS_POSTS_SUCCESS,
  SELECT_SUBREDDIT,
  LOAD_SUBREDDITS_SUCCESS
} from '../actions/subreddits';

const initialState = {
  subreddits: [],
  loading_subreddits: true,
  selected_subreddit: '',
  downloading_subreddit: false,
  downloaded_posts: []
};

export default function subreddits(state = initialState, action) {
  switch (action.type) {
    case LOAD_SUBREDDITS_START:
      return {
        ...state,
        loading_subreddits: true,
        selected_subreddit: action.selected_subreddit
      };
    case LOAD_SUBREDDITS_POSTS_SUCCESS:
      return {
        ...state,
        downloaded_posts: action.downloaded_posts,
        loading_subreddits: false
      };
    case LOAD_SUBREDDITS_SUCCESS:
      return {
        ...state,
        subreddits: action.subreddits,
        loading_subreddits: false
      };
    case SELECT_SUBREDDIT:
      return {
        ...state,
        subreddits: action.subreddits
      };
    case DOWNLOAD_SUBREDDITS_SUCCESS:
      return {
        ...state,
        downloading_subreddit: action.downloading_subreddit,
        downloading_subreddit_name: action.downloading_subreddit_name
      };
    case DOWNLOAD_SUBREDDITS_START:
      return {
        ...state,
        downloading_subreddit: action.downloading_subreddit,
        downloading_subreddit_name: action.downloading_subreddit_name
      };
    default:
      return state;
  }
}
