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
    data(){
        return{
            list: [
                {
                    id: 1,
                    title: 'Card Title1 Card Title1 Card Title1 Card Title1 Card Title1 Card Title1',
                    img: require('@/assets/test1.jpg'),
                    icon: require('@/assets/icon.jpg'),
                    author: '马金博',
                    start_time: 1498256450943,
                    updata_time: 1498579200000,
                    classify: '测试',
                    content: 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.'
                },
                {
                    id: 2,
                    title: 'Card Title2',
                    img: require('@/assets/test2.jpg'),
                    icon: require('@/assets/icon.jpg'),
                    author: '马金博',
                    start_time: 1498256450943,
                    updata_time: 1498579200000,
                    classify: '测试1',
                    content: 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.'
                },
                {
                    id: 3,
                    title: 'Card Title3',
                    img: require('@/assets/logo.png'),
                    icon: require('@/assets/icon.jpg'),
                    author: '马金博',
                    start_time: 1498256450943,
                    updata_time: 1498579200000,
                    classify: '测试2',
                    content: 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.'
                }
            ]
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