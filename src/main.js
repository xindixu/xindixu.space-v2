import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import NowUiKit from './plugins/now-ui-kit';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueScrollReveal from 'vue-scroll-reveal';
import Scrollactive from 'vue-scrollactive';

import { ObserveVisibility } from 'vue-observe-visibility';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(NowUiKit);
Vue.use(VueAwesomeSwiper);
Vue.use(VueScrollReveal);
Vue.use(Scrollactive);

Vue.directive('observe-visibility', ObserveVisibility);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
