export default {
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Sans&display=swap' }
    ]
  },
  css: [
      'static/css/normalize.css',
      'static/css/hamburgers.css',
      'static/css/fontawesome.css',
      { src: '~assets/scss/main', lang: 'scss' },
  ]
}