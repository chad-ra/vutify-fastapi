/*
=========================================================
* Vuetify Material Dashboard 2 PRO - v3.0.0
=========================================================

* Product Page:  https://www.creative-tim.com/product/vuetify-material-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import DashboardPlugin from "./plugins/dashboard-plugin";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTimepicker from 'vue2-timepicker'
import OtpInput from "@bachdgvn/vue-otp-input";
import VueOtp2 from 'vue-otp-2';
import browserDetect from "vue-browser-detect-plugin";

// import axios from 'axios';

// axios.interceptors.request.use((config) => {
//   if (config.url.includes('login') || config.url.includes('register')) {
//     return config;
//   }
//   return {
//     ...config, headers: {
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     }
//   }
// }, (error) => {
//   return Promise.reject(error);
// });

// axios.interceptors.response.use((response) => {
//   const { data: { status } } = response;
//   if (status === 'Token is Expired') {
//     router.push('/login');
//   }
//   return response;
// }, (error) => {
//   return Promise.reject(error);
// });
store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
	localStorage.setItem('store', JSON.stringify(state));
});
Vue.component("v-otp-input", OtpInput);
Vue.config.productionTip = false;
// Photoswipe Gallery
import Photoswipe from "vue-pswipe";
Vue.use(Photoswipe);

// plugin setup
Vue.use(DashboardPlugin);

Vue.use(VueTimepicker)
Vue.use(VueOtp2)

Vue.use(VueAxios, axios)
Vue.use(browserDetect);
// Vue.prototype.$lift = window.liff

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
