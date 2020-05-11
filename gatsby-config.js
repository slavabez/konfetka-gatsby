const siteMetadata = {
  site: `Konfetka`,
  title: `Конфетка - Сеть кондитерских магазинов`,
  name: `Конфетка - Сеть кондитерских магазинов`,
  description: `Конфетка - сеть фирменных кондитерских магазинов в г. Кокшетау, Казахстан. Огромный ассортимент печенья, конфет, вафель и шоколада на любой вкус и бюджет. Сладости от Рахат, Баян-Сулу, Славянка, Садко (Свитлайф), Далматово, Пионер, Микс-Макс и многих других. Кондитерские изделия, шоколад, конфеты в Кокшетау.`,
  titleTemplate: `%s - Конфетка`,
  siteUrl: `https://konfetka-shop.kz/`,
  language: `ru`,
  color: `#FF8515`,
  instagram: 'konfetka.kz',
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-chakra-ui',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Конфетка - Сеть кондитерских магазинов`,
        short_name: `Конфетка`,
        start_url: `/`,
        background_color: `#FF8515`,
        theme_color: `#FF8515`,
        display: `standalone`,
        icon: `src/assets/logo_candy.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
  ],
};
