import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Work from './pages/Work.vue';
import Blog from './pages/Blog.vue';
import Casper from './pages/Casper.vue';
import WorkDetail from './pages/WorkDetail.vue';

import AppNavbar from './layout/AppNavbar.vue';
import AppFooter from './layout/AppFooter.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        header: AppNavbar,
        footer: AppFooter
      },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/about',
      name: 'about',
      components: { default: About, header: AppNavbar, footer: AppFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/work',
      name: 'work',
      components: {
        default: Work,
        header: AppNavbar,
        footer: AppFooter
      },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/work/:id',
      name: 'workDetail',
      components: { default: WorkDetail, header: AppNavbar, footer: AppFooter },
      props: {
        default: true,
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/blog',
      name: 'blog',
      components: { default: Blog, header: AppNavbar, footer: AppFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/casper',
      name: 'casper',
      components: { default: Casper, header: AppNavbar, footer: AppFooter },
      props: {
        header: { colorOnScroll: 0 }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: 'history'
});
