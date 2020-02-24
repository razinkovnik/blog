<template lang="pug">
    - var title = "Subtlety";
    - var slogan_line_1 = '" Be Honest'
    - var slogan_line_2 = "with yourself,"
    - var slogan_line_3 = "be free!"
    - var signature_text = "*yours Hezy"
    .page
        .top
            include ../pugs/sidebar.pug
            include ../pugs/slider.pug
        .feed
            post-item(v-for="item in feed" :id="item.id" :title="item.title" :author="item.author" :image="item.image" :key="item.id")
        .load
            include ../pugs/load.pug
        .footer
            include ../pugs/footer.pug        
</template>

<script>
import PostItem from "../components/post.vue"
import feed from "../content/headers.json"
export default {
    components: {
        'post-item': PostItem
    },
    data() {
        return { feed }
    }
}
</script>