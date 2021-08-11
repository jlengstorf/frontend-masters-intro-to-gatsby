---
path: "/optimize-static-images"
title: "Optimize Static Images"
order: "6A"
section: "Gatsby Image Handling & Optimization"
description: "TKTK"
---

One of Gatsby's most powerful features is its ability to process images. This means we can add images in Gatsby sites and they'll be optimized automatically: stylish placeholders, responsive images, lazy loading, and more, all with minimal setup.

To add image optimization, we need to add the Gatsby image plugin and support for Sharp, which is an open-source image processing library.

```bash
npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-transformer-sharp
```

## Configure image optimization in Gatsby

To enable the image optimization plugins, we need to update our `gatsby-config.js` with the following:

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
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          defaultLayouts: {
            posts: require.resolve('./src/components/post-layout.js'),
          },
        },
      },
+     {
+       resolve: 'gatsby-source-filesystem',
+       options: {
+         name: 'images',
+         path: `${__dirname}/src/images/`,
+       },
+     },
+     'gatsby-plugin-image',
+     'gatsby-plugin-sharp',
+     'gatsby-transformer-sharp',
    ],
  };
```

> Note: you'll need to restart the development server after making changes to this file.

## Define scoped styles for an image on the home page

Before we add an image, let's make sure it looks nice. Create a new file at `src/styles/index.module.css` with the following CSS inside:

```css
.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper [data-gatsby-image-wrapper] {
  border: 3px solid var(--black);
  border-radius: 50%;
}
```

> Note: the `[data-gatsby-image-wrapper]` selector lets us target Gatsby's automatically generated image wrapper div.

## Add a static image to the home page

To show a static image, we'll introduce Gatsby's `StaticImage` component. This component will take a `src` and `alt` prop, just like a standard `<img>` tag, but it allows us to pass in additional configuration including the placeholder style and the dimensions the image should be resized to.

Add one of the images in `src/images` to the home page by making the following changes in `src/pages/index.js`:

```diff
  import * as React from 'react';
  import { Link, useStaticQuery, graphql } from 'gatsby';
+ import { StaticImage } from 'gatsby-plugin-image';
  import Layout from '../components/layout.js';
+
+ import { imageWrapper } from '../styles/index.module.css';

  export default function IndexPage() {
    const data = useStaticQuery(graphql`
      query GetBlogPosts {
        allMdx {
          nodes {
            id
            slug
            frontmatter {
              title
              description
              date(fromNow: true)
            }
          }
        }
      }
    `);

    const posts = data.allMdx.nodes;

    return (
      <Layout>
+       <div className={imageWrapper}>
+         <StaticImage
+           src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
+           alt="a corgi sitting on a bed with red paper hearts all over it. it looks unamused."
+           placeholder="dominantColor"
+           width={300}
+           height={300}
+         />
+       </div>
+
        <h1>Hello Frontend Masters!</h1>
        <Link to="/about">About this site</Link>

        <h2>Check out my recent blog posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
              <small>posted {post.frontmatter.date}</small>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
```
