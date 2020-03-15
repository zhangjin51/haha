import Vue from 'vue'
import { Button } from 'element-ui';
import App from './App.vue'
import { MyPlugin } from './pugins/myPlugin'

Vue.use(MyPlugin)
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
