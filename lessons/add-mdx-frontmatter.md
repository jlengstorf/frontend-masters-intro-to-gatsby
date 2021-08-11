---
path: "/add-mdx-frontmatter"
title: "Add MDX Frontmatter"
order: "5C"
section: "Build a Gatsby Blog"
description: "TKTK"
---

Blog posts require more than content, though – we also need to add metadata like the post date and SEO tag values.

To do that, we can take advantage of _frontmatter_, which is a special part of Markdown and MDX files that adds additional data that won't be displayed on the page.

For each post, let's add a date, title, and description.

`src/posts/first-blog.mdx`:

```diff
+ ---
+ date: 2021-08-11
+ title: My First Blog
+ description: This is my first MDX blog post.
+ ---
+
  # Hello!

  This is my first blog post.
```

`src/posts/another-blog.mdx`:

```diff
+ ---
+ date: 2021-08-12
+ title: Another Blog
+ description: Watch out, I'm on a roll!
+ ---
+
  # Oh Dang

  This blog is even better than the last one.
```

But wait — after saving the frontmatter, our title and description aren't being added to the page title. Looks like we need to make a change so our SEO component can use the MDX frontmatter.

We'll do that in the next section.
