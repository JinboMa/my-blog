<template lang="pug">
#app
	my-header
	main
		router-view.container
	.fixed-action-btn
		.row
			a.btn-floating.green
				i.material-icons person_pin
		.row
			a.btn-floating.blue(@click="scrollToTop", :title="$t('回顶部')")
				i.material-icons publish
	my-footer
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'

export default {
	name: 'app',
	components: {
		MyHeader, MyFooter
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

</style>
