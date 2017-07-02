<template lang="pug">
.blog-list
    blog-list(:list="list")
    pagination.pagination(v-model="active", :max="max", :pages="pages")
</template>

<script>
import BlogList from '@/components/BlogList'
import Pagination from '@/components/Pagination'
export default {
    components: { BlogList, Pagination },
    data() {
        return {
            active: 0,
            pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
            max: 10,
            list: [
                {
                    id: 1,
                    title: 'Card Title1 Card Title1 Card Title1 Card Title1 Card Title1 Card Title1',
                    img: require('@/assets/test2.jpg'),
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
</style>