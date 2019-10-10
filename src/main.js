import Vue from 'vue';
import App from './App.vue';
//1.引用
import VueRouter from 'vue-router';
import Layout from './components/Layout';
import store from '@/store/index';
//2.使用
Vue.use(VueRouter);

//3.实例化
//使用历史模式，根路径重定向
const router = new VueRouter({
	mode: 'history',
	routes:[{
		path: '/',
		redirect: '/all'
	},{
		path: '/:filter',
		name: 'Filter',
		component: App
	}]
});


new Vue({
	store,
	router,
  render: h => h(Layout),
}).$mount('#app')




Vue.config.productionTip = false;
//4.使用

