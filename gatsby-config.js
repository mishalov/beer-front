const globImporter = require("node-sass-glob-importer")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Крафтовая пивоварня Gatsby`,
    description: `Варим лучший крафт в Тюмени!`,
    author: `Mishalov Evgenii`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // importer: globImporter(),
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
        name: `Крафтовая пивоварня Gatsby`,
        short_name: `Антиконфа в Тюмени`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        //queryLimit: 1000
        // loginData: {
        //   identifier: "",
        //   password: "",
        // },
        apiURL: process.env.API_URL,
        contentTypes: [
          // Список типов контента, которые планируется запрашивать из Gatsby.
          `beers`,
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
