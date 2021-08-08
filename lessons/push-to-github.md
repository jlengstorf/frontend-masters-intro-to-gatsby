---
path: "/push-to-github"
title: "Push Your Gatsby Site to GitHub"
order: "8A"
section: "Deploy a Gatsby Site"
description: "TKTK"
---

If you don't already have it, the [GitHub CLI](https://cli.github.com/) makes this *much* easier. This is optional, but this is what we'll use in the workshop.

```bash
brew install gh
```

> For Windows or non-Homebrew solutions for macOS/Linux, see [the installation instructions](https://github.com/cli/cli#installation)

```bash
# if necessary, initialize the repo
git init

# create the repo on your GitHub account
gh repo create

# add all the files
git add -A

# commit the files
git commit -m 'feat: site ready to deploy'

# push the files to GitHub
git push origin main
```
