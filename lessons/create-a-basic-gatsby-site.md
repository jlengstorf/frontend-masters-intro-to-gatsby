---
path: "/create-a-basic-gatsby-site"
title: "Create a Basic Gatsby Site"
order: "2A"
section: "Gatsby Basics"
description: "tktk"
---

The bare minimum for a Gatsby site is a file at `src/pages/index.js` that exports a React component as its default export.

Let's get our first Gatsby site running by creating this file.

`src/pages/index.js`:

```jsx
import * as React from "react";

export default function IndexPage() {
  return (
    <main>
      <h1>Hello Frontend Masters!</h1>
    </main>
  );
}
```

Save this file, then start the Gatsby development server.

```bash
npm run develop
```

This starts a development server at `http://localhost:8000`.
