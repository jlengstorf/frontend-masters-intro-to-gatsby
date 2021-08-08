---
path: "/add-scoped-styles"
title: "Add Scoped Styles With CSS Modules"
order: "4C"
section: "Make Gatsby Look Nice"
description: "TKTK"
---

TKTK

`src/styles/layout.module.css`:

```css
.header {
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.header a {
  color: inherit;
  display: inline-block;
  padding: 0.5rem;
  text-decoration: none;
}

.header a:focus,
.header a:hover {
  background: #fff;
  color: #333;
}

.content {
  margin: 3rem auto;
  max-width: 54ch;
}
```

`src/components/layout.js`:

```diff
  import * as React from 'react';
  import { Link, useStaticQuery, graphql } from 'gatsby';
  import { Seo } from '../components/seo.js';
+ import { header, content } from '../styles/layout.module.css';

  import '../styles/global.css';

  export default function Layout({
    children,
    title = false,
    description = false,
    image = false,
    path = false,
  }) {
    const data = useStaticQuery(graphql`
      query GetSiteTitle {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);

    const meta = data?.site?.siteMetadata ?? {};

    return (
      <>
        <Seo title={title} description={description} image={image} path={path} />
-       <header>
+       <header className={header}>
          <Link to="/">{meta.title}</Link>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </header>
-       <main>{children}</main>
+       <main className={content}>{children}</main>
      </>
    );
  }
```
