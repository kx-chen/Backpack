import fetch from 'node-fetch';
import fs from 'fs-extra';
import { getDataPathForPost, getDataPathForSubreddit } from './utils';

export async function downloadSubredditJSON(name) {
  return fetch(`https://reddit.com/r/${name}.json?limit=50`)
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

export async function downloadSubredditPosts(data, selectedSubreddit) {
  data.data.children.forEach(post => {
    const dataPath = getDataPathForPost(selectedSubreddit, post.data.id);

    downloadIndividualPost(post.data.id)
      .then(res => saveSubredditJson(res, selectedSubreddit, dataPath))
      .catch(err => console.log(err));
  });
}

async function downloadIndividualPost(id) {
  return fetch(`https://reddit.com/${id}.json`)
    .then(res => res.json())
    .catch(err => {
      throw err;
    });
}

export function saveSubredditJson(data, selectedSubreddit, path) {
  // append the last updated date to the json
  // eslint-disable-next-line no-param-reassign
  data.lastUpdated = new Date();

  return fs
    .outputJson(path, data)
    .then(() => data)
    .catch(err => {
      throw err;
    });
}

export function fetchSubredditPosts(selectedSubreddit) {
  const userDataPath = getDataPathForSubreddit(selectedSubreddit);

  return fs.readJson(userDataPath);
}
