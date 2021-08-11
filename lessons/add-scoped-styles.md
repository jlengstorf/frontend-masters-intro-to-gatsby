---
path: "/add-scoped-styles"
title: "Add Scoped Styles With CSS Modules"
order: "4C"
section: "Make Gatsby Look Nice"
description: "TKTK"
---

For truly global styles like site colors and fonts, a global stylesheet is a great choice. However, when we start getting into components, it can get tricky to avoid clashing styles — especially as the codebase grows and there are more developers working on the code.

This is where _scoped_ CSS becomes extremely useful. There are a lot of ways to accomplish this, including many flavors of CSS-in-JS, but the easiest is probably to use [CSS Modules](https://css-tricks.com/css-modules-part-1-need/). It's especially easy in Gatsby because support is built in — all we have to do is name the CSS file with a `.module.css` extension!

Let's define some styles for our layout component by creating a new file at `src/styles/layout.module.css` with the following CSS:

```css
.header {
  background: var(--black);
  color: var(--white);
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
  background: var(--white);
  color: var(--black);
}

.content {
  margin: 3rem auto;
  max-width: 54ch;
}
```

We take advantage of the global color variables defined in `src/styles/global.module.css`, even when we're scoping these particular styles to the layout component. Isn't that neat?

> Note: do you see how some of these class names are pretty risky in standard CSS? It's pretty likely that a class like `.header` will end up clashing with something else in your project. That's why CSS Modules are so useful — by scoping the styles to just this component, we can use any class name we want without fear of collision!

## Import the CSS Module into the layout component

To use the scoped CSS, we import classnames as if they were exported from a JavaScript module. Make the following changes to `src/components/layout.js`:

```diff
  import * as React from 'react';
  import { Link, useStaticQuery, graphql } from 'gatsby';
  import { Seo } from './seo.js';

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
