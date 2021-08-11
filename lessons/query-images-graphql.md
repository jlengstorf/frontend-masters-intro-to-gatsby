---
path: "/query-images-graphql"
title: "Query Images from GraphQL"
order: "6C"
section: "Gatsby Image Handling & Optimization"
description: "TKTK"
---

Images can also be queried from GraphQL in Gatsby. In this workshop we'll use a contrived example, but as the complexity of your site grows, it often becomes necessary to use this approach because the images can't be hard-coded into the site — for example, when they're coming from an API.

Gatsby uses a special component called `GatsbyImage` to handle these, and it accepts a special data object that includes all the details about the image, placeholders, dimensions, and everything else it needs to render an optimized image.

Let's give this a try by querying for one of our images in `src/pages/about.js`:

```diff
  import * as React from 'react';
- import { Link } from 'gatsby';
+ import { Link, graphql } from 'gatsby';
  import { GatsbyImage, getImage } from 'gatsby-plugin-image';
  import Layout from '../components/layout';

+ export const query = graphql`
+   query CocktailQuery {
+     file(name: { eq: "cocktail" }) {
+       childImageSharp {
+         gatsbyImageData(placeholder: DOMINANT_COLOR)
+       }
+     }
+   }
+ `;
+
- export default function AboutPage() {
+ export default function AboutPage({ data }) {
    return (
      <Layout title="About This Site">
+       <GatsbyImage
+         image={getImage(data.file)}
+         alt="a cocktail set inside an elaborate floral arrangement with dry ice mist curling out and around it"
+       />
        <h1>About This Site</h1>
        <Link to="/">Back to home</Link>
      </Layout>
    );
  }
```
