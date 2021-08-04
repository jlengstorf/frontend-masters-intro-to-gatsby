---
path: "/add-layout"
title: "Add a Layout"
order: "3A"
section: "Make Gatsby Look Nice"
description: "TKTK"
---

TKTK

```jsx
import * as React from "react";
import { Link } from "gatsby";

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
