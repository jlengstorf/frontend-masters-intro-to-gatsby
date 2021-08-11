---
path: "/query-static-graphql-data"
title: "Querying Static Data from Gatsby GraphQL"
order: "2F"
section: "Gatsby Basics"
description: "TKTK"
---

Most data access in Gatsby is done using GraphQL. In a lot of cases, we'll know exactly what data we're trying to load, so we can use what's called a "static query" (meaning we don't need any variables) to access it.

Let's load the site metadata we just created into our home page. Make the following edits to `src/pages/index.js`:

```diff
  import * as React from 'react';
- import { Link } from 'gatsby';
+ import { Link, useStaticQuery, graphql } from 'gatsby';

  export default function IndexPage() {
+   const data = useStaticQuery(graphql`
+     query GetSiteTitle {
+       site {
+         siteMetadata {
+           title
+         }
+       }
+     }
+   `);
+
+   const meta = data?.site?.siteMetadata ?? {};
+
    return (
+     <>
+       <header>
+         <Link to="/">{meta.title}</Link>
+       </header>
        <main>
          <h1>Hello Frontend Masters!</h1>
          <Link to="/about">About this site</Link>
        </main>
+     </>
    );
  }
```
