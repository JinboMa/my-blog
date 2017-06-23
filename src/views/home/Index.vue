<template lang="pug">
.home-page
    blog-list
</template>
<script>
import BlogList from './components/BlogList'
export default {
    components: { BlogList }
}
</script>

<style scoped lang="stylus">
.home-page
    height 2000px
</style>