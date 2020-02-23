<template lang="pug">
  - var title = "Subtlety";
  - var slogan_line_1 = '" Be Honest'
  - var slogan_line_2 = "with yourself,"
  - var slogan_line_3 = "be free!"
  - var signature_text = "*yours Hezy"
    body
        .page
            .top
                include ../pugs/sidebar.pug
                include ../pugs/slider.pug
            .feed
                include ../pugs/feed.pug                
            .load
                include ../pugs/load.pug
            .footer
                include ../pugs/footer.pug
</template>