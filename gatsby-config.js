module.exports = {
  siteMetadata: {
    site: `Konfetka`,
    title: `Конфетка - Сеть кондитерских магазинов`,
    description: `Конфетка - сеть фирменных кондитерских магазинов в г. Кокшетау, Казахстан. Огромный ассортимент печенья, конфет, вафель и шоколада на любой вкус и бюджет. Сладости от Рахат, Баян-Сулу, Славянка, Садко (Sweet-life), Далматово, Пионер, Микс-Макс и многих других. Кондитерские изделия, шоколад, конфеты в Кокшетау.`,
    titleTemplate: `%s - Конфетка`,
    siteUrl: `https://konfetka-shop.kz/`,
    language: `ru`,
    color: `#FF8515`,
    instagram: 'konfetka.kz',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Конфетка - Сеть кондитерских магазинов`,
        short_name: `Конфетка`,
        start_url: `/`,
        background_color: `#FF8515`,
        theme_color: `#FF8515`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
