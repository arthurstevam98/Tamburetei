const { dirname } = require('path')

module.exports = {
  siteMetadata: {
    title: 'Tamburetei',
    description: 'Fazendo de tamburete as cadeiras de CC@UFCG',
    author: '@OpenDevUFCG',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/..`,
        name: 'subjects',
        ignore: [
          '**/\\.*',
          '**/_app',
          '**/scripts',
          filePath => {
            if (
              // ignore markdowns in the project root folder
              /tamburetei$/i.test(dirname(filePath)) &&
              /\.md$/.test(filePath)
            ) {
              return true
            }

            return false
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Tamburetei',
        short_name: 'Tamburetei',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'content/assets/icon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Roboto'],
      },
    },
    'gatsby-plugin-sass',
  ],
}
