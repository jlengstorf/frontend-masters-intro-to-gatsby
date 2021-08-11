---
path: "/add-global-styles"
title: "Add Global CSS Styles"
order: "4B"
section: "Make Gatsby Look Nice"
description: "TKTK"
---

Now that we've got a layout that's consistent across all pages, let's add some CSS and start making this site a little more visually appealing.

There are a few different ways to add CSS to a Gatsby site. Let's start with the simplest: global styles.

Any styles added globally will affect all components on the site — this is plain ol' CSS.

To start, let's add some baseline styles by creating a file at `src/styles/global.css` with the following:

```css
:root {
  --black: #333;
  --gray: #555;
  --white: #fff;
}

* {
  box-sizing: border-box;
}

html,
body {
  color: var(--gray);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
  line-height: 1.4;
}

body {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--black);
}
```

There's nothing special about this CSS. This will work in any browser and with any framework. We're using CSS variables to set colors — more on why we made that choice a bit later.

## Load global styles in Gatsby

To load global styles, all we have to do is import our new global stylesheet in `src/components/layout.js`:

```diff
  import * as React from 'react';
  import { Link, useStaticQuery, graphql } from 'gatsby';
  import { Seo } from './seo.js';

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
