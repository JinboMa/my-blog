import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import i18n from '@/i18n'
import utils from '@/utils'
import mock from 'mock'
import mixin from '@/mixin'

import '../static/animate/animate.min.css'
import '../static/icons/icon.css'
import 'jquery'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.js'

Vue.config.productionTip = false
Vue.mixin(mixin)

document.documentElement.style.fontSize = '14px'

window.vm = new Vue({
	el: '#app',
	router, i18n, utils,
	template: '<App/>',
	components: { App }
})
