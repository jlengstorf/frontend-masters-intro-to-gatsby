---
path: "/add-styles"
title: "Add CSS Styles"
order: "3B"
section: "Make Gatsby Look Nice"
description: "TKTK"
---

TKTK

## Add global styles

```jsx
import * as React from "react";
import { Link } from "gatsby";

import "../styles/global.css";

export function Layout({ children }) {
  return (
    <>
      <header>
        <Link to="/">Intro to Gatsby</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
```

## Add scoped styles using CSS Modules

```diff
  import * as React from 'react';
  import { Link } from 'gatsby';
+ import { header, content } from '../styles/layout.module.css';

  import '../styles/global.css';

  export function Layout({ children }) {
    return (
      <>
-       <header>
+       <header className={header}>
          <Link to="/">Intro to Gatsby</Link>
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
