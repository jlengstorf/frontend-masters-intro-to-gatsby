---
path: "/add-global-styles"
title: "Add Global CSS Styles"
order: "4B"
section: "Make Gatsby Look Nice"
description: "TKTK"
---

TKTK

`src/styles/global.css`:

```css
html,
body {
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
  line-height: 1.4;
}

body {
  margin: 0;
}
```

`src/components/layout.js`:

```diff
  import * as React from 'react';
  import { Link, useStaticQuery, graphql } from 'gatsby';
  import { Seo } from '../components/seo.js';

+ import '../styles/global.css';

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
        <header>
          <Link to="/">{meta.title}</Link>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <main>{children}</main>
      </>
    );
  }
```
