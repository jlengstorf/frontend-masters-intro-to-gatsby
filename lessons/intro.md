---
path: "/intro"
title: "Introduction"
order: "1A"
section: "Welcome"
description: "Get to know the Intro to Gatsby v3 course and your instructor, Jason Lengstorf!"
---

TODO: write this intro

## Prerequisites

- Node 14+ (this workshop uses Node v16.6.1)
- a GitHub account (we'll use this to make the source code accesible for deployment)
- a Netlify account (we'll use this to deploy the site from GitHub)

## How the repo works

There are two repos for this course: [the website you're currently on][site] and [the example projects][projects].

[projects]: https://github.com/jlengstorf/frontend-masters-intro-to-gatsby
[site]: https://github.com/jlengstorf/frontend-masters-intro-to-gatsby-project

## Set your Node version

Before we start, make sure you're using the latest version of Node. Strictly speaking you need at least Node 12. The code in this course was written using Node 16.6.1.

We'll be using [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating) to manage the Node version.

```bash
# if you need it, install the latest version of Node
nvm install 16

# make sure you're using the latest version of Node
nvm use 16

# we'll be using the Netlify CLI, so install that if you don't have it
npm install -g netlify-cli
```

## Fork the repo and set up your local dev environment

To get the site up and running, you'll need to fork the repo and clone it locally.

If you don't already have it, the [GitHub CLI](https://cli.github.com/) makes this _much_ easier. This is optional, but this is what we'll use in the workshop.

```bash
# if you don't already have it, install the GitHub CLI
brew install gh
```

> For Windows or non-Homebrew solutions for macOS/Linux, see [the installation instructions](https://github.com/cli/cli#installation)

With the GitHub CLI installed (or following the instructions on the GitHub UI), create your own fork of this project. You'll need a fork to be able to deploy it later, so don't skip this step!

```bash
# create a fork of the workshop project
gh fork jlengstorf/frontend-masters-intro-to-gatsby-project

# move into the forked repo
cd frontend-masters-intro-to-gatsby-project

# install the dependencies
npm i
```

## What's in the starter repo?

- `src/images/` — images that we'll use for the project
- a `.gitignore` file with the files and directories we don't want to track in Git
- an `.nvmrc` file with the version of Node we'll be using
- a `.prettierrc` file with the configuration for the [Prettier](https://prettier.io/) code formatter
- a `package.json` file with the dependencies for the project and the commands we'll need to run Gatsby
- a `README.md` file

None of these files are Gatsby-specific. In the next section, we'll create the simplest possible Gatsby site.
