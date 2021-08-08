---
path: "/add-react-helmet"
title: "Add React Helmet to Modify Head Tags"
order: "3A"
section: "SEO & Sharing in Gatsby"
description: "TKTK"
---

TKTK

```bash
npm i gatsby-plugin-react-helmet react-helmet
```

In `gatsby-config.js`:

```diff
  module.exports = {
    siteMetadata: {
      siteUrl: 'https://www.yourdomain.tld',
      title: 'Frontend Masters Intro to Gatsby',
      description: 'Frontend Masters Intro to Gatsby course project',
      image:
        'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg',
    },
-   plugins: [],
+   plugins: ['gatsby-plugin-react-helmet'],
  };
```
