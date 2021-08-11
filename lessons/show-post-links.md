---
path: "/show-post-links"
title: "Show Recent MDX Posts on the Home Page"
order: "5E"
section: "Build a Gatsby Blog"
description: "TKTK"
---

To make our blog posts easier to find, let's add a list of the most recent posts to the home page.

Because Gatsby uses GraphQL for everything, we can get our list of posts in a similar fashion to how we got site metadata. Start on `http://localhost:8000/___graphql` and build out a query for the MDX data using the `allMdx` query.

```graphql
query GetBlogPosts {
  allMdx {
    nodes {
      id
      slug
      frontmatter {
        title
        description
        date(fromNow: true)
      }
    }
  }
}
```

## Display the post query results on the home page

Add the query to the home page and show the results by making the following modifications to `src/pages/index.js`:

```diff
  import * as React from 'react';
- import { Link } from 'gatsby';
+ import { Link, useStaticQuery, graphql } from 'gatsby';
  import Layout from '../components/layout.js';

  export default function IndexPage() {
+   const data = useStaticQuery(graphql`
+     query GetBlogPosts {
+       allMdx {
+         nodes {
+           id
+           slug
+           frontmatter {
+             title
+             description
+             date(fromNow: true)
+           }
+         }
+       }
+     }
+   `);
+
+   const posts = data.allMdx.nodes;
+
    return (
      <Layout>
        <h1>Hello Frontend Masters!</h1>
        <Link to="/about">About this site</Link>
+
+       <h2>Check out my recent blog posts</h2>
+       <ul>
+         {posts.map((post) => (
+           <li key={post.id}>
+             <Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
+             <small>posted {post.frontmatter.date}</small>
+           </li>
+         ))}
+       </ul>
      </Layout>
    );
  }
```
