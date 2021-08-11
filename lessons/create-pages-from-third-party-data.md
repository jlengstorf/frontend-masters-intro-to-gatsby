---
path: "/create-pages-from-third-party-data"
title: "Create Pages from Third-Party Data"
order: "7B"
section: "Use Third-Party Data"
description: "TKTK"
---

A powerful and convenient feature of Gatsby 3 is the ability to generate pages from third-party data _without custom code_. It used to require manual setup to generate pages, but now we have a file-based approach that makes things easier.

Let's generate a page for each _Learn With Jason_ episode stored in Sanity by creating a new file at `src/pages/episode/{SanityEpisode.slug__current}.js`.

The curly braces denote that we're using GraphQL data to create the pages, and then we set the GraphQL type, followed by the field to use.

The file name we've chosen will generate the following query:

```graphql
query GetBlogPosts {
  allSanityEpisode {
    nodes {
      id
      slug {
        current
      }
    }
  }
}
```

Then, it will create a page using the value of `slug.current` as the path. For example, the episode [Serverless Functions and TypeScript on Netlify](https://www.learnwithjason.dev/serverless-functions-and-typescript-on-netlify) has a slug of `serverless-functions-and-typescript-on-netlify`. That means our Gatsby site will generate a page at `http://localhost:8000/episode/serverless-functions-and-typescript-on-netlify`.

## Write the code for the generated page template

Inside the `src/pages/episode/{SanityEpisode.slug__current}.js` file, add the following code:

```jsx
import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../../components/layout.js";

export const query = graphql`
  query SanityEpisode($id: String!) {
    sanityEpisode(id: { eq: $id }) {
      title
      description
      slug {
        current
      }
      youtubeID
      date(fromNow: true)
      image {
        asset {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

export default function SanityEpisode({ data }) {
  const episode = data.sanityEpisode;

  return (
    <Layout title={episode.title} description={episode.description}>
      <GatsbyImage
        image={episode.image.asset.gatsbyImageData}
        alt={episode.title}
      />
      <h1>{episode.title}</h1>
      <p>
        (posted {episode.date}) — {episode.description}
      </p>
      <ul>
        <li>
          <a href={`https://www.learnwithjason.dev/${episode.slug.current}`}>
            full episode and details
          </a>
        </li>
        <li>
          <a href={`https://youtu.be/${episode.youtubeID}`}>watch on YouTube</a>
        </li>
      </ul>
    </Layout>
  );
}
```

> Note: see how there's a variable called $id used in the GraphQL query? This is the ID of the episode. Gatsby includes the ID in context, which is available to both the React component and the page query. This is a great example of why we sometimes need to query for images — there's no way to know ahead of time what episode we're currently rendering or what the image for it will be, so we need the ability to query for it based on the episode ID.
