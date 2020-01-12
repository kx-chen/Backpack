// @flow
import { LOAD_POST, SELECT_POST } from '../actions/posts';

const initialState = {
  posts: []
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
    default:
      return state;
  }
}
