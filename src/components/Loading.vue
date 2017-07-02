<template lang="pug">
.progress(v-show="width !== '100%' && width !== '0%'")
    .determinate.light-blue.darken-4(:style="{width: width}")
</template>

<script>
export default {
    props: {
        progress: {
            type: [Number, String],
            default: 100
        }
    },
    computed: {
        width() {
            let progress = parseInt(this.progress)
            return progress + '%'
        }
    }
}
</script>

<style scoped lang="stylus">
.progress
    position fixed
    z-index 100
    margin 0
    background-color white
</style>