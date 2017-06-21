import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Index'
const Test = resolve => require(['@/views/Test'], resolve)

Vue.use(Router)

const router = new Router({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		// return 期望滚动到哪个的位置
		return { x: 0, y: 0 }
	},
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			// redirect: '/home'
		},
		{
			path: '/test',
			name: 'Test',
			component: Test
		}
	]
})

router.beforeEach((to, from, next) => {
	next()
})

router.afterEach((to, from, next) => {

})

export default router
