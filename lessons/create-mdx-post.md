---
path: "/create-mdx-post"
title: "Create an MDX Blog Post"
order: "5B"
section: "Build a Gatsby Blog"
description: "TKTK"
---

Now that we have MDX support, we can create some MDX-powered blog posts!

Create your first MDX post in a new file located at `src/posts/first-blog.mdx`:

```mdx
# Hello!

This is my first blog post.
```

Add a second post at `src/posts/another-blog.mdx`:

```mdx
# Oh Dang

This blog is even better than the last one.
```

After saving these files, run `npm run develop` and the posts will be available at `http://localhost:8000/first-blog` and `http://localhost:8000/another-blog`, respectively.

And look! Not only is MDX working, but because we set the layout as our default layout, the blog posts are also being rendered with the same styles as the rest of the site. Pretty snazzy!
