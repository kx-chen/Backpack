// @flow
import {
  LOAD_POST_START,
  LOAD_POST_SUCCESS,
  SELECT_POST
} from '../actions/posts';

const initialState = {
  posts: [],
  subreddits: [],
  loading: true,
  name: 'AskReddit'
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case LOAD_POST_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        loading: false
      };
    case SELECT_POST:
      return {
        ...state,
        title: state.posts[action.id].title,
        karma: state.posts[action.id].ups
      };
    case LOAD_POST_START:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
