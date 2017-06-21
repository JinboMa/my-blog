<template lang="pug">
#app
	home-nav
	router-view
	.fixed-action-btn
		a.btn-floating.btn-large.red
			i.large.material-icons mode_edit
		ul
			li
				a.btn-floating.green(href="#!")
					i.material-icons insert_chart
			li
				a.btn-floating.blue(href="#!")
					i.material-icons publish
</template>

<script>
import HomeNav from './components/HomeNav'

export default {
	name: 'app',
	components: {
		HomeNav
	}
}
</script>

<style lang="stylus">
@import './styl/init'
#app
	position relative 
</style>
