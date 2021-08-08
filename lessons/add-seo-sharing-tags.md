---
path: "/add-seo-sharing-tags"
title: "Add SEO & Social Sharing Tags"
order: "3B"
section: "SEO & Sharing in Gatsby"
description: "TKTK"
---

TKTK

`src/components/seo.js`:

```jsx
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export function Seo(props) {
  const data = useStaticQuery(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  const title = props.title || defaults.title;
  const description = props.description || defaults.description;
  const image = new URL(props.image || defaults.image, defaults.siteUrl);
  const url = new URL(props.path || `/`, defaults.siteUrl);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}
```

`src/components/layout.js`:

```diff
  import * as React from 'react';
  import { Link, useStaticQuery, graphql } from 'gatsby';
+ import { Seo } from '../components/seo.js';

  export default function Layout({
    children,
+   title = false,
+   description = false,
+   image = false,
+   path = false,
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
+       <Seo title={title} description={description} image={image} path={path} />
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
