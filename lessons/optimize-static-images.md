---
path: "/optimize-static-images"
title: "Optimize Static Images"
order: "6A"
section: "Gatsby Image Handling & Optimization"
description: "TKTK"
---


```bash
npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-transformer-sharp
```

`gatsby-config.js`:

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

`src/styles/index.module.css`:

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

`src/pages/index.js`:

```diff
  import * as React from 'react';
  import { Link, useStaticQuery, graphql } from 'gatsby';
  import { StaticImage } from 'gatsby-plugin-image';
  import Layout from '../components/layout';
+ import { imageWrapper } from '../styles/index.module.css';

  export default function IndexPage(props) {
    const data = useStaticQuery(graphql`
      query GetBlogPosts {
        allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 10) {
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
        <h1>Hello Frontend Masters</h1>
        <Link to="/about">About this site</Link>
        <p>Check out my most recent blog posts.</p>
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
