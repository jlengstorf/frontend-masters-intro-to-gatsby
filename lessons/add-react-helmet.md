---
path: "/add-react-helmet"
title: "Add React Helmet to Modify Head Tags"
order: "3A"
section: "SEO & Sharing in Gatsby"
description: "TKTK"
---

Our site metadata is most useful if we add it to the head of our pages. To do that, we need to use React Helmet, which allows us to modify the `<title>` and `<meta>` tags on our pages, along with anything else we might want to change in our `<head>`.

This requires installing React Helmet itself, as well as the Gatsby plugin so it builds properly. Install both packages in your project:

```bash
npm i gatsby-plugin-react-helmet react-helmet
```

Next, we need to tell Gatsby to use the plugin. In `gatsby-config.js`, add a `plugins` array and add the plugin:

```diff
  module.exports = {
    siteMetadata: {
      siteUrl: 'https://www.yourdomain.tld',
      title: 'Frontend Masters Intro to Gatsby',
      description: 'Frontend Masters Intro to Gatsby course project',
      image:
        'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg',
    },
+   plugins: ['gatsby-plugin-react-helmet'],
  };
```
