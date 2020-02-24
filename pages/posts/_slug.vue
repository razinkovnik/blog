<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-html="post"></div>
  </div>
</template>
<script>
export default {
    async asyncData({ params }) {
        try {
            let post = await import(`~/content/${params.slug}.md`)
            return { post: post.html, title: post.attributes.title }
        } catch (err) {
            return { post: "", title: "page not found" }
        }
    }
}
</script>