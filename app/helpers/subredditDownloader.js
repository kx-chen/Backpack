export async function downloadSubredditJSON(name) {
  return new Promise((resolve) => {
    console.log("downloading...", name);
    resolve("done!");
  });
}
