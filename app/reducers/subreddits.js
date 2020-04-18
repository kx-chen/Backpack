// @flow
import {
  LOAD_SUBREDDITS_START,
  LOAD_SUBREDDITS_SUCCESS,
  SELECT_SUBREDDIT
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
    case LOAD_SUBREDDITS_SUCCESS:
      return {
        ...state,
        subreddits: action.subreddits,
        loading_subreddits: false
      };
    case SELECT_SUBREDDIT:
      return {
        ...state,
        subreddits: action.subreddits,
      };
    default:
      return state;
  }
}
