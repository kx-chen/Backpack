// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import type { HashHistory } from 'history';
import posts from './post';
import sidenav from './sidenav';
import subreddits from './subreddits';

export default function createRootReducer(history: HashHistory) {
  return combineReducers<{}, *>({
    router: connectRouter(history),
    posts,
    sidenav,
    subreddits,
  });
}
