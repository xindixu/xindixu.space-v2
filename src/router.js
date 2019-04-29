import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('./pages/Home.vue');
const About = () => import('./pages/About.vue');
const Work = () => import('./pages/Work.vue');
// import Blog from './pages/Blog.vue';
const Casper = () => import('./pages/Casper.vue');
const WorkDetail = () => import('./pages/WorkDetail.vue');
const NotFound = () => import('./pages/NotFound.vue');

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
        header: { transparent: true }
      }
    },
    {
      path: '/about',
      name: 'about',
      components: { default: About, header: AppNavbar, footer: AppFooter },
      props: {
        header: { transparent: true }
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
    // {
    //   path: '/blog',
    //   name: 'blog',
    //   components: { default: Blog, header: AppNavbar, footer: AppFooter },
    //   props: {
    //     header: { colorOnScroll: 400 }
    //   }
    // },
    {
      path: '/casper',
      name: 'casper',
      components: { default: Casper, header: AppNavbar, footer: AppFooter },
      props: {
        header: { colorOnScroll: 0 }
      }
    },
    {
      path: '/*',
      name: '404',
      components: { default: NotFound, header: AppNavbar, footer: AppFooter },
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
