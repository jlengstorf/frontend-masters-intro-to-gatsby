---
path: "/create-layout-for-mdx-posts"
title: "Create a Layout for MDX Posts"
order: "5D"
section: "Build a Gatsby Blog"
description: "TKTK"
---

In an MDX file, we can't add props to the layout component. That means we need a bit of special handling for MDX posts to make sure the title and description make it through to the layout.

Create a new component at `src/components/post-layout.js` with the following code:

```jsx
import * as React from "react";
import { Link } from "gatsby";
import Layout from "./layout.js";

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

## Use the post layout for MDX files

To use the new MDX layout, we need to swap it in our `gatsby-config.js`:

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

Now our posts show the correct title and description in the `<head>`!
