import fetch from 'node-fetch';
import fs from 'fs-extra';
import { getDataPathForSubreddit } from './utils';

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
  const userDataPath = getDataPathForSubreddit(selectedSubreddit);
  // append the last updated date to the json
  data.lastUpdated = new Date();

  fs.outputJson(userDataPath, data).catch(err => {
    throw err;
  });
}

export function fetchSubredditPosts(selectedSubreddit) {
  const userDataPath = getDataPathForSubreddit(selectedSubreddit);

  return fs.readJson(userDataPath);
}
