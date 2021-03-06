module.exports = {
  siteMetadata: {
    title: `FemMA`,
    description: `Workout with top UFC athletes.`,
    siteUrl: `https://www.femma.com`,
    author: `Justin McFadden`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-landing-page-starter`,
        short_name: `landing`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#675CE2`,
        display: `standalone`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`  
  ],
}
