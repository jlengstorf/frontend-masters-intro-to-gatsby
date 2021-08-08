---
path: "/add-mdx-support"
title: "Add MDX Support"
order: "5A"
section: "Build a Gatsby Blog"
description: "TKTK"
---

TKTK

```bash
npm i gatsby-source-filesystem gatsby-plugin-page-creator gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react
```

`gatsby-config.js`:

```diff
  module.exports = {
    siteMetadata: {
      siteUrl: 'https://www.yourdomain.tld',
      title: 'Frontend Masters Intro to Gatsby',
      description: 'Frontend Masters Intro to Gatsby course project',
      image:
        'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg',
    },
    plugins: [
      'gatsby-plugin-react-helmet',
+     {
+       resolve: 'gatsby-source-filesystem',
+       options: {
+         name: 'posts',
+         path: `${__dirname}/src/posts/`,
+       },
+     },
+     {
+       resolve: 'gatsby-plugin-page-creator',
+       options: {
+         path: `${__dirname}/src/posts/`,
+       },
+     },
+     {
+       resolve: 'gatsby-plugin-mdx',
+       options: {
+         defaultLayouts: {
+           posts: require.resolve('./src/components/layout.js'),
+         },
+       },
+     },
+   ],
  };
```
