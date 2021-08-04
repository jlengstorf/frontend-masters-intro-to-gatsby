module.exports = {
  siteMetadata: {
    title: "Intro to Gatsby v3",
    subtitle: "Now with 100% more boops!",
    description:
      "Learn how Gatsby enables you to quickly build Jamstack web apps and sites using modern technologies like React and GraphQL.",
    keywords: [
      "react",
      "react.js",
      "frontend masters",
      "gatsby",
      "graphql",
      "jason lengstorf",
      "js",
      "front end",
    ],
  },
  pathPrefix: "/intro-to-gatsby",
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
  ],
};
