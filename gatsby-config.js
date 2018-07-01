module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/docs/pages`,
      },
    },
  ],
}
