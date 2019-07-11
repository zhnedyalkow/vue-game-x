import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import Vuelidate from 'vuelidate';

import store from '../Store/store';
import router from './routes';

import Button from './components/Utils/Button.vue';
import { MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

/* Reusable components */
Vue.component('app-button', Button);

/* Material */
Vue.use(MdCard);

/* Resource */
Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.http.options.root = '';

/* Misc */
Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
