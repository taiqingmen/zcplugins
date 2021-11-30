// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//从npm 全局引入
// import zcskuidropdownlist from "zcsk-ui-dropdownlist"
import 'zcsk-ui-dropdownlist/dist/zc-plugins.css'


//从打包文件引入
// import zcskuidropdownlist from "../dist/zc-plugins.umd.js"
// import "../dist/zc-plugins.css"



// Vue.use(zcskuidropdownlist);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})