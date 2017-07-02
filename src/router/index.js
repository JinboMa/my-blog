import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import store from '@/store'
import Home from '@/views/home/Index'
const BlogList = resolve => require(['@/views/blog-list/Index'], resolve)
const UserSetting = resolve => require(['@/views/user-setting/Index'], resolve)
// const Test = resolve => require(['@/views/Test'], resolve)

const router = new Router({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		// return 期望滚动到哪个的位置
		return savedPosition
	},
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			// redirect: '/home'
		},
		{
			path: '/blog/list',
			name: 'BlogList',
			component: BlogList,
			// redirect: '/home'
		},
		{
			path: '/user/setting',
			name: 'UserSetting',
			component: UserSetting,
			// redirect: '/home'
		},
	]
})

let set_progress = async (time) => {
	let progress = 0
	for (; progress <= 100; progress++) {
		progress = await new Promise((resolve, reject) => {
			setTimeout(() => {
				if (store.getters.PROGRESS >= 100) {
					resolve(100)
				} else {
					store.commit('change_progress', progress)
					resolve(store.getters.PROGRESS)
				}
			}, time)
		})
	}
}

router.beforeEach((to, from, next) => {
	// set_progress(1000)
	next()
})

router.afterEach((to, from) => {
	// set_progress(1)
})

export default router
