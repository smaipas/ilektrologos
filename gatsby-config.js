module.exports = {
  siteMetadata: {
    title: `Nicosia Electrician`,
    description: `Electrician Online - Electrical Installations in Nicosia | Ηλεκτρολόγος Online - Ηλεκτρολογικές Εγκαταστάσεις στη Λευκωσία`,
    author: `Sotiris Maipas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-smoothscroll',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:100,400,700'],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-eslint',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nicosia Electrician`,
        short_name: `Nicosia Electrician`,
        start_url: `/`,
        background_color: `#282828`,
        theme_color: `#ffc20e`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
