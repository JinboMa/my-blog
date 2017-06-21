<template lang="pug">
.test-page
    h1 测试页
    span.test 测试字体大小
    .row
        .input-field.col.s3
            input.validate(type="text")
            label {{ $t('电话') }}
        .btn.btn-floating
            i.material-icons menu
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus">
.test
    font-size 2rem
</style>