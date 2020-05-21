import fs from 'fs-extra';
import needle from 'needle';
import {
  getDataPathForIcon,
  getDataPathForPost,
  getDataPathForSubreddit
} from './utils';

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

export async function downloadSubredditIcon(subreddit) {
  let res = await fetch(`https://reddit.com/r/${subreddit}/about.json`);
  res = await res.json();
  return fetchAndSaveIcon(
    res.data.community_icon ? res.data.community_icon : res.data.icon_img,
    subreddit
  );
}

async function fetchAndSaveIcon(iconUrl, subreddit) {
  const fileStream = fs.createWriteStream(getDataPathForIcon(subreddit));

  return new Promise(resolve => {
    if (!iconUrl) {
      resolve();
    }
    needle
      .get(iconUrl.split('?')[0])
      .pipe(fileStream)
      .on('end', () => resolve());
  });
}
