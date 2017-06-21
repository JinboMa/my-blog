<template lang="pug">
.home-page
    h1 {{ $t('首页') }}
    router-link(to="/test") test
    .content
        a.waves-effect.waves-light.btn test
</template>
<script>

export default {

}
</script>

<style scoped lang="stylus">
.content
    height 2000px
</style>