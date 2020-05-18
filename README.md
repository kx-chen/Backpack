# Reddit Offline Desktop

[![Build Status](https://travis-ci.com/kx-chen/Backpack.svg?token=shUduPKcLXQRPp5hZihq&branch=master)](https://travis-ci.com/kx-chen/reddit-offline-desktop)

## Install

First, clone the repo via git.
And then install the dependencies with yarn.

```bash
$ cd reddit-offline
$ yarn
```

## Starting Development

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```

## Packaging for Production

To package apps for the local platform:

```bash
$ yarn package
```
