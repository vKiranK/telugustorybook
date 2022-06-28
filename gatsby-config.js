module.exports = {
  pathPrefix: '/newstorybook',

  siteMetadata: {
    siteUrl: `https://vkirank.com/newstorybook/`,
  },
  plugins: [
    "reactjs-popup", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "react-device-detect", "@use-it/event-listener", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },

  ],
}
