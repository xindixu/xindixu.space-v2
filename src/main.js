import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import NowUiKit from './plugins/now-ui-kit';
import Scrollactive from 'vue-scrollactive';
import Animated from 'animate.css';
import VueShowdown from 'vue-showdown';
import VueMasonry from 'vue-masonry-css';
import VueAnalytics from 'vue-analytics';
import vueg from 'vueg';
import VueResource from 'vue-resource';

import { ObserveVisibility } from 'vue-observe-visibility';

import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(NowUiKit);
Vue.use(Scrollactive);
Vue.use(Animated);
Vue.use(VueShowdown);
Vue.use(VueMasonry);
Vue.use(VueResource);

Vue.use(vueg, router, {
  duration: 0.2,
  enter: 'touchPoint'
});

Vue.use(VueAnalytics, {
  id: 'UA-115061046-1',
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

Vue.prototype.$eventBus = new Vue();
Vue.directive('observe-visibility', ObserveVisibility);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
