import Vue from "vue";
import App from "./App.vue";
import store from "./vuex/store";
// import { Filter } from "@ant-design/icons-vue";
//
// Vue.component(Filter.name, Filter);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
