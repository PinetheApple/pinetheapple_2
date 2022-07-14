module.exports = {
  siteMetadata: {
    title: "Pine Space",
    siteUrl: "https://pinetheapple.tech",
    description: 'Portfolio site',
    image: 'https://www.dropbox.com/s/5lvvujnnan5txkt/pineappleinspace.jpg?dl=0',
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/images/favicon_porg.png',
      },
    },
  ],
};