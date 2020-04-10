// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import type { HashHistory } from 'history';
import posts from './post';
<<<<<<< HEAD
import sidenav from "./sidenav";
=======
import sidenav from './sidenav';
>>>>>>> RO-9 Add sidebar arrow to open/close menu

export default function createRootReducer(history: HashHistory) {
  return combineReducers<{}, *>({
    router: connectRouter(history),
    postData: posts,
    sidenav
  });
}
