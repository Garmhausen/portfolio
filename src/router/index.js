import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Code from '../views/Code.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/code',
    name: 'Code',
    component: Code
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '*',
    name: 'Home',
    component: Home,
  }
]

const router = new VueRouter({
  routes
});

router.beforeEach(function (to, from, next) {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 300);
  next();
});

export default router
