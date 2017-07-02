<template lang="pug">
#app
	loading(:progress="PROGRESS")
	my-header
	main
		router-view.container
	my-footer
	home-buttons
</template>

<script>
import Loading from './components/Loading'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import HomeButtons from './components/HomeButtons'

import { mapGetters, mapMutations } from 'vuex'

export default {
	name: 'app',
	components: {
		MyHeader, MyFooter, HomeButtons, Loading
	},
	computed: {
		...mapGetters(['PROGRESS'])
	}
}
</script>

<style lang="stylus">
@import './styl/init'

</style>
