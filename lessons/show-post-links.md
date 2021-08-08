---
path: "/show-post-links"
title: "Show Recent MDX Posts on the Home Page"
order: "5D"
section: "Build a Gatsby Blog"
description: "TKTK"
---

TKTK

`src/pages/index.js`:

```diff
  import * as React from 'react';
- import { Link } from 'gatsby';
+ import { Link, useStaticQuery, graphql } from 'gatsby';
  import Layout from '../components/layout';

  export default function IndexPage() {
+   const data = useStaticQuery(graphql`
+     query GetBlogPosts {
+       allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 10) {
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
        <h1>Hello Frontend Masters</h1>
        <Link to="/about">About this site</Link>
+       <p>Check out my most recent blog posts.</p>
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
