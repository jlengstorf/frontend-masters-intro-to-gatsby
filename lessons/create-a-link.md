---
path: "/create-link"
title: "Create a Link"
order: "2C"
section: "Gatsby Basics"
description: "TKTK"
---

Gatsby provides a `<Link>` component that enables performant links between pages. The primary benefits are:

- **No page reloads** — clicking a link loads the new page without requiring a full page refresh. This gives the site a more app-like feel.
- **Preloading content** — Gatsby will prefetch page content when the user hovers over a link. This speeds up navigation and makes for a better overall experience.

To add this, import the `Link` component from `gatsby`:

```diff
  import * as React from "react";
+ import { Link } from "gatsby";

  export default function AboutPage() {
    return (
      <main>
        <h1>About This Site</h1>
+       <Link to="/">Back to home</Link>
      </main>
    );
  }
```

Visit `http://localhost:8000/about/` and you should see the following:

![About page](./images/about-page.png)

Add a link to the about page from the home page by making the following changes:

```diff
  import * as React from 'react';
+ import { Link } from 'gatsby';

  export default function IndexPage() {
    return (
      <main>
        <h1>Hello Frontend Masters</h1>
+       <Link to="/about">About this site</Link>
      </main>
    );
  }
```
