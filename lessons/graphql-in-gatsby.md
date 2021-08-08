---
path: "/graphql-in-gatsby"
title: "Explore GraphQL in Gatsby"
order: "2E"
section: "Gatsby Basics"
description: "TKTK"
---

To see how GraphQL is set up in Gatsby, visit `http://localhost:8000/___graphql`. This is a development-only page that you can use to explore the data in your Gatsby site.

To retrieve the metadata we added to `gatsby-config.js` in the previous step, run the following query:

```graphql
query GetSiteMetadata {
  site {
    siteMetadata {
      siteUrl
      title
      description
      image
    }
  }
}
```

The result of the query will show the site metadata:

```json
{
  "data": {
    "site": {
      "siteMetadata": {
        "siteUrl": "https://www.yourdomain.tld",
        "title": "Frontend Masters Intro to Gatsby",
        "description": "Frontend Masters course project",
        "image": "https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg"
      }
    }
  },
  "extensions": {}
}
```
