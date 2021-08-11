---
path: "/optimize-static-images-in-mdx"
title: "Optimize Static Images in MDX"
order: "6B"
section: "Gatsby Image Handling & Optimization"
description: "TKTK"
---

In MDX, we can make image optimization happen automatically for standard Markdown-style images, which is both convenient and a good way to avoid accidentally shipping enormous images to production.

To start, install the `gatsby-remark-images` plugin.

```bash
npm install gatsby-remark-images
```

## Add the plugin to your `gatsby-config.js`

Configure the plugin by updaing `gatsby-config.js` with the following:

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
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'posts',
          path: `${__dirname}/src/posts/`,
        },
      },
      {
        resolve: 'gatsby-plugin-page-creator',
        options: {
          path: `${__dirname}/src/posts/`,
        },
      },
+     'gatsby-remark-images',
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
+         gatsbyRemarkPlugins: [
+           {
+             resolve: 'gatsby-remark-images',
+             options: {
+               maxWidth: 1200,
+             },
+           },
+         ],
          defaultLayouts: {
            posts: require.resolve('./src/components/post-layout.js'),
          },
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: `${__dirname}/src/images/`,
        },
      },
      'gatsby-plugin-image',
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
    ],
  };
```

## Add an image to an MDX post

To see image optimization in action, add an image from the `src/images` folder to `src/posts/first-post.mdx`:

```diff
  ---
  date: 2021-08-11
  title: My First Blog
  description: This is my first MDX blog post.
  ---

  # Hello!

+ ![a corgi lying down near a fountain with a blossoming cherry tree in the background](../images/shiangling-RQbwjCKWxQw-unsplash.jpg)

  This is my first blog post.
```

Inspect the image that's rendered at `http://localhost:8000/first-post`, and you'll see that it's been optimized.
