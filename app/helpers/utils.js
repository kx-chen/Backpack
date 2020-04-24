import { app, remote } from "electron";

export function getDataPathForSubreddit(selectedSubreddit) {
  let userDataPath = app
    ? app.getPath('userData')
    : remote.app.getPath('userData');

  userDataPath += `/reddit-offline/${selectedSubreddit}/${selectedSubreddit}.json`;
  return userDataPath;
}
