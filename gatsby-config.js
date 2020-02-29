const urljoin = require("url-join");
const siteConfig = require("./siteConfig");

module.exports = {
  siteMetadata: {
    title: siteConfig.name,
    author: siteConfig.author,
    description: siteConfig.description,
    siteUrl: urljoin(siteConfig.url, siteConfig.prefix),
    social: {
      twitter: siteConfig.twitter
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          // UA-99728303-1
          trackingId: "YOUR_GOOGLE_ANALYTICS_ID",
          // Setting this parameter is optional
          cookieName: "YOUR_CUSTOM_COOKIE_NAME", // default is gatsby-gdpr-google-analytics
          anonymize: true // default is true
        },
        facebookPixel: {
          pixelId: "YOUR_FACEBOOK_PIXEL_ID",
          // Setting this parameter is optional
          cookieName: "YOUR_CUSTOM_COOKIE_NAME" // default is gatsby-gdpr-facebook-pixel
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"]
      }
    },

    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans"]
        }
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1360,
              withWebp: true,
              showCaptions: true,
              quality: 75,
              wrapperStyle: `margin: 7vw 0;`
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-easy-import")(),
          require("postcss-custom-properties")({ preserve: false }),
          require("postcss-color-function")(),
          require("autoprefixer")({ browserlist: ["last 2 versions"] })
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ["/ignored.css", "prismjs/", "/prism.css", "docsearch.js/"], // Ignore files/folders
        purgeOnly: ["components/", "/main.css", "bootstrap/"] // Purge only these files/folders
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``
      }
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.name,
        short_name: siteConfig.shortName,
        start_url: siteConfig.prefix,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`
      }
    },
    // `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass"
  ]
};
