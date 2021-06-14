'use strict'

module.exports = {
  siteMetadata: {
    title: 'Complex Codes',
    description: 'A blog by Halvor Fladsrud Bø on programming related topics.',
    keywords: 'java, rust, go, python',
    siteUrl: 'https://complex.codes',
    author: {
      name: 'Halvor Fladsrud Bø',
      url: 'https://linkedin.com/in/halvorboe',
      email: 'halvor@complex.codes'
    }
  },
  plugins: [

      'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/content/blog`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://complex.codes'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
        {
          resolve: `gatsby-plugin-google-fonts`,
          options: {
            fonts: [
              `Poppins\:100,200,300,400,500,600,700,800,900`,
              `Oxygen\:300,400,700`,
            ],
            display: 'swap'
          }
        }
  ]
}
