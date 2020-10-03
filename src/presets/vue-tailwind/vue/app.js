import Vue from 'vue';
import components from '@/components';
import App from '@/App.vue';

Object.keys(components).forEach((componentKey) => {
  Vue.component(componentKey, components[componentKey]);
});
new Vue({
// store,
  render: (h) => h(App),
}).$mount('#app');
