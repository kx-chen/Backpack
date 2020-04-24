import fetch from 'node-fetch';
import fs from 'fs-extra';
import { app, remote } from 'electron';

export async function downloadSubredditJSON(name) {
  return fetch(`https://reddit.com/r/${name}.json`)
    .then((res, err) => {
      if (err) {
        return 'error!';
      }
      return res.json();
    })
    .catch(err => {
      throw err;
    });
}

export function saveSubredditJson(data, selectedSubreddit) {
  let userDataPath = app
    ? app.getPath('userData')
    : remote.app.getPath('userData');

  data.lastUpdated = new Date();

  userDataPath += `/reddit-offline/${selectedSubreddit}/${selectedSubreddit}.json`;

  fs.outputJson(userDataPath, data).catch(err => {
    throw err;
  });
}
