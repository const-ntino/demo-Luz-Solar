module.exports = {
  siteMetadata: {
    title: "Luz Solar 🌞",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:300,400,600`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Luz Solar 🌞`,
        short_name: `Luz Solar`,
        start_url: `/`,
        background_color: `#FAFAFA`,
        theme_color: `#38cf9b`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
