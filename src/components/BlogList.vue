<template lang="pug">
.row
    .col.s12.m10(v-for="item in list")
        .card.white.horizontal
            .card-image(:style="{'backgroundImage': 'url('+ item.img + ')'}")
                //- img.valign-wrapper(:src="item.img")
            .card-stacked
                .card-content
                    span.card-title(:title="item.title") {{ item.title }}
                    .row.valign-wrapper
                        router-link(to="/").user.valign-wrapper
                            img.card-icon.circle(:src="item.icon")
                            span.author {{ item.author }}
                        .time.valign-wrapper
                            span.start {{ $t('创建时间：') }}
                            span.start-time {{ item.start_time | timeToString }}
                        .time.valign-wrapper
                            span.updata {{ $t('最近更新：') }}
                            span.updata-time {{ item.updata_time | timeToString }}
                    p.max-line-3 {{ item.content }}
</template>

<script>
export default {
    props: {
        list: {
            type: [Array],
            default: () => []
        }
    }
}
</script>

<style scoped lang="stylus">
.card
    cursor pointer
    user-select none
    min-width 730px
    &:hover
        box-shadow 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.3)
    .card-title
        font-weight bold
        display -webkit-box !important
        -webkit-box-orient vertical
        -webkit-line-clamp 1
        overflow hidden
    .card-image
        width 200px
        padding 10px
        background-size 100%
        background-position center
        background-repeat no-repeat
        background-clip content-box
    .card-icon
        margin 0 10px
        width 30px
    .user
        min-width 102px
        &:hover
            span
                color #0288d1
    .time
        min-width 192px
        height 30px
        margin-right 10px
        &:last-child
            margin-right 0
</style>