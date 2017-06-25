<template lang="pug">
header
    nav.home-nav(:class="navSetting.navClass")
        .nav-wrapper.container
            a.brand-logo(v-if="navSetting.showLogo",
                :class="[navSetting.logoPosition]")
                | {{ $t(navSetting.logo) }}
            ul(:class="[navSetting.navPosition]")
                li(v-for="item in navList", :key="item.blog",
                    :class="{active:active==item.path}")
                    router-link(:to="item.path") {{ $t(item.text) }}
                        i.material-icons(v-if="item.icon",
                            :class="item.icon_class")
                            | {{ item.icon }}
</template>

<script>
export default {
    created() {
        this.active = this.$route.path
    },
    watch: {
        '$route'(to, from) {
            this.active = to.path
        }
    },
    data() {
        return {
            active: '/',
            navSetting: {
                logo: 'Logo',
                showLogo: false,
                navClass: ['light-blue', 'darken-4'],
                navPosition: 'left',
                logoPosition: 'right',
            },
            navList: [
                {
                    name: 'home',
                    text: '首页',
                    icon: '',
                    icon_class: [],
                    path: '/'
                },
                {
                    name: 'blog-list',
                    text: '博客列表',
                    icon: '',
                    icon_class: [],
                    path: '/blog/list'
                },
                {
                    name: 'user-information',
                    text: '博主信息',
                    icon: '',
                    icon_class: [],
                    path: '/user/information'
                },
                {
                    name: 'user-diary',
                    text: '个人日记',
                    icon: '',
                    icon_class: [],
                    path: '/user/diary'
                },
                {
                    name: 'user-diary',
                    text: '留言板',
                    icon: '',
                    icon_class: [],
                    path: '/user/message'
                },
                {
                    name: 'user-setting',
                    text: '个人设置',
                    icon: '',
                    icon_class: [],
                    path: '/user/setting'
                }
            ]
        }
    },
}
</script>

<style scoped lang="stylus">

</style>