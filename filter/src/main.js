// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import route from './router'
// import routes from './router/index'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.filter('toUpperCase',(text)=>{
  return text.toUpperCase();
});

Vue.use(VueRouter);

const router = new VueRouter({

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  route,
  components: { App },
  template: '<App/>'
})
