import Vue from "vue";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes';
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#home');

// let app = new Vue({
//     el: '#home',
//     data: {
//     },
//     methods: {

// 	},
// 	components: {
// 			'home': Pokedex
// 		},
// 	mounted() {
//     }
// })