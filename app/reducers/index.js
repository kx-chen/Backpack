import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import posts from './post';
import sidenav from './sidenav';
import subreddits from './subreddits';

export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    posts,
    sidenav,
    subreddits
  });
}
