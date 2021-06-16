require('dotenv').config();
const { API_KEY } = process.env;

export default {
  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',
  ssr:false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate:  '%s  Quality Web Studio',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '群馬県にて活動しているWEB屋です。ホームページ制作をまるっと引き受け、その他コーディング業務など。お気軽にご相談ください。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Quality Web Studio' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: 'https://quality-web.jp/' },
      { hid: 'og:title', property: 'og:title', content: 'Quality Web Studio' },
      { hid: 'og:description', property: 'og:description', content: '群馬県にて活動しているWEB屋です。ホームページ制作をまるっと引き受け、その他コーディング業務など。お気軽にご相談ください。' },
      { hid: 'og:image', property: 'og:image', content: '' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@create_toom' },
      { hid: 'twitter:image', property: 'twitter:image', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        type: 'module',
        src: '//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js',
        body:true
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/reset.css',
    '@/assets/scss/common.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/main.js' },
    { src: '~/plugins/vue-scrollto.ts' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-gtag',
  ],
  'google-gtag': {
    id: 'G-EM2T5ZCR0V',
    debug: true, // Enable to track in dev mode.
  },
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://quality-web.jp/",
  },
  googleAnalytics: {
    id: 'G-EM2T5ZCR0V'
  },

  styleResources: {
    scss: [
      '@/assets/scss/_mixin.scss',
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap']
  },
  env: {
    API_KEY
  },
  performance: { hints: false },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/page/:p',
        component: resolve(__dirname, 'pages/index.vue'),
        name: 'page',
      })
    },
  },
// ローディングバー設定
loading: {
    color: 'mediumseagreen',
    height: '2px'
  },
}
