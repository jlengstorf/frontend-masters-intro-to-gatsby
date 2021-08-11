---
path: "/add-site-metadata"
title: "Add Site Metadata"
order: "2D"
section: "Gatsby Basics"
description: "TKTK"
---

Gatsby allows for configuration inside a file called `gatsby-config.js`. There are [several configuration options](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/), but we'll only focus on a few for this workshop.

The first we'll look at is the `siteMetadata` object. This is an object that contains metadata about your site like its name and description.

Create a file at the root of your project called `gatsby-config.js` and add the following:

```js
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Frontend Masters Intro to Gatsby",
    description: "Frontend Masters Intro to Gatsby course project",
    image:
      "https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg",
  },
};
```
