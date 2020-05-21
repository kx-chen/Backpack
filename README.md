# Backpack Reader

[![Build Status](https://travis-ci.com/kx-chen/Backpack.svg?token=shUduPKcLXQRPp5hZihq&branch=master)](https://travis-ci.com/kx-chen/reddit-offline-desktop)

Backpack Reader is a desktop app for downloading and reading Reddit while offline.

![Dashboard view](resources/main.png?raw=true 'Dashboard view')

![Sidebar shrunk](resources/sidebar.png?raw=true 'Shrunk sidebar')

![Search for subreddit](resources/search.png?raw=true 'Search for subreddit')

![Post detail](resources/post.png?raw=true 'Post detail')

## Install

First, clone the repo via git.
And then install the dependencies with yarn.

```bash
$ cd Backpack
$ yarn
```

## Starting Development

Start the app in the `dev` environment.

```bash
$ yarn dev
```

## Packaging for Production

To package apps for the local platform:

```bash
$ yarn package
```

### Running Tests

This project uses Jest as the test runner.

`$ yarn test`

### End to End Tests

Coming soon.

## Code Structure/Tech Stack

`app/`

Main JavaScript code for Backpack Reader. Components are built with React.

Tech Stack:

- React
- Redux
- Jest

## Contributions

All contributions, pull requests, and feedback welcome! Roasts of all kinds welcome

## Future Plans

- [ ] End to End tests.

And more!
