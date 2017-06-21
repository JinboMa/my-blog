import Vue from 'vue'
import fetch from './fetch'
Vue.use(utils)

function utils(Vue) {
    Vue.prototype.$fetch = fetch
}