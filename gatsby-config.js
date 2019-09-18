module.exports = {
  siteMetadata: {
    title: `Zeorzy Project`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@zeorzy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `category1`,
        path: `${__dirname}/src/images/category1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `category2`,
        path: `${__dirname}/src/images/category2`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `category3`,
        path: `${__dirname}/src/images/category3`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `category4`,
        path: `${__dirname}/src/images/category4`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
