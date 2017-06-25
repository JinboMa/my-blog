<template lang="pug">
.home-page
    blog-list
    pagination(v-model="active", :max="max", :pages="pages")
</template>
<script>
import BlogList from './components/BlogList'
import Pagination from '@/components/Pagination'
export default {
    components: { BlogList, Pagination },
    data(){
        return{
            active: 0,
            pages: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
            max: 10
        }
    }
}
</script>

<style scoped lang="stylus">
</style>