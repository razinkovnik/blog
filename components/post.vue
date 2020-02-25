<template lang="pug">
    .post(:class="direction")
        img(:src="image", :alt="image")
        .post__text                        
            h2 {{title}}
            span.data {{author}}
            a.link(:href="path") Discover more
        .post__background
</template>

<script>
export default {
    name: 'post',
    props: ["title", "author", "image", "id", "path"],
    computed: {
        direction: function() {
            return this.id % 2 == 0 ? "left" : "right"
        }
    }
}
</script>