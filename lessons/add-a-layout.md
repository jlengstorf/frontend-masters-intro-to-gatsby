---
path: "/add-layout"
title: "Add a Layout"
order: "4A"
section: "Make Gatsby Look Nice"
description: "TKTK"
---

You may have noticed that we added a header to our home page that isn't showing up on the About page.

We _could_ fix this by copy-pasting the `<header>` from the home page into the About page, but that's going to become a huge maintenance issue as the number of pages in our site grows.

Instead, let's create a shared layout component for all of our pages to share.

Create a new file at `src/components/layout.js` with the following code:

```jsx
import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Seo } from "./seo.js";

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

## Add the layout to the home page

Next, we can update the home page to use the layout instead of our custom code. Edit `src/pages/index.js` with the following changes:

```diff
  import * as React from 'react';
- import { Link, useStaticQuery, graphql } from 'gatsby';
+ import { Link } from 'gatsby';
- import { Seo } from '../components/seo.js';
+ import Layout from '../components/layout.js';

  export default function IndexPage() {
-   const data = useStaticQuery(graphql`
-     query GetSiteTitle {
-       site {
-         siteMetadata {
-           title
-         }
-       }
-     }
-   `);
-
-   const meta = data?.site?.siteMetadata ?? {};
-
    return (
-     <>
-       <Seo />
-       <header>
-         <Link to="/">{meta.title}</Link>
-       </header>
-       <main>
+     <Layout>
        <h1>Hello Frontend Masters!</h1>
        <Link to="/about">About this site</Link>
+     </Layout>
-       </main>
-     </>
    );
  }
```

## Add the layout to the about page

Next, let's update the about page to use the layout. Edit `src/pages/about.js` with the following changes:

```diff
  import * as React from 'react';
  import { Link } from 'gatsby';
- import { Seo } from '../components/seo.js';
+ import Layout from '../components/layout.js';

  export default function AboutPage() {
    return (
-     <>
-       <Seo
-         title="About This Site"
-         description="More information about this site."
-       />
-       <main>
+     <Layout
+       title="About This Site"
+       description="More information about this site."
+     >
        <h1>About This Site</h1>
        <Link to="/">Back to home</Link>
+     </Layout>
-       </main>
-     </>
    );
  }
```
