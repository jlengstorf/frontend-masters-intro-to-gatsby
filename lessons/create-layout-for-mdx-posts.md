---
path: "/create-layout-for-mdx-posts"
title: "Create a Layout for MDX Posts"
order: "5C"
section: "Build a Gatsby Blog"
description: "TKTK"
---

TKTK

`src/components/post-layout.js`:

```jsx
import * as React from 'react';
import Layout from './layout.js';

export default function PostLayout({ children, pageContext }) {
  const { title, description } = pageContext.frontmatter;

  return (
    <Layout title={title} description={description}>
      {children}
      <Link to="/">&larr; back</Link>
    </Layout>
  );
}
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
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'posts',
          path: `${__dirname}/src/posts/`,
        },
      },
      {
        resolve: 'gatsby-plugin-page-creator',
        options: {
          path: `${__dirname}/src/posts/`,
        },
      },
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          defaultLayouts: {
-           posts: require.resolve('./src/components/layout.js'),
+           posts: require.resolve('./src/components/post-layout.js'),
          },
        },
      },
    ],
  };
```
