---
path: "/deploy-to-netlify"
title: "Deploy Your Gatsby Site to Netlify"
order: "8B"
section: "Deploy a Gatsby Site"
description: "TKTK"
---

You can use [the Netlify web app](https://app.netlify.com) to deploy a site, but it's often much faster to use the [Netlify CLI](https://ntl.fyi/cli). For this workshop, we'll use the CLI.

```bash
npm i -g netlify-cli@latest
```

Make sure you're using the latest version of the CLI (at the time of this workshop, the latest version is v6.0.8):

```bash
ntl --version
# example output => netlify-cli/6.1.0 darwin-x64 node-v16.6.1

# log into your Netlify account
ntl login

# initialize a new site for this repo
ntl init
```

> Note: `ntl` is a shorthand command. You can also use `netlify` (e.g. `netlify --version`) if you prefer.

The CLI asks a few questions:

1. Choose "Create & configure a new
   site"
2. Choose the Netlify account you want to deploy the site to
3. The rest of the prompts can use the defaults

Here's an example of what the terminal looks like after running the `ntl init` command:

```
? What would you like to do? +  Create & configure a new
 site
? Team: Sites by Blitz Jackson
Choose a unique site name (e.g. the-great-jlengstorf-site.netlify.app) or leave it blank for a random name. You can update the site name later.
? Site name (optional): undefined

Site Created

Admin URL: https://app.netlify.com/sites/musing-knuth-79e716
URL:       https://musing-knuth-79e716.netlify.app
Site ID:   02300c74-9ff3-492f-9ae8-f0375d0820d5
? Your build command (hugo build/yarn run build/etc): ga
tsby build
? Directory to deploy (blank for current dir): public
? Netlify functions folder: netlify/functions
? Seems like this is a Gatsby site.
❇️  We're going to install this Build Plugin: Essential
Gatsby plugin
➡️  OK to install? Yes
Adding deploy key to repository...
Deploy key added!

Creating Netlify GitHub Notification Hooks...
Netlify Notification Hooks configured!

Success! Netlify CI/CD Configured!

This site is now configured to automatically deploy from github branches & pull requests

Next steps:

  git push       Push to your git repository to trigger new site builds
  netlify open   Open the Netlify admin URL of your site
```

> Note: Netlify automatically detects that this is a Gatsby site and includes a [build plugin](https://ntl.fyi/build-plugins) to enable enhancements like build speed improvements, support for serverless functions, and more.
