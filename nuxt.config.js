module.exports = {
    head: {
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Sans&display=swap' }
      ]
    },
    css: [
        'css/normalize.css',
        'css/hamburgers.css',
        'css/fontawesome.css',
        { src: 'scss/main', lang: 'scss' },
    ]
  }