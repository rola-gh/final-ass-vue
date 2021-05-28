import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import Blog from './components/blog';
import Create from './components/blog/create';
import Details from './components/blog/details';
import Home from './components/home';

Vue.config.productionTip = false
Vue.use(VueRouter)


const routes=[
  {path:'/blog' , component:Blog},
  {path:'/create' , component:Create},
  {path:'/details' , component:Details},
  {path:'/' , component:Home},
];

const router = new VueRouter({
    routes,
    mode:'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
