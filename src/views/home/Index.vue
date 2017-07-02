<template lang="pug">
.home-page
    blog-list(:list="list")
</template>
<script>
import BlogList from '@/components/BlogList'
export default {
    components: { BlogList },
    data() {
        return {
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