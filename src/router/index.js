import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: require('../views/home.vue')
    },
    {
      path: '/news',
      name: 'News',
      component: require('../views/news.vue')
    },
    {
      path: '/newsdetail',
      name: 'NewsDetail',
      component: require('../views/newsdetail.vue')
    },
    {
      path: '/partner',
      name: 'Partner',
      component: require('../views/partner.vue')
    },
    {
      path: '/solution',
      name: 'Solution',
      component: require('../views/solution.vue')
    },
    {
      path: '/culture',
      name: 'Career',
      component: require('../views/career.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: require('../views/contact.vue')
    },
    { path: '/', redirect: '/home' }
  ]
})
