<template lang="pug">
#app
	home-nav
	router-view.container
	.fixed-action-btn
		.row
			a.btn-floating.green
				i.material-icons insert_chart
		.row
			a.btn-floating.blue(@click="scrollToTop")
				i.material-icons publish
</template>

<script>
import HomeNav from './components/HomeNav'

export default {
	name: 'app',
	components: {
		HomeNav
	},
	methods: {
		scrollToTop() {
			$('body').animate({ scrollTop: 0 }, 500)
		}
	}
}
</script>

<style lang="stylus">
@import './styl/init'
#app
	position relative 
</style>
