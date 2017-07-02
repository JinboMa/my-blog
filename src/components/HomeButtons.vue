<template lang="pug">
.fixed-action-btn
    .row
        a.btn-floating.green
            i.material-icons person_pin
    .row
        a.btn-floating.blue(@click="scrollToTop", :title="$t('回顶部')")
            i.material-icons publish
</template>

<script>
export default {
    methods: {
        scrollToTop() {
            $('body').animate({ scrollTop: 0 }, 200)
        }
    }
}
</script>

<style scoped lang="stylus">

</style>