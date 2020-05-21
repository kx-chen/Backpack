import { app, remote } from 'electron';

export function getDataPathForSubreddit(selectedSubreddit) {
  let userDataPath = app
    ? app.getPath('userData')
    : remote.app.getPath('userData');

  userDataPath += `/reddit-offline/${selectedSubreddit}/${selectedSubreddit}.json`;
  return userDataPath;
}

export function getDataPathForPost(selectedSubreddit, id) {
  let userDataPath = app
    ? app.getPath('userData')
    : remote.app.getPath('userData');

  userDataPath += `/reddit-offline/${selectedSubreddit}/${id}.json`;
  return userDataPath;
}

export function getDataPathForIcon(selectedSubreddit) {
  let userDataPath = app
    ? app.getPath('userData')
    : remote.app.getPath('userData');

  userDataPath += `/reddit-offline/${selectedSubreddit}/${selectedSubreddit}.png`;
  return userDataPath;
}

export function getDataPath() {
  let userDataPath = app
    ? app.getPath('userData')
    : remote.app.getPath('userData');

  userDataPath += '/reddit-offline/';
  return userDataPath;
}
