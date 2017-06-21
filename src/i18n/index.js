import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

import en from './lang/en'
import zh_CN from './lang/zh-CN'

const messages = {
    en,
    'zh-CN': zh_CN
}

const i18n = new VueI18n({
    locale: 'zh-CN',
    messages
})

export default i18n