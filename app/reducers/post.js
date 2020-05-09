import {
  LOAD_POST_START,
  LOAD_POST_SUCCESS,
  POST_OVERLAY_CLOSE,
  SELECT_POST
} from '../actions/posts';

const initialState = {
  posts: [],
  subreddits: [],
  loading: true,
  name: 'AskReddit',
  postOverlayOpen: false
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
        id: action.id,
        postOverlayOpen: action.postOverlayOpen
      };
    case LOAD_POST_START:
      return {
        ...state,
        loading: true
      };
    case POST_OVERLAY_CLOSE:
      return {
        ...state,
        postOverlayOpen: action.postOverlayOpen
      };
    default:
      return state;
  }
}
