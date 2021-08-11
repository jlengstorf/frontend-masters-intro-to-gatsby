---
path: "/load-data-headless-cms"
title: "Load Data from a Headless CMS"
order: "7A"
section: "Use Third-Party Data"
description: "TKTK"
---

Where Gatsby _really_ starts to shine is when we dig into its third-party plugins. For example, there are a large number of headless CMSs out there, and many of them have a Gatsby source plugin available.

One such headless CMS is [Sanity](https://www.sanity.io/). For this workshop, we'll use the [_Learn With Jason_](https://www.learnwithjason.dev) Sanity instance to pull in episode data.

To start, let's install the Sanity source plugin:

```bash
npm install gatsby-source-sanity
```

## Configure the Sanity source plugin in Gatsby

To use the source plugin, make the following changes to `gatsby-config.js`:

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
      'gatsby-remark-images',
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          gatsbyRemarkPlugins: [
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 1200,
              },
            },
          ],
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
+     {
+       resolve: 'gatsby-source-sanity',
+       options: {
+         projectId: 'vnkupgyb',
+         dataset: 'production',
+       },
+     },
    ],
  };
```

After restarting the development server, we'll be able to see Sanity data in the GraphQL explorer.
