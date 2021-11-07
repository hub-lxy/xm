import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios使用方法一： （方法二：将axios设置成一个插件）
// import axios from 'axios'
// Vue.prototype.$http = axios    //由于axios不是vue的插件不能通过Vue.use直接进行使用

// axios使用方法二： （用法和之前一模一样，只是修改了写法）
import MyHttpServer from './plugins/http.js' //这样做为了统一
Vue.use(MyHttpServer) //使用同方法一： this.$http.get()....

import '@/assets/css/reset.css' //全局引入css基础样式

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//使用饿了么插件
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')