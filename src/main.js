import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './config/routes'
import "bootstrap/dist/css/bootstrap.min.css"

Vue.config.productionTip = false
Vue.use(VueRouter)

import UUID from "vue-uuid";

Vue.use(UUID);

const router = new VueRouter({
    routes,
    mode:'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
