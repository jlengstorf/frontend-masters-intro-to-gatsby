---
path: "/create-page"
title: "Create a Page"
order: "2B"
section: "Gatsby Basics"
description: "TKTK"
---

Gatsby will create a page for every file in your site's `pages` directory. The slugs for these pages will be the name of the file (e.g. `about.md` will become `/about`).

Let's see this in action! Create a new file at `src/pages/about.js` and add the following:

```jsx
import * as React from "react";

export default function AboutPage() {
  return (
    <main>
      <h1>About This Site</h1>
    </main>
  );
}
```

Save the page. Gatsby will automatically create a page at `/about` without requiring a restart.

Visit `http://localhost:8000/about` to see the new page.
