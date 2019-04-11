import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Third party
import NowUiKit from './plugins/now-ui-kit';
import VueResource from 'vue-resource';
import Scrollactive from 'vue-scrollactive';
import { VLazyImagePlugin } from 'v-lazy-image';

import Animated from 'animate.css';
import VueMasonry from 'vue-masonry-css';
import VueAnalytics from 'vue-analytics';
import vueg from 'vueg';

import { ObserveVisibility } from 'vue-observe-visibility';

Vue.config.productionTip = false;

Vue.use(NowUiKit);
Vue.use(VueResource);
Vue.use(Scrollactive);
Vue.use(VLazyImagePlugin);

Vue.use(Animated);
Vue.use(VueMasonry);

Vue.use(vueg, router, {
  duration: 0.2,
  enter: 'touchPoint'
});

// google analytics
if (document.location.hostname.search('localhost') !== -1) {
  // console.log('dev time!! GA enabled in a seperate account');
  Vue.use(VueAnalytics, {
    id: 'UA-115061046-3',
    router,
    autoTracking: {
      shouldRouterUpdate(to, from) {
        return to.path !== from.path;
      }
    },
    debug: {
      enabled: false, // default false
      trace: false, // default false
      sendHitTask: true // default false
    }
  });
} else {
  Vue.use(VueAnalytics, {
    id: 'UA-115061046-1',
    router,
    autoTracking: {
      shouldRouterUpdate(to, from) {
        return to.path !== from.path;
      }
    }
  });
}

Vue.prototype.$eventBus = new Vue();
Vue.directive('observe-visibility', ObserveVisibility);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
