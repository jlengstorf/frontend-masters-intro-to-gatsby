---
path: "/add-mdx-support"
title: "Add MDX Support"
order: "5A"
section: "Build a Gatsby Blog"
description: "TKTK"
---

Many Gatsby sites are heavily content-driven, so creating full-blown React components for every page feels a little heavy-handed.

Writing in Markdown is a common approach for developer-focused writing, but it's limited — we _can_ add custom elements, but it means writing a bunch of HTML that's not shareable between pages.

Fortunately, MDX lets us get the best of both worlds: we _mostly_ write Markdown, but we have access to a rich set of React components that can be used to add custom functionality and layouts to our pages.

To start, let's install the required plugins and packages to enable MDX support in Gatsby.

```bash
npm i gatsby-source-filesystem gatsby-plugin-page-creator gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react
```

> Note: `gatsby-plugin-page-creator` is not requried for MDX support. It allows us to automatically create pages from a folder full of files in the same way Gatsby uses the `src/pages` folder.

## Configure Gatsby with MDX support

To get MDX running with our Gatsby site, add the following to `gatsby-config.js`:

```diff
  module.exports = {
    siteMetadata: {
      siteUrl: 'https://www.yourdomain.tld',
      title: 'Frontend Masters Intro to Gatsby',
      description: 'Frontend Masters Intro to Gatsby course project',
      image:
        'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg',
    },
    plugins: [
      'gatsby-plugin-react-helmet',
+     {
+       resolve: 'gatsby-source-filesystem',
+       options: {
+         name: 'posts',
+         path: `${__dirname}/src/posts/`,
+       },
+     },
+     {
+       resolve: 'gatsby-plugin-page-creator',
+       options: {
+         path: `${__dirname}/src/posts/`,
+       },
+     },
+     {
+       resolve: 'gatsby-plugin-mdx',
+       options: {
+         defaultLayouts: {
+           posts: require.resolve('./src/components/layout.js'),
+         },
+       },
+     },
    ],
  };
```

> Note: the Gatsby development server needs to be restarted for changes to take effect. But don't do that just yet! We haven't created any MDX pages, so right now nothing will happen.
