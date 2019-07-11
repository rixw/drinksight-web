export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title:
      'DrinkSight: Retail, Ecommerce &amp; Brand Insight for the Drinks Trade',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "I am a retail and ecommerce specialist with over 20 years' experience in senior roles in the drinks trade. I help businesses grow, implement digital transformation, and reach cusatomers in the modern retail environment."
      },
      { property: 'og:title', content: 'DrinkSight' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://drinksight.com' },
      {
        property: 'og:image',
        content: 'https://drinksight.com/android-chrome-512x512.png'
      },
      { property: 'og:image:alt', content: "DrinkSight's eye logo" },
      {
        property: 'og:description',
        content:
          'Retail, ecommerce and brand insight for the drinks trade. Helping wine, beer and spirits companies with digital transformation.'
      },
      { property: 'twitter:card', content: 'DrinkSight' },
      { property: 'twitter:site', content: '@drinksight' },
      { name: 'apple-mobile-web-app-title', content: 'DrinkSight' },
      { name: 'application-name', content: 'DrinkSight' },
      { name: 'msapplication-TitleColor', content: '#b91d47' },
      { name: 'msapplication-navbutton-color', content: '#b91d47' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        color: '#ac3b61',
        href: '/safari-pinned-tab.svg'
      }
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/28f592ac2b.js'
      }
    ],
    htmlAttrs: { lang: 'en' },
    bodyAttrs: {
      class: 'has-navbar-fixed-top'
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [{ src: '@/assets/site.scss', lang: 'scss' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    // 'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      console.log('scrollBehavior...')
      console.log(to)

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      let position = false

      // if no children detected and scrollToTop is not explicitly disabled
      if (
        to.matched.length < 2 &&
        to.matched.every(
          (r) => r.components.default.options.scrollToTop !== false
        )
      ) {
        console.log('No children, can scroll to top, so scroll')
        // scroll to the top of the page
        position = { x: 0, y: 0 }
      } else if (
        to.matched.some((r) => r.components.default.options.scrollToTop)
      ) {
        // if one of the children has scrollToTop option set to true
        position = { x: 0, y: 0 }
      }

      // savedPosition is only available for popstate navigations (back button)
      if (savedPosition) {
        position = savedPosition
      }

      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (
          typeof window.CSS !== 'undefined' &&
          typeof window.CSS.escape !== 'undefined'
        ) {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash, offset: { x: 0, y: 20 } }
          }
        } catch (e) {
          console.warn(
            'Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).'
          )
        }
      }

      return position
    }
  }
}
