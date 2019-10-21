const {
  api: { projectId, dataset },
} = require('../backend/sanity.json')

require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: "jameshowell.dev",
    description: "Portfolio and Blog of James Howell",
    author: "James Howell",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "jameshowelldev",
        short_name: "jameshowelldev",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId,
        dataset,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Raleway:300,400,500,600,700,800,900',
          'Merriweather:300,400,500,600,700,800,900',
        ],
        display: 'swap',
      },
    },
  ],
}
