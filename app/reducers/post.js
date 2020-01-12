// @flow
import { LOAD_POST, LOAD_SUBREDDITS, SELECT_POST} from '../actions/posts';

const initialState = {
  posts: [],
  subreddits: []
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case LOAD_POST:
      return {
        ...state,
        posts: action.posts
      };
    case SELECT_POST:
      return {
        ...state,
        title: action.title,
        karma: action.karma
      };
    case LOAD_SUBREDDITS:
      return {
        ...state,
        subreddits: action.subreddits
      };
    default:
      return state;
  }
}
