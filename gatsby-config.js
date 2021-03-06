/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
        additionalData: `@use '_variables' as var;`,
      },
      sassOptions: {
        includePaths: [`${__dirname}/src/styles`],
      },
    },
  ],
}
