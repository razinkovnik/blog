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
export default {
    components: {
        'post-item': PostItem
    },
    data() {
        return { 
            feed: [
                { id: 0, title: 'Exploring visual  trends in  contemporaneity', author: 'by Jessica, 5 Jan 2017', image: 'post1.png' },
                { id: 1, title: 'Art trends in the publicity', author: 'by Hezy, 30 Dec 2016', image: 'post2.png' },
                { id: 2, title: 'What makes a  truly great and creative logo?', author: 'by Jessica, 7Dec 2016', image: 'post3.png' },
                { id: 3, title: 'We worked with  our client to  build the story', author: 'by Hezy, 5 Dec 2016', image: 'post4.png' },
        ]}
    }
}
</script>