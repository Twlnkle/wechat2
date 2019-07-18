import Vue from 'vue'
import App from './App.vue'
import router from "./Router/router.js"
import Mint from 'mint-ui';
import "../node_modules/mint-ui/lib/style.css"

Vue.use(Mint);
require("./Mock/mock.js");
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
