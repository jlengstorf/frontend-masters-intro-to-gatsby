---
path: "/query-images-graphql-mdx"
title: "Query Images from GraphQL in MDX"
order: "6D"
section: "Gatsby Image Handling & Optimization"
description: "TKTK"
---


`src/posts/another-blog.mdx`:

```diff
  ---
  date: 2021-08-04
  slug: another-blog
  title: Another Blog
  description: Watch out, I'm on a roll!
  ---

+ import { graphql } from 'gatsby';
+ import { GatsbyImage, getImage } from 'gatsby-plugin-image';
+
+ export const query = graphql`
+   query SmashburgerQuery {
+     file(name: { eq: "smashburger" }) {
+       childImageSharp {
+         gatsbyImageData(placeholder: DOMINANT_COLOR)
+       }
+     }
+   }
+ `;
+
  # Oh Dang

+ <GatsbyImage
+   image={getImage(props.data.file)}
+   alt="a smashburger on a plate with french fries in the foreground"
+ />
+
  This blog is even better than the last one.
```
