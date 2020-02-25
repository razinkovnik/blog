<template lang="pug">
  .page            
    .post
        include ../../pugs/sidebar.pug
        img.slider(:src="image", alt="main post image")
        .author
          span {{ author }}
        .title
          h1 {{ title }}
        .text(v-html="post")
    .footer
        include ../../pugs/footer.pug
</template>
<script>
export default {
    async asyncData({ params }) {
        try {
            let post = await import(`~/content/${params.slug}.md`)
            return { 
              post: post.html, 
              title: post.attributes.title, 
              author: post.attributes.author,
              image: post.attributes.image
            }
        } catch (err) {
            return { post: "", title: "page not found" }
        }
    }
}
</script>