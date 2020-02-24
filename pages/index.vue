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
            post-item(v-for="(post, index) in posts" :id="index" :title="post.attributes.title" :author="post.attributes.author" :image="post.attributes.image" :key="index" :path="getPermalink(post)")
        .load
            include ../pugs/load.pug
        .footer
            include ../pugs/footer.pug        
</template>

<script>
import PostItem from "../components/post.vue"

export default {
    components: {
        'post-item': PostItem
    },
    async asyncData() {
        const resolve = require.context("~/content/", true, /\.md$/);
        const imports = resolve.keys().map(key => {
        const [name] = key.match(/\/(.+)\.md$/);
        return resolve(key);
        })
        const zip = resolve.keys().map((e, i) => ({path: e, ...imports[i]}))
        return {
            posts: zip
        }
    },
    methods: {
        getPermalink(post) {
            return "/posts/" + post.path.split('\\').pop().split('/').pop().split('.')[0]
        }
    }
}
</script>