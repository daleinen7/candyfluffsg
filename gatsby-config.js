/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `f1c41492095c2a4b8c49581c53baae`,
        preview: false,
        disableLiveReload: false,
      },
    },
  ],
}
