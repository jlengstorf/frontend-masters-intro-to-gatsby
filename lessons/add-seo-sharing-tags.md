---
path: "/add-seo-sharing-tags"
title: "Add SEO & Social Sharing Tags"
order: "3B"
section: "SEO & Sharing in Gatsby"
description: "TKTK"
---

For convenience, creating an `<Seo>` component makes it easier to update all the different meta tags and other information required for sharing a page on various social sites.

To do that, create a new file at `src/components/seo.js` and add the following:

```jsx
import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

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

## Use the SEO component with no configuration

To use the component, import it into `src/pages/index.js`:

```diff
  import * as React from 'react';
  import { Link, useStaticQuery, graphql } from 'gatsby';
+ import { Seo } from '../components/seo.js';

  export default function IndexPage() {
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
+       <Seo />
        <header>
          <Link to="/">{meta.title}</Link>
        </header>
        <main>
          <h1>Hello Frontend Masters!</h1>
          <Link to="/about">About this site</Link>
        </main>
      </>
    );
  }
```

## Use the SEO component with configuration

On pages that shouldn't use the default metadata, we can pass in custom values for the title, description, image, and path.

Let's update the About page (`src/pages/about.js`) to use the SEO component with custom values:

```diff
  import * as React from 'react';
  import { Link } from 'gatsby';
+ import { Seo } from '../components/seo.js';

  export default function AboutPage() {
    return (
+     <>
+       <Seo
+         title="About This Site"
+         description="More information about this site."
+       />
        <main>
          <h1>About This Site</h1>
          <Link to="/">Back to home</Link>
        </main>
+     </>
    );
  }
```
