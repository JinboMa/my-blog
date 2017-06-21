<template lang="pug">
.hello
	h1 {{ $t('general.test') }}
	button(@click="test") {{ myLangurage }}
	span {{ texts }}
</template>

<script>
export default {
	name: 'hello',
	data() {
		return {
			langurage: 'zh-CN',
			texts: 'sagasgsag'
		}
	},
	watch: {
		'langurage'(value) {
			this.$i18n.locale = value
		}
	},
	computed: {
		myLangurage() {
			if (this.langurage === 'zh-CN') return '中文';
			if (this.langurage === 'en') return '英文';
		}
	},
	methods: {
		test() {
			this.langurage === 'en'
				? this.langurage = 'zh-CN'
				: this.langurage = 'en'
			return true;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
