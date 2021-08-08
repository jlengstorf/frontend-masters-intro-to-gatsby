---
path: "/query-static-graphql-data"
title: "Querying Static Data from Gatsby GraphQL"
order: "2F"
section: "Gatsby Basics"
description: "TKTK"
---

TKTK

```diff
  import * as React from 'react';
- import { Link } from 'gatsby';
+ import { Link, useStaticQuery, graphql } from 'gatsby';

  export default function Layout({ children }) {
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
      <>
        <header>
-         <Link to="/">Intro to Gatsby</Link>
+         <Link to="/">{meta.title}</Link>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <main>{children}</main>
      </>
    );
  }
```
